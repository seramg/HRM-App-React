import { styled } from "styled-components";
import colors from "../../core/constants/colors";

const EmployeeViewWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 80px !important;
  background-color:  ${colors.WHITE_COLOR};
  padding: 20px 0;
  border: 1px solid ${colors.LIGHT_GRAY_COLOR};
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
    border-top: 1px solid ${colors.LIGHT_GRAY_COLOR};
    border-bottom: 1px solid ${colors.LIGHT_GRAY_COLOR};
    width: 100%;
    justify-content: flex-start;
  }

  .material-symbols-outlined {
    color: ${colors.SECONDARY_COLOR};
    font-size: 20px;
  }
  button {
    background:none;
    border-radius:0;
    font-size: 18px;
    color: ${colors.SECONDARY_COLOR};
  }
  .add-border-bottom{
    border-bottom: 1px solid ${colors.PRIMARY_COLOR};
  }

  .detail-element {
    margin: 20px 0 ;
    display:flex;
    flex-direction:column;
    gap:10px;
    width:100%;
    .material-symbols-outlined {
      color: ${colors.LIGHT_GRAY_COLOR};
    } 
  }

`;
export default EmployeeViewWrapper;
