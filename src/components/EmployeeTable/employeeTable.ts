import styled from "styled-components";

const TableWrapper = styled.table`
    border: 1px solid var(--secondary-color);
    margin-bottom: 80px;
    border-collapse: collapse;
    border-spacing: 0;
    width: 100%;  
    background-color: white;

    .material-symbols-outlined{
      color:var(--secondary-color);
    }
    button{
        flex-direction: row-reverse;
        background: none;
        padding:0;
        border-radius:0;
    }
}
.table-title{
    display: flex;
    cursor: pointer;
    color: var(--secondary-color);
  }
  .employee-data {
    font-size: 14px;
    font-weight:normal;
    border-bottom: 1px solid  #D3D3D3;
  }
  .no-data {
    text-align: center;
  }
  .sort-icon {
    transition: 300ms;
    cursor: pointer;
    visibility: hidden;
  } 
  .skill-list{
    display: flex;
    align-items: center;  
    gap: 10px;
  }
  .skill-card {
    background-color: var(--primary-color);
    padding: 10px;
    border-radius: 10px;
    color: white;
  }
  
`;
export default TableWrapper;
