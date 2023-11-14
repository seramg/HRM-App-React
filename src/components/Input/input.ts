import styled from "styled-components";

const InputWrapper = styled.label`
  gap: 10px;
  display: flex;
  flex-direction: column;
  flex: 1;

  input {
    padding: 10px;
    outline: none;
    color: var(--secondary-color);
    background-color: white;
    border: 1px solid var(--dark-gray-color);

    &::placeholder {
      color: var(--light-gray-color);
      font-size: 14px;
    }
    &:focus {
      border: 1px solid var(--light-gray-color);
    }
  }
  input[type="date"]::-webkit-input-placeholder,
  input[type="date"]::placeholder {
    color: var(--light-gray-color);
  }
  .input-border-error {
    border: 1px solid red;
  }
  .input-field-error {
    display: flex;
    flex-direction: column;
  }
  .placeholder {
    color: var(--light-gray-color);
    font-size: 14px;
  }
  .radio-list {
    gap: 10px;
    justify-content: flex-start;
  }
  .select {
    overflow: hidden;
    text-overflow: emphasis;
    width: 200px;
  }
`;
export default InputWrapper;
