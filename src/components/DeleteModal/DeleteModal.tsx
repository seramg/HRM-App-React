import { useContext } from "react";
import { deleteData } from "../../core/api/functions.ts";
import Button from "../Button/Button.tsx";
import ButtonGrpWrapper from "../Button/buttonGrpWrapper.ts";
import DataContext from "../../core/store/DataContext.tsx";
import { toast } from "react-toastify";
import DeleteModalWrapper from "./../DeleteModal/deleteModal.ts";

function DeleteModal({
  changeDltModalOpenStatus,
  employeeId,
}: {
  changeDltModalOpenStatus: () => void;
  employeeId: string;
}) {
  const { dataEmployees, fetchEmployeeData } = useContext(DataContext);

  const confirmDlt = async () => {
    const indexToDlt = dataEmployees.findIndex(
      (dataEmployee) => dataEmployee && dataEmployee.id === employeeId
    );

    if (indexToDlt === -1) {
      console.error("Employee not found.");
      return;
    }

    const url = `/employees/${indexToDlt}.json`;

    try {
      await deleteData(url); // deleting employee in firebase
      console.log("Employee deleted successfully");
      // Display toast for success state
      toast.success(`Deleted user ${dataEmployees[indexToDlt].emp_name}`, {
        toastId: "delete-toast-id",
      });
    } catch (error) {
      toast.error("Error deleting user");
      console.error("Error deleting item:", error);
    } finally {
      fetchEmployeeData(); // data fetched after employee deletion
    }

    changeDltModalOpenStatus();
  };

  return (
    <DeleteModalWrapper>
      <Button
        icon="close"
        className="close-btn"
        onClick={changeDltModalOpenStatus}
      ></Button>
      <h2 className="delete-modal-heading">Confirm user removal</h2>
      <p className="confirm-delete">
        Are you sure you want to delete the employee {employeeId}?
      </p>
      <div className="warning-container">
        <div className="warning-heading common-flex">
          <span className="material-icons-round">warning</span>
          <p className="title">Warning</p>
        </div>
        <p className="warning-text">
          The data selected will be permanently removed. It would remove all the
          details related to the employee. Are you sure you want to continue?
        </p>
      </div>
      <ButtonGrpWrapper className="button-gap">
        <Button className="cancel-btn" onClick={changeDltModalOpenStatus}>No, Cancel</Button>
        <Button className="delete-btn" icon="delete" onClick={confirmDlt}>Yes, confirm delete</Button>
      </ButtonGrpWrapper>
    </DeleteModalWrapper>
  );
}
export default DeleteModal;
