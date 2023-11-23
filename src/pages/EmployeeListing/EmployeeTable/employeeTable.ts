import styled from "styled-components";

const TableWrapper = styled.table`
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
  table-layout: fixed;

  .material-symbols-outlined {
    color: var(--secondary-color);
  }

  .actions-list {
    gap: 5px;
  }
  
  .no-data {
    text-align: center;
  }
  .alternate-table-row-color {
    background-color: var(--white-color);
  }
  .pagination-bar {
    width: 100%;
    display: flex;
    justify-content: center;
  }  
`;
export default TableWrapper;
