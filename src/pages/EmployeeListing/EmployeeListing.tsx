import EmployeeTable from "./EmployeeTable/EmployeeTable.tsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ActionsBar from "./SearchAndFilter/ActionsBar.tsx";
import MainHeading from "./MainHeading/MainHeading.tsx";

function EmployeeListing() {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        closeOnClick
        pauseOnFocusLoss={false} // avoid pausing when the window looses the focus
      />
      <MainHeading />
      {/* include searching filtering techniques */}
      <ActionsBar />
      <EmployeeTable />
    </>
  );
}
export default EmployeeListing;
