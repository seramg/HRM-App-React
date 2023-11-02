import Header from '../../components/Header/Header.tsx';
import MainHeading from './../../components/MainHeading/MainHeading.tsx';

function HomePage() {
  return (
    <>
      <Header></Header>
      <main className="main-section global-width">
        <MainHeading />
      </main>
    </>
  );
}
export default HomePage;
