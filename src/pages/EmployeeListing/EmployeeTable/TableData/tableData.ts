import styled from "styled-components";

const TableDataWrapper = styled.tr`
.employee-data{
    font-size: 14px;
    font-weight: 500;
    padding: 10px;
}

button {
    flex-direction: row-reverse;
    background: none;
    padding: 0;
    border-radius: 0;
}

.skill-list{
    max-width: 100%;
    overflow-x: auto;
}
`;
export default TableDataWrapper;