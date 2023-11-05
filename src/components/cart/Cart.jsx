import { useContext, useState, useEffect } from "react";
import { MyContext } from "../../layouts/RootLayout";
import "./cart.css";

import { NavLink } from "react-router-dom";
import cartIt from "../../assets/cart/image-zx7-speaker.jpg";

function Cart({ showcart, setshowcart }) {
  const { cartList, setcartList } = useContext(MyContext);
  const [total, settotal] = useState(0);
  useEffect(() => {
    const t = cartList.reduce((tot, c) => tot + c.price * c.count, 0);
    settotal(t);
  }, [cartList]);

  const handleDecrement = (index) => {
    if (cartList[index].count > 0) {
      const updCart = [...cartList]; // Create a copy of the cartList
      updCart[index].count -= 1; // Update the count of the specific item
      if (updCart[index].count === 0) {
        updCart.splice(index, 1);
        console.log(updCart);
      }
      setcartList(updCart); // Update the state with the new array
    }
  };

  const handleIncrement = (index) => {
    const updCart = [...cartList]; // Create a copy of the cartList
    updCart[index].count += 1; // Update the count of the specific item
    setcartList(updCart); // Update the state with the new array
  };

  return (
    <div className="bg">
      <div className="cart-comp">
        <div className="cart-header">
          <h3>Cart ({cartList.length})</h3>
          <h4 onClick={() => setcartList([])}>Remove All</h4>
        </div>

        <div className="cart-list">
          {cartList.map((el, indx) => (
            <div className="cart-item" key={`${el.name}`}>
              {/* {settotal(total + el.price)} */}
              <img src={cartIt} alt="cref" />
              <div className="dp">
                <span className="dp-t">{el.shortName}</span>
                <span className="dp-p">${el.price}</span>
              </div>
              <button className="quant cart-quant">
                <span className="sign" onClick={() => handleDecrement(indx)}>
                  -
                </span>
                <span className="qcount">{el.count}</span>
                <span className="sign" onClick={() => handleIncrement(indx)}>
                  +
                </span>
              </button>
            </div>
          ))}
        </div>

        <div className="total">
          <span className="ttl-text">total</span>
          <span className="total-price">${total}</span>
        </div>

        <button className="check-button" onClick={() => setshowcart(!showcart)}>
          <NavLink to="/checkout">checkout</NavLink>
        </button>
      </div>
    </div>
  );
}

export default Cart;
