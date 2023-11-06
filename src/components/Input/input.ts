import styled from "styled-components";


const InputWrapper = styled.label`
  gap: 10px;
  margin-bottom: 30px;
  flex: 1;
  display: flex;
  flex-direction: column;
  position: relative;

  input,
  select {
    flex: 1;
    background: transparent;
  }
  input {
    padding: 10px;
    outline: none;
    color: var(--secondary-color);
  }
  .radio-grp {
    gap: 5px;
  }
  .radio-list {
    gap: 10px;
  }
`;
export default InputWrapper;
