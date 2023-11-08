import styled from "styled-components";

const InputWrapper = styled.label`
  gap: 10px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  flex:1;

  input {
    flex: 1;
    background: transparent;
  }
  input {
    padding: 10px;
    outline: none;
    color: var(--secondary-color);
  }
  .select-placeholder {
    font-size: 14px;
  }
  .radio-list {
    gap: 10px;
  }
`;
export default InputWrapper;
