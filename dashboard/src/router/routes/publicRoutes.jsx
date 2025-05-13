import { lazy, React } from "react";
// import React from "react";

const Login = lazy(() => import("../../views/auth/Login"));
const Register = lazy(() => import("../../views/auth/Register"));


const publicRoutes = [
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  }
];

export default publicRoutes;