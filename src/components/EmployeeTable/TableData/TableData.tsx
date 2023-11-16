import { useState } from "react";
import { Employee } from "../../../core/interfaces/interface.ts";
import TableDataWrapper from "./tableData.ts";
import StyledLink from "./../../StyledLink.ts";
import Modal from "./../../Modal/Modal.tsx";
import Button from "./../../Button/Button.tsx";

function TableData({ employee, index }: { employee: Employee; index: number }) {
  const [modal, setModal] = useState(false);

  const cancelDltModal = () => {
    setModal(() => !modal);
  };
  return (
    <TableDataWrapper
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
          <Button icon="delete" onClick={cancelDltModal}></Button>
        </div>
      </td>

      {modal && <Modal cancelModal={cancelDltModal} employeeId={employee.id} />}
    </TableDataWrapper>
  );
}

export default TableData;
