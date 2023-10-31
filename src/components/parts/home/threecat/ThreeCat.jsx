import React from "react";
import p1 from "../../../../assets/shared/desktop/image-category-thumbnail-headphones.png";
import p3 from "../../../../assets/shared/desktop/image-category-thumbnail-earphones.png";
import p2 from "../../../../assets/shared/desktop/image-category-thumbnail-speakers.png";
import arr from "../../../../assets/shared/desktop/icon-arrow-right.svg";
import { NavLink } from "react-router-dom";
import "./ThreeCat.css";

function ThreeCat() {
  return (
    <div className="threecat">
      <div className="p p1">
        <img src={p1} className="pimg" />
        <h3>headphones</h3>
        <span className="alink">
          <NavLink to="headphones">
            shop
            <span>
              <img src={arr} />
            </span>
          </NavLink>
        </span>
      </div>

      <div className="p p2">
        <img src={p2} className="pimg" />
        <h3>speakers</h3>
        <NavLink to="speakers">
          shop <img src={arr} />
        </NavLink>
      </div>
      <div className="p p3">
        <img src={p3} className="pimg" />
        <h3>earphones</h3>
        <NavLink to="earphones">
          shop <img src={arr} />
        </NavLink>
      </div>
    </div>
  );
}

export default ThreeCat;
