import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import data from "../../data.json";
import "./product.css";
// import "../list/list.css";
import im from "/product-zx9-speaker/desktop/image-product.jpg";

function Product() {
  const [count, setcount] = useState(0);
  const { product } = useParams(); // es exeba :product-s pathsshi
  console.log(product);
  const navigate = useNavigate();

  const p = data.find((el) => el.slug === product);
  console.log(p);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

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
    <div className="product cat-content">
      <p onClick={() => navigate(-1)} className="goback preview">
        go back
      </p>
      <div className="preview">
        <img src={p.image[imageSrcKey]} alt="" className="productim" />
        <div className="info calkep">
          {p.new ? <p className="np">NEW PRODUCT</p> : <></>}
          <h1 className="title">{p.name}</h1>
          <p className="pr-desc">{p.description}</p>
          <p className="price">$ {p.price}</p>
          <div>
            <button className="quant">
              <span
                className="sign"
                onClick={() => {
                  if (count > 0) setcount(count - 1);
                }}
              >
                -
              </span>
              <span className="qcount">{count}</span>
              <span
                className="sign"
                onClick={() => {
                  setcount(count + 1);
                }}
              >
                +
              </span>
            </button>
            <button className="addcart">See Product</button>
          </div>
        </div>
      </div>

      <div className="features-box">
        <div className="features">
          <h2>features</h2>
          <p>{p.features}</p>
        </div>
        <div className="inbox">
          <h2>in the box</h2>
          <ul>
            {p.includes.map((item) => (
              <li key={item.item}>
                <span className="quantity">{item.quantity}x</span>
                <span className="item">{item.item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="gallery">
        <div id="inner">
          <img
            src={p.gallery.first[imageSrcKey]}
            alt=""
            srcset=""
            className="pg1"
          />
          <img
            src={p.gallery.second[imageSrcKey]}
            alt=""
            srcset=""
            className="pg1"
          />
        </div>
        <div id="forim">
          <img
            src={p.gallery.third[imageSrcKey]}
            alt=""
            srcset=""
            className="pg1"
          />
        </div>
        {/* <div className="pg1">pg1</div>
        <div className="pg2">pg1</div>
        <div className="pg3">pg1</div> */}
      </div>
    </div>
  );
}

export default Product;
