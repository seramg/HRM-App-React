import Button from "../Button/Button.tsx";
import StyledLink from "../StyledLink.ts";
import SectionWrapper from "./mainHeading";

function MainHeading() {
  return (
    <SectionWrapper className="common-section">
      <h1 className="page-title">Employees</h1>
      {/* navigating to add-employee page */}
      <StyledLink to="add-employee">
        <Button icon="add_circle">Add New Employee</Button>
      </StyledLink>
    </SectionWrapper>
  );
}
export default MainHeading;
