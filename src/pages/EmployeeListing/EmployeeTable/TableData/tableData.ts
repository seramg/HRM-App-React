import styled from "styled-components";

const TableDataWrapper = styled.tr`
z-index: -15;

.employee-data{
    font-size: 14px;
    font-weight: 500;
    position:relative;
}
.employee-view{
    color: #0000FF;
    cursor:pointer; 

    &:visited{
        color:#800080;
    }
    &:active{
        text-decoration:underline;
    }
    &:hover{
        color:#000099;
        text-decoration:underline;
    }
}
button {
    flex-direction: row-reverse;
    background: none;
    padding: 0;
    border-radius: 0;
}

.tooltip {
    position: absolute;
    background-color: #333;
    color: white;
    padding: 5px;
    border-radius: 3px;
    z-index: 10;
    /* Adjust the positioning as needed */
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    visibility: visible;
    opacity: 1;
    transition: opacity 0.3s ease-in-out;
  }
  
  .tooltip:before {
    content: '';
    position: absolute;
    border-width: 5px;
    border-style: solid;
    border-color: transparent transparent #333 transparent;
    top: -10px;
    left: 50%;
    transform: translateX(-50%);
  }
  
`;
export default TableDataWrapper;