import React, { useState } from "react";
import SectionWrapper from "./mainHeading";
import Button from "../Button/Button.tsx";

function MainHeading() {
  function handleClick() {
  }
  return (
    <SectionWrapper className="common-section">
      <h1 className="page-title">Employees</h1>
      <Button name="Add New Employee" icon="add_circle" onClick={handleClick} />
    </SectionWrapper>
  );
}
export default MainHeading;
