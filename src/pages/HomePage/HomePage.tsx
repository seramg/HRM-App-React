import MainHeading from "./../../components/MainHeading/MainHeading.tsx";
import ActionsBar from "../../components/SearchAndFilter/SearchAndFilter.tsx";
import EmployeeTable from "../../components/EmployeeTable/EmployeeTable.tsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function HomePage() {
  return (
    <main className="main-section global-width">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        closeOnClick
        pauseOnFocusLoss={false}
      />
      <MainHeading />
      <ActionsBar />
      <EmployeeTable />
    </main>
  );
}
export default HomePage;
