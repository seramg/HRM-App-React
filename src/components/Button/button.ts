import styled from 'styled-components';
import colors from '../../core/constants/colors';

const ButtonWrapper = styled.button`
  border: none;
  background: ${colors.PRIMARY_COLOR};
  cursor: pointer;
  color: ${colors.WHITE_COLOR};
  padding: 16px 20px;
  border-radius: 10px;
  text-decoration: none;
  white-space: nowrap; 
  overflow: hidden; 
  text-overflow: ellipsis; 
  
  >*{
    width:100%;
  }
  > label{
    cursor: pointer;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis; 
  }
  .btn-loader{
    width: 24px;
    height: 24px;
    margin: auto;  
    border: 5px solid #FFF;
    border-bottom-color: ${colors.WHITE_COLOR};
    border-radius: 100%;
    animation: rotation 1s linear infinite;

    @keyframes rotation {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
    } 
  }
  `;
export default ButtonWrapper;