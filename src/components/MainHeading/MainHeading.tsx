import React, { useState } from "react";
import SectionWrapper from "./mainHeading";
import Button from "../Button/Button.tsx";
import { Link } from "react-router-dom";
function MainHeading() {
  return (
    <SectionWrapper className="common-section">
      <h1 className="page-title">Employees</h1>
      <Link to="employeeDetails">
        <Button
          name="Add New Employee"
          icon="add_circle"
        />
      </Link>
    </SectionWrapper>
  );
}
export default MainHeading;
