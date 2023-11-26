import { Employee } from "../../../../core/interfaces/interface.ts";
import TableDataWrapper from "./tableData.ts";
import StyledLink from "../../../../components/StyledLink.ts";
import Button from "../../../../components/Button/Button.tsx";
import SkillsChip from "../../../../components/Skills/SkillsChip.tsx";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function TableData({ employee, index, changeDltModalOpenStatus, idToDltProp }: {
  employee: Employee; index: number, changeDltModalOpenStatus: () => void, idToDltProp: {
    idToDlt: string;
    addIdToDlt: (idToDlt: string) => void;
  }
}) {
  const navigate = useNavigate();

  const handleEmployeeDetailsView = () => {
    navigate(`/view-employee?employeeId=${employee.id}`);
  };

  const handleCancelBtn = () => {
    changeDltModalOpenStatus();
    idToDltProp.addIdToDlt(employee.id);
  }

  const [hover,setHover] = useState(false);

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  return (
    <TableDataWrapper
      key={employee.id}
      className={index % 2 !== 0 ? "alternate-table-row-color" : ""} // alternate colour for each row
    >
      <td className="employee-data employee-id">{employee.id}</td>
      {/* navigating to view employee page */}
      <td className="employee-data employee-view" onClick={handleEmployeeDetailsView}>
        {employee.emp_name}
      </td>
      <td className="employee-data">{employee.designation}</td>
      <td className="employee-data">{employee.department}</td>
      <td className="employee-data" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <SkillsChip skills={employee.skills} />
        {hover && <div className="tooltip">Tooltip Text</div>}
      </td>
      <td className="employee-data">
        <div className=" actions-list common-flex">
          {/* navigating to edit employee page */}
          <StyledLink to={`/edit-employee?employeeId=${employee.id}`}>
            <Button icon="edit"></Button>
          </StyledLink>
          {/* opens the modal on click */}
          <Button icon="delete" onClick={handleCancelBtn}></Button>
        </div>
      </td>
    </TableDataWrapper>
  );
}

export default TableData;
