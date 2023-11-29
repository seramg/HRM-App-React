import styled from "styled-components";
import colors from "../../../core/constants/colors";

const ActionsWrapper = styled.div`
    padding: 20px;
    margin-bottom: 30px;
    border-radius: 10px;
    border: 1px solid  ${colors.LIGHT_GRAY_COLOR};
    background-color:  ${colors.WHITE_COLOR};
    align-items:flex-end !important;
    .filter-title{
      align-self:center;
    }
    .form-flex-align{
      align-items:flex-end !important;
    }
    .select-list > *{
      flex:initial !important;
      width:200px
    }
  }
`;
export default ActionsWrapper;
