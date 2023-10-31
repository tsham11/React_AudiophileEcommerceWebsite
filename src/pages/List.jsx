import React from "react";
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import { useOutletContext } from "react-router-dom";

function List() {
  const pathname = window.location.pathname;
  const cat = useOutletContext();
  console.log(pathname);
  if (pathname === "/" + cat) console.log("yey");
  return (
    <div>
      {pathname === "/" + cat ? (
        <div>
          List
          <NavLink to="p1">p1</NavLink>
          <NavLink to="p2">p2</NavLink>
        </div>
      ) : (
        <Outlet />
      )}
    </div>
  );
}

export default List;
