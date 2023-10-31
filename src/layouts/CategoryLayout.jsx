import React, { useEffect } from "react";
import { Outlet, NavLink, useParams, useNavigate } from "react-router-dom";

function CategoryLayout() {
  const { category } = useParams(); // es exeba :category-s pathsshi
  const navigate = useNavigate();

  // useEffect(() => {
  //   navigate(`/list`);
  // }, []);

  return (
    <div>
      CategoryLayout
      <Outlet context={[category]} />
    </div>
  );
}

export default CategoryLayout;
