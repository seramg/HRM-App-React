import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import EmployeeUpdate from "./EmployeeUpdate/FormPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "employeeDetails",
    element: <EmployeeUpdate />,
  },
]);

export default router;
