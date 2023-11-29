import styled from "styled-components";
import colors from "../../core/constants/colors";

const InputWrapper = styled.div`
  gap: 10px;
  display: flex;
  flex-direction: column;
  flex: 1;

  input {
    padding: 10px;
    outline: none;
    color: ${colors.SECONDARY_COLOR};
    background-color: white;
    border: 1px solid ${colors.LIGHT_GRAY_COLOR};
    font-size: 14px,

    &::placeholder {
      color: ${colors.DARK_GRAY_COLOR};
      font-size: 14px;
    }
    &:focus {
      border: 1px solid ${colors.DARK_GRAY_COLOR};
    }
  }
  input[type="date"]::-webkit-input-placeholder,
  input[type="date"]::placeholder {
    color: ${colors.DARK_GRAY_COLOR} !important;
  }

  .input-border-error, .input-border-error:focus {
    border: 1px solid red;
  }  
  .input-field-error {
    display: flex;
    flex-direction: column;
    position: relative;
    min-height: 70px; /* Adjust the min-height based on your design */  
  }
  .placeholder {
    color: ${colors.DARK_GRAY_COLOR};
    font-size: 14px;
  }
  .radio-list {
    gap: 15px;
    justify-content: flex-start;
  }
  .select-border-radius{
    border-radius: 4px;
  }
`;
export default InputWrapper;
