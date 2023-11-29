import styled from "styled-components";
import colors from "../../core/constants/colors";

const Fieldset = styled.fieldset`
  margin: 30px 0;
  background-color:  ${colors.WHITE_COLOR};
  .submit-btn {
    margin: 30px;
  }
  .select-list {
    margin-bottom: 30px;
  }
`;
const InputRow = styled.div`
  gap: 20px;
`;
export { InputRow, Fieldset };
