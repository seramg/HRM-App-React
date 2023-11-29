import styled from "styled-components";
import colors from "../../core/constants/colors";

const HeaderWrapper = styled.header`
  background-color:  ${colors.WHITE_COLOR};
  border-bottom: 1px solid ${colors.LIGHT_GRAY_COLOR};

  .header-content {
    margin: 0 auto;
    padding: 20px 0px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .logo{
    position:relative
  }
`;
export default HeaderWrapper;
