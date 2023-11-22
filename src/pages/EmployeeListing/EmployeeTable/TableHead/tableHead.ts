import styled from "styled-components";

const TableHeadWrapper = styled.thead`
  .table-button-head{
    cursor: pointer;
    color: var(--secondary-color);

  }
  .table-title {
    color: var(--secondary-color);
  }
    button {
    flex-direction: row-reverse;
    background: none;
    padding: 0;
    border-radius: 0;
  }
  th{
    font-size: 18px;
    font-weight: normal;
    color: var(--secondary-color);
  }
`;

const TableHeadIconWrapper = styled.span<{ $visible: boolean }>`
  transition: 300ms;
  cursor: pointer;
  visibility: ${(props) => (props.$visible ? "visible" : "hidden")};

`;
export {TableHeadWrapper,TableHeadIconWrapper};
