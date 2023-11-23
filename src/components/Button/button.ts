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
  `;
  export default ButtonWrapper;