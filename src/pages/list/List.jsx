// import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import "./list.css";
//import ProductList from "../components/parts/category/headphones/ProductList/ProductList";

function List() {
  const pathname = window.location.pathname;
  const cat = useOutletContext();
  console.log(pathname);
  if (pathname === "/" + cat) console.log("yey");

  return (
    <>
      {pathname === "/" + cat ? (
        <div>
          <div className="cat-header">
            <h1>{cat}</h1>
          </div>

          <NavLink to="p1">p1</NavLink>
          <NavLink to="p2">p2</NavLink>
        </div>
      ) : (
        <Outlet />
      )}
    </>
  );
}

export default List;
