import { styled } from "styled-components";

const EmployeeViewWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 80px;
  background-color:var(--white-color);
  padding:20px 0;

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
  .other-details:last-child{
    margin-bottom:0
  }
`;
export default EmployeeViewWrapper;
