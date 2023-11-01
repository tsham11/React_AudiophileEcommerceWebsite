//import React, { useEffect } from "react";
import { Outlet, useParams } from "react-router-dom";

function CategoryLayout() {
  const { category } = useParams(); // es exeba :category-s pathsshi
  // const navigate = useNavigate();

  // useEffect(() => {
  //   navigate(`/list`);
  // }, []);

  return (
    <div>
      <Outlet context={[category]} />
    </div>
  );
}

export default CategoryLayout;
