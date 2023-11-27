import { createBrowserRouter } from "react-router-dom";
import EmployeeListing from "./EmployeeListing/EmployeeListing.tsx";
import Form from "./EmployeeUpdate/Form.tsx";
import EmployeeView from "./EmployeeView/EmployeeView.tsx";
import Layout from "./Layout.tsx";
import Error404 from './../components/Error404/Error404.tsx';

const router = createBrowserRouter(
  [
    {
      element: <Layout></Layout>,
      children: [
        {
          path: "/",
          element: <EmployeeListing />,
        },
        {
          path: "edit-employee",
          element: <Form />,
        },
        {
          path: "add-employee",
          element: <Form />,
        },
        {
          path: "view-employee",
          element: <EmployeeView />,
        },
      ],
      errorElement: <Error404 />,
    },
  ],
  { basename: import.meta.env.DEV ? "/" : "/HRM-App-React/" }
);


export default router;
