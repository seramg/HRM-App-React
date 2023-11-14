import { styled } from "styled-components";

const EmployeeViewWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 80px !important;
  background-color: var(--white-color);
  padding: 20px 0;

  >*{
    padding: 0 0 0 20px;
  }
  p,
  h2,
  h3 {
    margin: 0 0 10px 0;
    text-align: center;
  }
  h3 {
    color: var(--light-gray-color);
  }

  .primary-details {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .other-details:last-child {
    margin-bottom: 0;
  }
`;
export default EmployeeViewWrapper;
