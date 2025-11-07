import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home/Home";
import Products from "../Pages/Services/Services";
import AboutUs from "../Pages/MyProfile/MyProfile";
import ErrorPage from "../ErrorPage/ErrorPage";
import MainLayout from "../Layouts/MainLayout";
import Services from "../Pages/Services/Services";
import MyProfile from "../Pages/MyProfile/MyProfile";
import Login from "../Components/Authentication/Login";
import Register from "../Components/Authentication/Register";
import ServiceDetails from "../Components/ServiceDetails/ServiceDetails";
import PrivateRoute from "../Provider/PrivateRoute";
import ForgetPassword from "../Components/Authentication/ForgetPassword";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <ErrorPage />,

    children: [
      {
        index: true,
        loader: ()=>fetch('/services.json'),
        hydrateFallbackElement: <div className='h-screen flex items-center justify-center'><span className="loading loading-ring loading-xl"></span></div>,
        Component: Home,
      },
      {
        path: "/services",
        loader: ()=>fetch('/services.json'),
        hydrateFallbackElement: <div className='h-screen flex items-center justify-center'><span className="loading loading-ring loading-xl"></span></div>,
        Component: Services,
      },
      {
        path: "/profile",
        Component: MyProfile,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/service/:id",
        loader: ()=>fetch('/services.json'),
        element: <PrivateRoute>
          <ServiceDetails></ServiceDetails>
        </PrivateRoute>,
      },
      {
        path: "forgot-password",
        Component: ForgetPassword,
      },
    ],
  },
]);
