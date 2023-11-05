import MainHeading from "./../../components/MainHeading/MainHeading.tsx";
import ActionsBar from "./../../components/ActionsBar/ActionsBar.tsx";
import EmployeeTable from "../../components/EmployeeTable/EmployeeTable.tsx";

function HomePage() {
  return (
      <main className="main-section global-width">
        <MainHeading />
        <ActionsBar />
        <EmployeeTable />
      </main>
  );
}
export default HomePage;
