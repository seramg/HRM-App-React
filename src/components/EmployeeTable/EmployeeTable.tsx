import TableWrapper from "./employeeTable.ts";
import { Employee } from "../../core/interfaces/interface.ts";
import DataContext from "../../core/store/DataContext.tsx";
import React from "react";
import TableHead from "./TableHead.tsx";
import TableData from "./TableData.tsx";

function EmployeeTable() {
  const { employees } = React.useContext(DataContext);

  return (
    <TableWrapper>
      <TableHead />
      <tbody>
        {employees.length > 0 ? (
          employees.map((employee: Employee, index: number) => (
            <TableData key={index} employee={employee} index={index} />
          ))
        ) : (
          <td className="no-data" colSpan={6}>
            No data Available
          </td>
        )}
      </tbody>
    </TableWrapper>
  );
}
export default EmployeeTable;
