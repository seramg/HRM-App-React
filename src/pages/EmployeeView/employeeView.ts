import { styled } from "styled-components";

const EmployeeViewWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 30px;

  p,
  h2,
  h3 {
    margin: 0 0 10px 0;
    text-align: center;
  }
  h3 {
    color: var(--placeholder-color);
  }

  .primary-details {
    display: flex;
    flex-direction: column;
  }
`;
export default EmployeeViewWrapper;
