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
        {/* <div className="cat1im pimg"></div> */}
        <img src={p1} className="pimg" />
        <span className="alink">
          <h3>headphones</h3>
          <NavLink to="headphones">
            shop
            <span>
              <img src={arr} />
            </span>
          </NavLink>
        </span>
      </div>

      <div className="p p2">
        {/* <div className="cat2im pimg"></div> */}
        <img src={p2} className="pimg" />

        <span className="alink">
          <h3>speakers</h3>
          <NavLink to="speakers">
            shop <img src={arr} />
          </NavLink>
        </span>
      </div>

      <div className="p p3">
        {/* <div className="cat3im pimg"></div> */}
        <img src={p3} className="pimg" />
        <span className="alink">
          <h3>earphones</h3>
          <NavLink to="earphones">
            shop <img src={arr} />
          </NavLink>
        </span>
      </div>
    </div>
  );
}

export default ThreeCat;
