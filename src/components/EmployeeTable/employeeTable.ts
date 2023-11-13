import styled from "styled-components";

const TableWrapper = styled.table`
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;

  .material-symbols-outlined {
    color: var(--secondary-color);
  }

  .actions-list {
    gap: 5px;
  }
  .employee-data {
    font-size: 14px;
    font-weight: normal;
  }

  .no-data {
    text-align: center;
  }
  .skill-list {
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
