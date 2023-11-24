import styled from "styled-components";

const DeleteModalWrapper = styled.div`
   top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: fixed;
  background-color: white;
  border-radius: 10px;
  border: 2px solid var(--secondary-color);
  display: flex;
  flex-direction: column;
  padding: 10px;
  z-index: 5;

  button{
    background:none;
    color: var(--secondary-color) !important;

    > span{
          color: var(--secondary-color) !important;
    }
  }
  .close-btn{
    align-self: end;
  }
`;
export default DeleteModalWrapper;
