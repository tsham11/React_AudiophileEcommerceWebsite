import { useRef, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/shared/desktop/logo.svg";
import cart from "../../assets/shared/desktop/icon-cart.svg";
import menu from "../../assets/shared/tablet/icon-hamburger.svg";
import close from "../../assets/shared/tablet/icon-close.svg";
import Cart from "../cart/Cart";
import "./Nav.css";

function Nav() {
  const menuref = useRef(null);
  const [showcart, setshowcart] = useState(false);

  function showmenu() {
    menuref.current.classList.remove("hide");
  }

  function hidemenu() {
    menuref.current.classList.add("hide");
  }

  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef();
  // function useOnClickOutside(ref, handler) {
  //   useEffect(
  //     () => {
  //       const listener = (event) => {
  //         // Do nothing if clicking ref's element or descendent elements
  //         if (!ref.current || ref.current.contains(event.target)) {
  //           return;
  //         }
  //         handler(event);
  //       };
  //       document.addEventListener("mousedown", listener);
  //       document.addEventListener("touchstart", listener);
  //       return () => {
  //         document.removeEventListener("mousedown", listener);
  //         document.removeEventListener("touchstart", listener);
  //       };
  //     },

  //     [ref, handler]
  //   );
  // }
  // useOnClickOutside(modalRef, () => setIsModalOpen(false));
  useEffect(() => {
    // Define a function to close the modal
    console.log("not ours" + modalRef.current);

    const listener = (e) => {
      if (!modalRef.current || modalRef.current.contains(e.target)) {
        return;
      }
      setIsModalOpen(false);
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, []);

  return (
    <div className="nav">
      <div className="inner">
        <div className="menulogo">
          <span className="menu">
            <img src={menu} onClick={() => showmenu()} />
          </span>
          <span>
            <img src={logo} />
          </span>
        </div>
        <span className="linkwrap hide" ref={menuref}>
          <img src={close} className="close" onClick={() => hidemenu()} />
          <div className="links">
            <NavLink className="link" to="home" onClick={() => hidemenu()}>
              Home
            </NavLink>
            <NavLink
              className="link"
              to="headphones"
              onClick={() => hidemenu()}
            >
              headphones
            </NavLink>
            <NavLink className="link" to="speakers" onClick={() => hidemenu()}>
              speakers
            </NavLink>
            <NavLink className="link" to="earphones" onClick={() => hidemenu()}>
              earphones
            </NavLink>
          </div>
        </span>
        <span>
          <img
            src={cart}
            className="cart"
            onClick={() => setIsModalOpen(!isModalOpen)}
          />
          {isModalOpen && (
            <Cart
              isModalOpen={isModalOpen}
              setIsModalOpen={setIsModalOpen}
              modalRef={modalRef}
            />
          )}
        </span>
      </div>
    </div>
  );
}

export default Nav;
