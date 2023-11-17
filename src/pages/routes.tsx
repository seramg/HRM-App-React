import {
  createBrowserRouter,
} from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import Form from "./EmployeeUpdate/Form.tsx";
import EmployeeView from './EmployeeView/EmployeeView.tsx';
import Layout from "./Layout.tsx";

const router = createBrowserRouter([{
  element: <Layout></Layout>,
  children: [
    {
      path: "/",
      element: <HomePage />,
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
      path: "employeeView",
      element: <EmployeeView />,
    },
  ]
}
], { basename: import.meta.env.DEV ? '/' : '/HRM-App-React/' });

export default router;
