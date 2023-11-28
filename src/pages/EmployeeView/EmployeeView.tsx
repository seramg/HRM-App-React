import EmployeeViewWrapper from "./employeeView.ts";
import { useNavigate, useSearchParams } from "react-router-dom";
import DataContext from "../../core/store/DataContext.tsx";
import { useContext, useEffect, useState } from "react";
import { getDateView, getWorkExp } from "../../utils/helper.ts";
import Button from "../../components/Button/Button.tsx";
import ButtonGrpWrapper from "../../components/Button/buttonGrpWrapper.ts";
import DetailsSection from "../../components/Details/Details.tsx";
import Loader from "../../components/Loader/loader.ts";
import { toast } from "react-toastify";

function EmployeeView() {
  let [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const employeeId = searchParams.get("employeeId");

  const { employees, loading } = useContext(DataContext);
  const [activeBtn, setActiveBtn] = useState("profile");

  const handleButtonClick = (buttonType: string) => {
    setActiveBtn(buttonType);
  };

  const employee = employees.find((emp) => emp && emp.id === employeeId);

  useEffect(() => {

    if (!employeeId) {
      // Display error toast after initial render
      toast.error("No employee Id was provided", {
        toastId: "employee-not-found",
      });
      navigate("/");
    } else {
      
      if (!loading && !employee) {
        console.log(employee, loading);
        throw new Response("Employee Not Found", { status: 404,statusText:"Employee Not Found" });
      }

    }
  }, [employeeId, employee, loading]);

  if (loading) return <Loader />;

  return (
    employee && (
      <EmployeeViewWrapper className="main-section global-width">
        <h2 className="employee-name">{employee.emp_name}</h2>
        <ButtonGrpWrapper className="details-section common-flex">
          <Button
            icon="person"
            children="Personal Details"
            className={`detail-heading ${activeBtn === "profile" ? "add-border-bottom" : ""
              }`}
            onClick={() => handleButtonClick("profile")}
          />
          <Button
            icon="business_center"
            children="Work Details"
            className={`detail-heading ${activeBtn === "work" ? "add-border-bottom" : ""
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
            <DetailsSection
              icon="home"
              title="Skills"
              content={employee.skills}
            />
          </div>
        )}
      </EmployeeViewWrapper>
    )
  );
}

export default EmployeeView;
