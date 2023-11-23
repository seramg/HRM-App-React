import { useContext, useMemo, useState } from "react";
import { Employee } from "../../../core/interfaces/interface.ts";
import DataContext from "../../../core/store/DataContext.tsx";
import TableWrapper from "./employeeTable.ts";
import TableData from "./TableData/TableData.tsx";
import TableHead from "./TableHead/TableHead.tsx";
import Loader from "../../../components/Loader/Loader.tsx";
import {
  filterData,
  removeNullEmployees,
  searchData,
  sortData,
} from "../../../utils/helper.ts";
import Pagination from "./Pagination/Pagination.tsx";

let pageSize = 5;

function EmployeeTable() {
  const { employees, loading, tableProps, dataEmployees } =
    useContext(DataContext);

  const [currentPage, setCurrentPage] = useState(1);
  let totalCount = 0;
  let totalPageCount = 0;

  const employeesTableView = useMemo(() => {
    if (!employees) {
      return [];
    }
    const sortedEmployees = sortData(dataEmployees, tableProps);
    const filteredEmployees = filterData(sortedEmployees, tableProps);
    const searchedEmployees = searchData(filteredEmployees, tableProps);
    const nonNullEmployees = removeNullEmployees(searchedEmployees);
    // Update totalCount based on the filtered data length
    totalCount = nonNullEmployees.length;

    // Calculate the total number of pages based on the filtered data length
    totalPageCount = Math.ceil(totalCount / pageSize);

    // Ensure that the current page is within the valid range
    const validCurrentPage = Math.min(currentPage, totalPageCount);

    const firstPageIndex = (validCurrentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;

    return nonNullEmployees.slice(firstPageIndex, lastPageIndex);
  }, [tableProps, employees, currentPage]);

  return (
    <>
      <TableWrapper>
        <TableHead />
        {loading ? (
          /* This component is rendered when data is fetching from database */
          <Loader />
        ) : (
          <tbody>
            {employeesTableView.length > 0 ? (
              employeesTableView.map((employee: Employee, index: number) => {
                return (
                  employee && (
                    <TableData
                      key={employee.id}
                      employee={employee}
                      index={index}
                    />
                  )
                );
              })
            ) : (
              <tr>
                <td className="no-data" colSpan={6}>
                  No data Available
                </td>
              </tr>
            )}
          </tbody>
        )}
      </TableWrapper>
      <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalPageCount={totalPageCount}
        pageSize={pageSize}
        onPageChange={(page: number) => setCurrentPage(page)}
      />
    </>
  );
}
export default EmployeeTable;
