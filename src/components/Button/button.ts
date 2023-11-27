  import styled from 'styled-components';

  const ButtonWrapper = styled.button`
  border: none;
  background: var(--primary-color);
  cursor: pointer;
  color: white;
  padding: 16px 20px;
  border-radius: 10px;
  text-decoration: none;
  white-space: nowrap; 
  overflow: hidden; 
  text-overflow: ellipsis; 
  
  > label{
    cursor: pointer;
  }
  .btn-loader{
    width: 24px;
    height: 24px;
    margin: auto;  
    border: 5px solid #FFF;
    border-bottom-color: var(--white-color);
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