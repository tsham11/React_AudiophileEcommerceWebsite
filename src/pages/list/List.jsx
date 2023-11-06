import { useContext } from "react";
import { MyContext } from "../../layouts/RootLayout";
import { Outlet, useOutletContext, NavLink } from "react-router-dom";
import "./list.css";
import ThreeCat from "../../components/parts/home/threecat/ThreeCat";
import Audioman from "../../components/parts/home/audioman/Audioman";
import productData from "../../../src/data.json";

function List() {
  const pathname = window.location.pathname;
  const cat = useOutletContext();
  const { imageSrcKey } = useContext(MyContext);

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
              {products.map((product) => (
                <div
                  className={`preview id${Number(product.id) % 2} mainwrap`}
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
                    <NavLink to={product.slug}>
                      <button>See Product</button>
                    </NavLink>
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
