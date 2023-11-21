import { useState } from "react";
import { Employee } from "../../../core/interfaces/interface.ts";
import TableDataWrapper from "./tableData.ts";
import StyledLink from "./../../StyledLink.ts";
import Button from "./../../Button/Button.tsx";
import SkillsChip from "./../../Skills/SkillsChip.tsx";
import DeleteModal from "../../DeleteModal/DeleteModal.tsx";

function TableData({ employee, index }: { employee: Employee; index: number }) {
  
  const [deleteModal, setDeleteModal] = useState(false); // determines whether the modal is open or close 

  const cancelDltModal = () => {
    setDeleteModal(() => !deleteModal);
  };

  return (
    <TableDataWrapper
      key={employee.id}
      className={index % 2 !== 0 ? "alternate-table-row-color" : ""} // alternate colour for each row
    >
      <td className="employee-data employee-id">{employee.id}</td>
      <td className="employee-data">{employee.emp_name}</td>
      <td className="employee-data">{employee.designation}</td>
      <td className="employee-data">{employee.department}</td>
      <td className="employee-data">
        <SkillsChip skills={employee.skills} />
      </td>
      <td className="employee-data">
        <div className=" actions-list common-flex">
          {/* navigating to view employee page */}
          <StyledLink to={`/view-employee?employeeId=${employee.id}`}>
            <Button icon="visibility"></Button>
          </StyledLink>
          {/* navigating to edit employee page */}
          <StyledLink to={`/edit-employee?employeeId=${employee.id}`}>
            <Button icon="edit"></Button>
          </StyledLink>
          {/* opens the modal on click */}
          <Button icon="delete" onClick={cancelDltModal}></Button>
        </div>
      </td>

      {deleteModal && <DeleteModal cancelDltModal={cancelDltModal} employeeId={employee.id} />}
    </TableDataWrapper>
  );
}

export default TableData;
