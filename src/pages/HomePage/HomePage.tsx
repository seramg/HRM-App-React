import Header from '../../components/Header/Header.tsx';
import MainHeading from './../../components/MainHeading/MainHeading.tsx';
import ActionsBar from './../../components/ActionsBar/ActionsBar.tsx';

function HomePage() {
  return (
    <>
      <Header></Header>
      <main className="main-section global-width">
        <MainHeading />
        <ActionsBar />
      </main>
    </>
  );
}
export default HomePage;
