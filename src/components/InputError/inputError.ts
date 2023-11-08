import styled from "styled-components";

const InputErrorWrapper = styled.div`
  border-radius: 5px;
  gap: 5px !important;
  background-color: #ffcccb;
  padding: 5px;
  & > * {
    color: red !important;
    font-size: 10px;
  }
`;
export default InputErrorWrapper;
