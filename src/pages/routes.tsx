import {
  createBrowserRouter,
} from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import Form from "./EmployeeUpdate/Form.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "employeeDetails",
    element: <Form />,
  },
],{ basename: import.meta.env.DEV ? '/' : '/HRM-App-React/' });

export default router;
