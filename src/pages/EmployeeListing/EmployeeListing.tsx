import MainHeading from "../../components/MainHeading/MainHeading.tsx";
import ActionsBar from "../../components/SearchAndFilter/SearchAndFilter.tsx";
import EmployeeTable from "../../components/EmployeeTable/EmployeeTable.tsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
