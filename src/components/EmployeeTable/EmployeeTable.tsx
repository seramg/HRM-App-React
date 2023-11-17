import { useContext, useMemo } from "react";
import { Employee } from "../../core/interfaces/interface.ts";
import DataContext from "../../core/store/DataContext.tsx";
import TableWrapper from "./employeeTable.ts";
import TableData from "./TableData/TableData.tsx";
import TableHead from "./TableHead/TableHead.tsx";
import Loader from "./../Loader/Loader.tsx";
import { filterData, searchData, sortData } from "../../utils/helper.ts";

function EmployeeTable() {
  const { employees, loading, tableProps, dataEmployees } =
    useContext(DataContext);

  const employeesVal = useMemo(() => {
    if (employees) {
      const sortedEmployees = sortData(dataEmployees, tableProps);
      const filteredEmployees = filterData(sortedEmployees, tableProps);
      const searchedEmployees = searchData(filteredEmployees, tableProps);
      return [...searchedEmployees];
    }
    return [...employees];
  }, [tableProps, employees]);

  return (
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
                employee &&
                <TableData
                  key={employee.id}
                  employee={employee}
                  index={index}
                />
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
  );
}
export default EmployeeTable;
