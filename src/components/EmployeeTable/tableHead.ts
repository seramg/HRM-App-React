import styled from "styled-components";

const TableHeadWrapper = styled.thead`
  .table-title {
    cursor: pointer;
    color: var(--secondary-color);
  }
`;

const TableHeadIconWrapper = styled.span<{ $visible: boolean }>`
  transition: 300ms;
  cursor: pointer;
  visibility: ${(props) => (props.$visible ? "visible" : "hidden")};

`;
export {TableHeadWrapper,TableHeadIconWrapper};
