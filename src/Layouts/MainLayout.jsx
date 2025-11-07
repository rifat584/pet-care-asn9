import React from "react";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
import { Outlet } from "react-router";
import MainContainer from "../Container/MainContainer";

const MainLayout = () => {
  return (
    <MainContainer>
      <nav>
        <Navbar />
      </nav>
      <Outlet></Outlet>
      <footer>
        <Footer></Footer>
      </footer>
    </MainContainer>
  );
};

export default MainLayout;
