import { useState, useContext, useEffect } from "react";
import { MyContext } from "../../../../layouts/RootLayout";
import "./Singlep.css";

function Singlep({ p }) {
  const { cartList, setcartList, imageSrcKey, count, setcount } =
    useContext(MyContext);

  //const [count, setcount] = useState(0);

  useEffect(() => {
    setcount(0);
  }, []);

  function addToCart() {
    let temp = p;
    temp.count = count;
    setcartList([...cartList, temp]);
    setcount(0);
  }
  return (
    <div className="preview mainwrap">
      <img src={p.image[imageSrcKey]} alt="product" className="productim" />
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
          <button className="addcart" onClick={() => addToCart()}>
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
}

export default Singlep;
