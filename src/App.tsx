import { RouterProvider } from "react-router-dom";
import router from "./pages/routes.tsx";
import Header from "./components/Header/Header.tsx";
import Footer from "./components/Footer/Footer.tsx";
import DataProvider from "./core/store/DataProvider.tsx";

function App() {
  return (
    <>
      <Header />
      <DataProvider>
        <RouterProvider router={router} />
      </DataProvider>
      <Footer />
    </>
  );
}

export default App;
