import { Employee } from "../../core/interfaces/interface.ts";
import Button from "../Button/Button.tsx";
import StyledLink from "../StyledLink";

function TableData({ employee, index }: { employee: Employee; index: number }) {
  return (
    <tr
      key={employee.id}
      className={index % 2 !== 0 ? "alternate-table-row-color" : ""}
    >
      <td className="employee-data employee-id">{employee.id}</td>
      <td className="employee-data">{employee.emp_name}</td>
      <td className="employee-data">{employee.designation}</td>
      <td className="employee-data">{employee.department}</td>
      <td className="employee-data">
        <div className="skill-list">
          {employee.skills.map((skill) => (
            <span className="skill-card" key={skill.id}>
              {skill.name}
            </span>
          ))}
        </div>
      </td>
      <td className="employee-data">
        <div className=" actions-list common-flex">
          <StyledLink to="/employeeView" state={employee.id}>
            <Button icon="visibility"></Button>
          </StyledLink>
          <StyledLink to="employeeDetails" state={employee}>
            <Button icon="edit"></Button>
          </StyledLink>
          <Button icon="delete"></Button>
        </div>
      </td>
    </tr>
  );
}

export default TableData;
