// import React from "react";
import { Outlet } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import "./list.css";
import ThreeCat from "../../components/parts/home/threecat/ThreeCat";
import Audioman from "../../components/parts/home/audioman/Audioman";
import productData from "../../../src/data.json";

function List() {
  const pathname = window.location.pathname;
  const cat = useOutletContext();
  console.log(pathname);
  if (pathname === "/" + cat) console.log("yey");

  const products = productData
    .filter((product) => product.category === `${cat}`)
    .reverse();

  return (
    <>
      {pathname === "/" + cat ? (
        <div>
          <div className="cat-header">
            <h1>{cat}</h1>
          </div>
          <div className="cat-content">
            <div className="product-list">
              {products.map((product, index) => (
                <div className="preview" key={product.id}>
                  {index % 2 === 0 ? (
                    <>
                      <img src={product.categoryImage.desktop} alt="" />
                      <div className="info">
                        {product.new ? (
                          <p className="np">NEW PRODUCT</p>
                        ) : (
                          <></>
                        )}
                        <h1 className="title">{product.name}</h1>
                        <p className="pr-desc">{product.description}</p>
                        <button>See Product</button>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="info">
                        {product.new ? (
                          <p className="np">NEW PRODUCT</p>
                        ) : (
                          <></>
                        )}
                        <h1 className="title">{product.name}</h1>
                        <p className="pr-desc">{product.description}</p>
                        <button>See Product</button>
                      </div>
                      <img src={product.categoryImage.desktop} alt="" />
                    </>
                  )}
                </div>
              ))}
            </div>
            <ThreeCat />
            <Audioman />
          </div>
          {/* <NavLink to="p1">p1</NavLink>
          <NavLink to="p2">p2</NavLink> */}
        </div>
      ) : (
        <Outlet />
      )}
    </>
  );
}

export default List;
