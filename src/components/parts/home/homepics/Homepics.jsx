import React from "react";
import "./Homepics.css";
import { NavLink } from "react-router-dom";

function Homepics() {
  return (
    <div className="homepics mainwrap">
      <div className="hdiv1">
        <div className="hdiv1im"></div>
        <div className="hdivtext">
          <h1>ZX9 SPEAKER</h1>
          <p>
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <button className="seep blb">
            <NavLink to="/headphones/zx9-speaker">see product</NavLink>
          </button>
        </div>
      </div>

      <div className="hdiv2">
        <div>
          <h2>ZX7 SPEAKER</h2>
          <button className="seep trb">
            <NavLink to="/headphones/zx7-speaker">see product</NavLink>
          </button>
        </div>
      </div>

      <div className="hdiv3">
        <div className="im"></div>
        <div className="hdiv3d">
          <h2>YX1 EARPHONES</h2>
          <button className="seep trb">
            <NavLink to="/headphones/yx1-earphones">see product</NavLink>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Homepics;
