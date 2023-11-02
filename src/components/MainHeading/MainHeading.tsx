import React from "react";
import SectionWrapper from "./mainHeading";
import Button from "../Button/Button.tsx"

function MainHeading() {
  return (
    <SectionWrapper className="common-section">
      <h1 className="page-title">Employees</h1>
      <Button name="Add New Employee" icon="add_circle" />
    </SectionWrapper>
  );
}
export default MainHeading;
