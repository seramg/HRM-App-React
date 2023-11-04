import Header from '../../components/Header/Header.tsx';
import MainHeading from './../../components/MainHeading/MainHeading.tsx';
import ActionsBar from './../../components/ActionsBar/ActionsBar.tsx';
import EmployeeTable from './../../components/EmployeeTable';

function HomePage() {
  return (
    <>
      <Header></Header>
      <main className="main-section global-width">
        <MainHeading />
        <ActionsBar />
        <EmployeeTable />
      </main>
    </>
  );
}
export default HomePage;
