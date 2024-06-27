import React from "react";
import { createBrowserRouter } from "react-router-dom";
import PrivateRoute from "./PrivateRoutes/PrivateRoute";
// import Error404 from "../components/Error404";
// import Home from "../components/Home";
// import Layout from "../components/layout/Layout";

const Error404 = React.lazy(() => import("../components/Error404"));
const Layout = React.lazy(() => import("../components/layout/Layout"));
const Login = React.lazy(() => import("../components/Login-Register/Login"));
const Home = React.lazy(() => import("../components/Home"));
const Register = React.lazy(() =>
  import("../components/Login-Register/Register")
);

function Router() {
  const condition = false;
  return createBrowserRouter([
    {
      path: "*",
      element: <Error404 />,
    },
    {
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          element: <PrivateRoute isAuth={condition ? true : false} />,
          children: [],
        },
      ],
    },
  ]);
}

export default Router;
