import styled from "styled-components";

const ActionsWrapper = styled.div`
    padding: 20px;
    margin-bottom: 30px;
    border-radius: 10px;
    border: 1px solid  var(--dark-gray-color);
    background-color:var(--white-color);
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
