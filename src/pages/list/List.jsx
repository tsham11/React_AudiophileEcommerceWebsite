// import React from "react";
import { Outlet, useOutletContext, NavLink } from "react-router-dom";
import "./list.css";
import ThreeCat from "../../components/parts/home/threecat/ThreeCat";
import Audioman from "../../components/parts/home/audioman/Audioman";
import productData from "../../../src/data.json";
import { useEffect, useState } from "react";

function List() {
  const pathname = window.location.pathname;
  const cat = useOutletContext();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const products = productData
    .filter((product) => product.category === `${cat}`)
    .reverse();

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  let imageSrcKey = "desktop";

  if (windowWidth <= 768) {
    imageSrcKey = "tablet";
  }
  if (windowWidth <= 476) {
    imageSrcKey = "mobile";
  }

  return (
    <>
      {pathname === "/" + cat ? (
        <div>
          <div className="cat-header">
            <h1>{cat}</h1>
          </div>

          <div className="cat-content">
            <div className="product-list">
              {products.map((product) => (
                <div
                  className={`preview id${Number(product.id) % 2}`}
                  key={product.id}
                >
                  <img
                    src={product.categoryImage[imageSrcKey]}
                    alt=""
                    className="listcatim"
                  />
                  <div className="info">
                    {product.new ? <p className="np">NEW PRODUCT</p> : <></>}
                    <h1 className="title">{product.name}</h1>
                    <p className="pr-desc">{product.description}</p>
                    <button>
                      <NavLink to={product.slug}>See Product</NavLink>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <ThreeCat />
          <Audioman />
        </div>
      ) : (
        <Outlet />
      )}
    </>
  );
}

export default List;
