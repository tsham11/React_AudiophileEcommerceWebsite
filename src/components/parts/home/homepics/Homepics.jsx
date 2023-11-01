import React from "react";
import p1 from "../../../../assets/home/desktop/image-speaker-zx9.png";
import p2 from "../../../../assets/home/desktop/image-speaker-zx7.jpg";
import p3 from "../../../../assets/home/desktop/image-earphones-yx1.jpg";
import "./Homepics.css";

function Homepics() {
  return (
    <div className="homepics">
      <div className="hdiv1">
        <div className="hdiv1im"></div>
        <div className="hdivtext">
          <h1>ZX9 SPEAKER</h1>
          <p>
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <button className="seep blb">see product</button>
        </div>
      </div>

      <div className="hdiv2">
        <div>
          <h2>ZX7 SPEAKER</h2>
          <button className="seep trb">see product</button>
        </div>
      </div>

      <div className="hdiv3">
        <div className="im"></div>
        <div className="hdiv3d">
          <h2>ZX7 SPEAKER</h2>
          <button className="seep trb">see product</button>
        </div>
      </div>
    </div>
  );
}

export default Homepics;
