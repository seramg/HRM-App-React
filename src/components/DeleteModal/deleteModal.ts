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
  align-items: center;
  justify-content:center;
  padding: 15px;
  z-index: 1;

  .delete-modal-heading{
    margin: 0;
    font-weight: 900;
    font-size: 22px;
    line-height: 1.5;
    color: var(--secondary-color);  
  }
  .confirm-delete{
    text-align: center;
  }
  .warning-container{
    display:flex;
    flex-direction:column;
    background-color:#FEECDC;
    border-radius:10px;
    padding:10px;
  }
  .warning-heading{
    justify-content:flex-start;
    gap:5px;
  }
  .warning-heading >*{
    color: #B43403;
    font-weight:900;
  }
  .warning-text{
    margin:0 0 10px 0;
    color: #B43403;
  }
  .button-gap{
    gap:20px !important;
  }
  button{
    gap:5px;
    padding:10px;
  }
  .delete-btn{
    background-color: #E02424 !important;

    &:hover{
      background-color: rgba( 200,30,30, 1) !important;
    }
  }
  .cancel-btn{
    background-color:  white;
    border:2px solid var(--light-gray-color);
    color: var(--dark-gray-color) !important;

    &:hover{
      background-color: rgba(243, 244, 246, 1)!important
    }

  }
  .close-btn{
    align-self: end;
    background-color:  transparent;
    >span{
      color: var(--dark-gray-color);
    }
    &:hover{
      background-color: var(--light-gray-color);
    }
  }
`;
export default DeleteModalWrapper;
