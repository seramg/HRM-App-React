import { createBrowserRouter } from "react-router-dom";
import EmployeeListing from "./EmployeeListing/EmployeeListing.tsx";
import Form from "./EmployeeUpdate/Form.tsx";
import EmployeeView from "./EmployeeView/EmployeeView.tsx";
import Layout from "./Layout.tsx";

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
    },
  ],
  { basename: import.meta.env.DEV ? "/" : "/HRM-App-React/" }
);

export default router;
