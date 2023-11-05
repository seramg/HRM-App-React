import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
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
]);

export default router;
