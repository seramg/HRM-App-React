import EmployeeViewWrapper from "./employeeView.ts";
import { useLocation } from "react-router-dom";
import DataContext from "../../core/store/DataContext.tsx";
import { useContext, useState } from "react";
import { getDateView, getWorkExp } from "../../utils/helper.ts";
import DetailsSection from "./Details.tsx";
import Button from "../../components/Button/Button.tsx";
import ButtonGrpWrapper from "../../components/Button/buttonGrpWrapper.ts";

function EmployeeView() {
  const location = useLocation();
  const employeeId = location.state;
  const { employees } = useContext(DataContext);
  const employee = employees.find((employee) => employee.id === employeeId);
  console.log(employee);
  const [activeBtn, setActiveBtn] = useState("profile");

  const handleButtonClick = (buttonType: string) => {
    setActiveBtn(buttonType);
  };

  return (
    employee && (
      <EmployeeViewWrapper className="main-section global-width">
        <h2 className="employee-name">{employee.emp_name}</h2>
        <ButtonGrpWrapper className="details-section common-flex">
          <Button
            icon="person"
            children="Personal Details"
            className={`detail-heading ${
              activeBtn === "profile" ? "add-border-bottom" : ""
            }`}
            onClick={() => handleButtonClick("profile")}
          />
          <Button
            icon="business_center"
            children="Work Details"
            className={`detail-heading ${
              activeBtn === "work" ? "add-border-bottom" : ""
            }`}
            onClick={() => handleButtonClick("work")}
          />
        </ButtonGrpWrapper>
        {activeBtn === "profile" ? (
          <div className="detail-element">
            <DetailsSection
              icon="person"
              title="Full Name"
              content={employee.emp_name}
            />
            <DetailsSection
              icon="mail"
              title="Email"
              content={employee.email}
            />
            <DetailsSection
              icon="phone_iphone"
              title="Phone No"
              content={employee.phone}
            />
            <DetailsSection
              icon="calendar_month"
              title="Date of Birth"
              content={getDateView(employee.date_of_birth)}
            />
            <DetailsSection
              icon="home"
              title="Address"
              content={employee.address}
            />
          </div>
        ) : (
          <div className="detail-element">
            <DetailsSection
              icon="person"
              title="Designation"
              content={employee.designation}
            />
            <DetailsSection
              icon="mail"
              title="Department"
              content={employee.department}
            />
            <DetailsSection
              icon="phone_iphone"
              title="Employment Mode"
              content={employee.employment_mode}
            />
            <DetailsSection
              icon="calendar_month"
              title="Date of Joining"
              content={getDateView(employee.date_of_joining)}
            />
            <DetailsSection
              icon="home"
              title="Work Experience"
              content={getWorkExp(employee.date_of_joining)}
            />
          </div>
        )}
      </EmployeeViewWrapper>
    )
  );
}

export default EmployeeView;
