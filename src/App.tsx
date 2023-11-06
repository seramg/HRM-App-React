import { RouterProvider } from "react-router-dom";
import router from "./pages/routes.tsx";
import Header from "./components/Header/Header.tsx";
import Footer from "./components/Footer/Footer.tsx";

function App() {
  return (
    <>
      <Header />
      <RouterProvider router={router} />
      {/* <Footer /> */}
    </>
  );
}

export default App;
