import { useEffect, useState } from "react";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import TableWrapper from "./employeeTable.ts";
import Button from "../Button/Button.tsx";
import Employee from "../../core/interfaces/interface.ts";

function EmployeeTable() {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const getData = () => {
    fetch("/data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson.employees);
        setEmployees(myJson.employees);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    /* {data && data.length > 0 && data.map((item) => <p>{item}</p>)} */
    <TableWrapper>
      <thead>
        <tr>
          <th>
            <Button icon="expand_more" className="table-title">
              Employee Id
            </Button>
          </th>
          <th>
            <Button icon="expand_more" className="table-title">
              Name
            </Button>
          </th>
          <th>
            <Button icon="expand_more" className="table-title">
              Designation
            </Button>
          </th>
          <th>
            <Button icon="expand_more" className="table-title">
              Department
            </Button>
          </th>
          <th>
            <span className="table-title"> Skills </span>
          </th>
          <th>
            <span className="table-title"> Actions </span>
          </th>
        </tr>
      </thead>
      <tbody>
        {employees.length > 0 ?
          employees.map((employee: Employee) => (
            <tr>
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
                  <Button icon="visibility">""</Button>
                  <Button icon="edit">""</Button>
                  <Button icon="delete">""</Button>
                </div>
              </td>
            </tr>
          )):
          <td className="no-data" colSpan={6}>No data Available</td>
        }
      </tbody>
    </TableWrapper>
  );
}
export default EmployeeTable;
