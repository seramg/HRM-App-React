import SectionWrapper from "./mainHeading.ts";
import StyledLink from './../../../components/StyledLink.ts';
import Button from "../../../components/Button/Button.tsx";

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
