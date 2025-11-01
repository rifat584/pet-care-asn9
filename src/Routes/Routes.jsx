import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home/Home";
import Products from "../Pages/Services/Services";
import AboutUs from "../Pages/MyProfile/MyProfile";
import ErrorPage from "../ErrorPage/ErrorPage";
import MainLayout from "../Layouts/MainLayout";
import Services from "../Pages/Services/Services";
import MyProfile from "../Pages/MyProfile/MyProfile";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <ErrorPage />,

    children: [
      {
        path: "/",
        index: true,
        Component: Home,
      },
      {
        path: "/services",
        Component: Services,
      },
      {
        path: "/profile",
        Component: MyProfile,
      },
    ],
  },
]);
