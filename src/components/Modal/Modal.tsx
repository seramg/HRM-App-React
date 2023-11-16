import { useContext } from "react";
import { deleteData } from "../../core/api/functions.ts";
import Button from "../Button/Button.tsx";
import ButtonGrpWrapper from "../Button/buttonGrpWrapper.ts";
import ModalWrapper from "./modal";
import DataContext from "../../core/store/DataContext.tsx";

function Modal({
  cancelModal,
  employeeId,
}: {
  cancelModal: () => void;
  employeeId: string;
}) {
  const { employees, fetchDataAndSetContext } = useContext(DataContext);

  const confirmDlt = async () => {
    const indexToDlt = employees.findIndex(
      (employee) => employee.id === employeeId
    );

    if (indexToDlt === -1) {
      console.error("Employee not found.");
      return;
    }

    const url = `/employees/${indexToDlt}.json`;

    try {
      const response = await deleteData(url);
      console.log("Item deleted successfully:", response);
    } catch (error) {
      console.error("Error deleting item:", error);
    } finally {
      fetchDataAndSetContext()
    }

    cancelModal();
  };
  return (
    <ModalWrapper>
      <Button icon="close" className="close-btn" onClick={cancelModal}></Button>
      <h2 className="subheading">
        Are you sure you want to delete the employee {employeeId}?
      </h2>
      <p className="text">
        The data selected will be permanently removed. It would remove all the
        details related to the employee. Are you sure you want to continue?
      </p>
      <ButtonGrpWrapper>
        <Button onClick={cancelModal}>Cancel</Button>
        <Button onClick={confirmDlt}>Confirm</Button>
      </ButtonGrpWrapper>
    </ModalWrapper>
  );
}
export default Modal;
