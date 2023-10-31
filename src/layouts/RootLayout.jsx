import React, { useEffect } from "react";
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import Nav from "../components/nav/Nav";
import Footer from "../components/footer/Footer";

function RootLayout() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate(`/home`);
  }, []);

  return (
    <div>
      <Nav />

      <Outlet />
      <Footer />
    </div>
  );
}

export default RootLayout;
