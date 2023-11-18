import { RouterProvider } from "react-router-dom";
import router from "./pages/routes.tsx";
import DataProvider from "./core/store/DataProvider.tsx";
import GlobalStyle from "./core/styles/global.styled.ts";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <GlobalStyle />
      <DataProvider>
        <RouterProvider router={router} />
      </DataProvider>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        closeOnClick
      />
    </>
  );
}

export default App;
