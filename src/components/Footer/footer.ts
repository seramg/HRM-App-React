import styled from "styled-components";
import colors from "../../core/constants/colors";

const FooterWrapper = styled.footer`
    margin-top: auto;
    bottom: 0;
    width: 100%;
    background-color:  ${colors.WHITE_COLOR};    
    border-top: 1px solid ${colors.SECONDARY_COLOR};
    padding: 20px 0 20px 0;
    text-align: center;
    font-size: 12px;
    position:fixed;
  }
  `;
export default FooterWrapper;
