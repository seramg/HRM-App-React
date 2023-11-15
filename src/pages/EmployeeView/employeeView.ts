import { styled } from "styled-components";

const EmployeeViewWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 80px !important;
  background-color: var(--white-color);
  padding: 20px 0;
  border: 1px solid var(--dark-gray-color);
  border-radius: 10px;
  
  > * {
    padding: 0   20px;
  }
  p {
    margin: 0;
  }
  h2 {
    margin: 0 0 10px 0;
    text-align: center;
    padding-bottom: 10px;
  }
  .details-section {
    border-top: 1px solid var(--dark-gray-color);
    border-bottom: 1px solid var(--dark-gray-color);
    width: 100%;
    justify-content: flex-start;
  }

  .material-symbols-outlined {
    color: var(--secondary-color);
    font-size: 20px;
  }
  button {
    background:none;
    border-radius:0;
    font-size: 18px;
    color: var(--secondary-color);
  }
  .add-border-bottom{
    border-bottom: 1px solid var(--primary-color);
  }

  .detail-element {
    margin: 20px 0 ;
    display:flex;
    flex-direction:column;
    gap:10px;
    width:100%;
    .material-symbols-outlined {
      color: var(--light-gray-color);
    } 
  }

`;
export default EmployeeViewWrapper;
