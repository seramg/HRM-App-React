import { RouterProvider } from "react-router-dom";
import router from "./pages/routes.tsx";
import DataProvider from "./core/store/DataProvider.tsx";
import GlobalStyle from "./core/styles/global.styled.ts";

function App() {
  return (
    <>
      <GlobalStyle />
      <DataProvider>
        <RouterProvider router={router} />
      </DataProvider>
    </>
  );
}

export default App;
