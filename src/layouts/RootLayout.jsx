import React, { useEffect } from "react";
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import Nav from "../components/nav/Nav";
import Footer from "../components/footer/Footer";
import ScrollToTop from "../components/ScrollToTop";

function RootLayout() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate(`/home`);
  }, []);

  return (
    <div>
      <ScrollToTop />
      <Nav />

      <Outlet />
      <Footer />
    </div>
  );
}

export default RootLayout;
