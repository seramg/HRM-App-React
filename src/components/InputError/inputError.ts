import styled from "styled-components";

const InputErrorWrapper = styled.div`
  display: flex;
  border-radius: 5px;
  gap: 5px !important;
  padding: 5px;
  position: absolute;
  bottom:0;
  
  & > * {
    color: red !important;
    font-size: 10px;
  }
`;
export default InputErrorWrapper;
