import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header.tsx";
import Footer from "../components/Footer/Footer.tsx";
import React from "react";

function Layout() {
  return (
    <React.Fragment>
      <Header />
      <main className="main-section global-width">

        {/* This element will render either 
        <EmployeeListing /> when URL is '/'
        <Form /> when URL is 'edit-employee' or 'add-employee'
        <EmployeeView /> when URL is 'view-employee' */}

        <Outlet />
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default Layout;
