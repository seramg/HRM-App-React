import { useContext } from "react";
import { deleteData, updateData } from "../../core/api/functions.ts";
import Button from "../Button/Button.tsx";
import ButtonGrpWrapper from "../Button/buttonGrpWrapper.ts";
import DataContext from "../../core/store/DataContext.tsx";
import { toast } from "react-toastify";
import DeleteModalWrapper from "./../DeleteModal/deleteModal.ts";

function DeleteModal({
  cancelDltModal,
  employeeId,
}: {
  cancelDltModal: () => void;
  employeeId: string;
}) {
  const { employees,employeesCount, fetchEmployeeData } = useContext(DataContext);

  const confirmDlt = async () => {
    const indexToDlt = employees.findIndex(
      (employee) => employee && employee.id === employeeId
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
      toast.success(`Deleted user ${employees[indexToDlt].emp_name}`, {
        toastId: "delete-toast-id",
      });
    } catch (error) {
      toast.error("Error deleting user");
      console.error("Error deleting item:", error);
    } finally {
      fetchEmployeeData(); // data fetched after employee deletion
    }

    cancelDltModal();
  };

  return (
    <DeleteModalWrapper>
      <Button
        icon="close"
        className="close-btn"
        onClick={cancelDltModal}
      ></Button>
      <h2 className="subheading">
        Are you sure you want to delete the employee {employeeId}?
      </h2>
      <p className="text">
        The data selected will be permanently removed. It would remove all the
        details related to the employee. Are you sure you want to continue?
      </p>
      <ButtonGrpWrapper>
        <Button onClick={cancelDltModal}>Cancel</Button>
        <Button onClick={confirmDlt}>Confirm</Button>
      </ButtonGrpWrapper>
    </DeleteModalWrapper>
  );
}
export default DeleteModal;
