import { styled } from "styled-components";

const DetailsWrapper = styled.div`
    justify-content:flex-start;
    border: 1px solid var(--dark-gray-color); 
  }
  .heading {
    padding: 5px;
    border-right: 1px solid var(--dark-gray-color); 
    gap:5px;
    width:20%;
    justify-content:flex-start;
  }
.content{
  width:90%;
}
  .title {
    font-size: 14px;
    color: var(--light-gray-color);
  }    
`;
export default DetailsWrapper;
