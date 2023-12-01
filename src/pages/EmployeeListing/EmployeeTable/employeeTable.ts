import styled from "styled-components";
import colors from "../../../core/constants/colors";

const TableWrapper = styled.table`
  border-collapse: collapse;
  border-spacing: 0;
  table-layout: fixed;
  
  .loader-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px; /* Adjust the height as needed */
    width: 150vh;
  }
  .actions-list {
    gap: 5px;
  }

  .no-data {
    text-align: center;
  }
  .alternate-table-row-color {
    background-color: ${colors.WHITE_COLOR};
  }
  .pagination-bar {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .no-border-row {
    border: none;
  }
`;
export default TableWrapper;
