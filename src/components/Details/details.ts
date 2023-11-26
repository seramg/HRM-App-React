import { styled } from "styled-components";

const DetailsWrapper = styled.div`
    justify-content:flex-start !important;
    border: 1px solid var(--light-gray-color); 

.heading {
    padding: 5px;
    border-right: 1px solid var(--light-gray-color); 
    width:20%;
    >*{
      display: inline-block;
      vertical-align: bottom; /* Align elements at the bottom */
    }
}

.content{
  width:80%;
  font-size: 14px;
  font-weight: 500;
}
  .title {
    margin-left: 10px;
    font-size: 14px;
    color: var(--dark-gray-color);
  }    
  .skill-card{
    font-size: 14px;
    font-weight: 500;  
  }
`;
export default DetailsWrapper;
