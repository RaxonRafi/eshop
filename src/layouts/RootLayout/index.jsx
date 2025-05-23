import React from "react";
import Header from "../../globalComponents/commonLayout/Header";
import Footer from "../../globalComponents/commonLayout/Footer";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default RootLayout;
