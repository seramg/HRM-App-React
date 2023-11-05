import styled from "styled-components";

const InputWrapper = styled.label`
  gap: 10px;
  margin-bottom: 30px;
  flex: 1;
  display: flex;
  flex-direction: column;
  position: relative;

  .input-error {
    border-radius: 5px;
    gap:5px;
    background-color: #ffcccb;
    padding:5px;
  }
  .input-error * {
    color: red !important;
    font-size:10px;
  }
  input[type="text"],
  input[type="email"],
  input[type="date"],
  input[type="tel"],
  textarea,
  select {
    flex: 1;
    background: transparent;
  }
  input,
  textarea {
    padding: 10px;
    outline: none;
    color: var(--secondary-color);
  }
`;
export default InputWrapper;
