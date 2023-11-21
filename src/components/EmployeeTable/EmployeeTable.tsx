import { useContext, useMemo, useState } from "react";
import { Employee } from "../../core/interfaces/interface.ts";
import DataContext from "../../core/store/DataContext.tsx";
import TableWrapper from "./employeeTable.ts";
import TableData from "./TableData/TableData.tsx";
import TableHead from "./TableHead/TableHead.tsx";
import Loader from "./../Loader/Loader.tsx";
import { filterData, searchData, sortData } from "../../utils/helper.ts";
import Pagination from "./Pagination/Pagination.tsx";

let PageSize = 10;

function EmployeeTable() {
  const { employees, loading, tableProps, dataEmployees } =
    useContext(DataContext);

  const [currentPage, setCurrentPage] = useState(1);

  const employeesVal = useMemo(() => {
    if (!employees) {
      return [];
    }

    const sortedEmployees = sortData(dataEmployees, tableProps);
    const filteredEmployees = filterData(sortedEmployees, tableProps);
    const searchedEmployees = searchData(filteredEmployees, tableProps);

    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;

    return searchedEmployees.slice(firstPageIndex, lastPageIndex);
  }, [tableProps, employees, currentPage]);

  return (
    <>
      <TableWrapper>
        <TableHead />
        {loading ? (
          <tbody>
            <Loader />
          </tbody>
        ) : (
          <tbody>
            {employeesVal.length > 0 ? (
              employeesVal.map((employee: Employee, index: number) => {
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
        totalCount={employees.length}
        pageSize={PageSize}
        onPageChange={(page: number) => setCurrentPage(page)}
      />
    </>
  );
}
export default EmployeeTable;
