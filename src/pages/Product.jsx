import React from "react";
import { useParams, useNavigate } from "react-router-dom";

function Product() {
  const { product } = useParams(); // es exeba :product-s pathsshi
  const navigate = useNavigate();
  return (
    <div>
      {product}
      <button onClick={() => navigate(-1)}>go back</button>
    </div>
  );
}

export default Product;
