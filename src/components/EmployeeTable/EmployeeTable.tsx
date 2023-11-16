import { useContext } from "react";
import { Employee } from "../../core/interfaces/interface.ts";
import DataContext from "../../core/store/DataContext.tsx";
import TableWrapper from "./employeeTable.ts";
import TableData from "./TableData/TableData.tsx";
import TableHead from "./TableHead/TableHead.tsx";
import Loader from "./../Loader/Loader.tsx";
function EmployeeTable() {
  const { employees, loading } = useContext(DataContext);

  return (
    <TableWrapper>
      <TableHead />
      {loading ? (
        <Loader />
      ) : (
        <tbody>
          {employees.length > 0 ? (
            employees.map((employee: Employee, index: number) => (
              <TableData key={index} employee={employee} index={index} />
            ))
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
