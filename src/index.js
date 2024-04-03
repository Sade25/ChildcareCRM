import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
  createRoutesFromElements,
} from "react-router-dom";
import HomePage from "./routes/HomePage";
import ChildrensPage from "./routes/ChildrensPage";
import ParentsPage from "./routes/ParentsPage";
import DaycareCenter from "./routes/DaycareCenter";
import Navbar from "./components/NavBar/Navbar";
import "./components/NavBar/Navbar.css";
import ChildEnrollmentForm from "./components/ChildEnrollmentForm/ChildEnrollmentForm";

const AppLayout = () => (
  <>
    <Navbar />
    <Outlet />
  </>
);


const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/children",
        element: <ChildrensPage />,
      },
      {
        path: "/parents",
        element: <ParentsPage />,
      },
      {
        path: "/daycarecenter",
        element: <DaycareCenter />,
      },
      {
        path: "/enroll",
        element: <ChildEnrollmentForm />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);