import React from "react";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
import { Outlet } from "react-router";
import MainContainer from "../Container/MainContainer";

const MainLayout = () => {
  return (
    <MainContainer>
      <Navbar />
      <Outlet></Outlet>
      <Footer></Footer>
    </MainContainer>
  );
};

export default MainLayout;
