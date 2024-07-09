import React from "react";
import { createBrowserRouter } from "react-router-dom";
import PrivateRoute from "./PrivateRoutes/PrivateRoute";

// import ServiceDetailsPage from "../components/layout/Pages/ServiceDetails/ServiceDetailsPage";
// import HomePage from "../components/layout/Pages/Home/HomePage";
// import PortfolioDetails from "../components/layout/Pages/PortfolioDetails/PortfolioDetails";
const Error404 = React.lazy(() => import("../components/common/Error404"));
const Layout = React.lazy(() => import("../components/layout/Layout"));
const HomePage = React.lazy(() =>
 import("../components/layout/Pages/Home/HomePage")
);
const ServiceDetailsPage = React.lazy(() =>
 import("../components/layout/Pages/ServiceDetails/ServiceDetailsPage")
);
const PortfolioDetails = React.lazy(() =>
 import("../components/layout/Pages/PortfolioDetails/PortfolioDetails")
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
     element: <HomePage />,
    },
    {
     path: "/service-details",
     element: <ServiceDetailsPage />,
    },
    {
     path: "/portfolio-details",
     element: <PortfolioDetails />,
    },
    {
     element: <PrivateRoute isAuth={condition ? true : false} />,
     children: [],
    },
   ],
  },
 ]);
}
// https://bootstrapmade.com/demo/templates/Gp/service-details.html
// https://bootstrapmade.com/demo/templates/Gp/portfolio-details.html
export default Router;
