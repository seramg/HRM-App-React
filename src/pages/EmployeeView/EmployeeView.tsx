import EmployeeViewWrapper from "./employeeView.ts";
import { useLocation } from "react-router-dom";
import DataContext from "../../core/store/DataContext.tsx";
import { useContext } from "react";
import { getWorkExp } from "../../utils/helper.ts";

function EmployeeView() {
  const location = useLocation();
  const employeeId = location.state;
  const { employees } = useContext(DataContext);
  const employee = employees.find((employee) => employee.id === employeeId);

  return (
    employee && (
      <EmployeeViewWrapper className="main-section global-width">
        <div className="m-30 primary-details">
          <h2 className="name">{employee.emp_name}</h2>
          <p className="email">{employee.email}</p>
          <p className="phone">{employee.phone}</p>
          <p className="employee-id">{employee.id}</p>
        </div>
        <div className="other-details m-30 common-flex">
          <div className="date_of_birth">
            <h3 className="date_of_birth">Date of Birth</h3>
            <p className="value">{employee.date_of_birth}</p>
          </div>
          <div className="date_of_joining">
            <h3 className="date_of_joining">Date of Joining</h3>
            <p className="value">{employee.date_of_joining}</p>
          </div>
          <div className="work_exp">
            <h3 className="work_exp">Work Experience</h3>
            <p className="value">
              {getWorkExp(employee.date_of_joining)} years
            </p>
          </div>
        </div>
        <div className="other-details m-30 common-flex">
          <div className="department">
            <h3 className="department">Department</h3>
            <p className="value">{employee.department}</p>
          </div>
          <div className="designation">
            <h3 className="designation">Designation</h3>
            <p className="value">{employee.designation}</p>
          </div>
          <div className="employment_mode">
            <h3 className="employment_mode">Employment Mode</h3>
            <p className="value">{employee.employment_mode}</p>
          </div>
        </div>
        <div className="other-details m-30">
          <h3 className="address">Address</h3>
          <p className="value">{employee.address}</p>
        </div>
      </EmployeeViewWrapper>
    )
  );
}

export default EmployeeView;
