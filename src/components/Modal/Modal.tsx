import Button from "../Button/Button.tsx";
import ButtonGrpWrapper from "../Button/buttonGrpWrapper.ts";
import ModalWrapper from "./modal";

function Modal({cancelModal,employeeId }:{cancelModal:()=>void,employeeId:string}) {
    const confirmDlt = () => {
        console.log(employeeId)
        cancelModal();
    }
    return <ModalWrapper>
        <Button icon="close" className="close-btn" onClick={cancelModal}>
        </Button>
        <h2 className="subheading" >
            Are you sure you want to delete the employee {employeeId}?
        </h2>
        <p className="text">
            The data selected will be permanently removed. It would remove all the details related to the employee. Are
            you sure you want to continue?
        </p>
        <ButtonGrpWrapper>
            <Button onClick={cancelModal} >
                Cancel
            </Button>
            <Button onClick={confirmDlt}  >
                Confirm
            </Button>

        </ButtonGrpWrapper>
    </ModalWrapper>

}
export default Modal;