// import React, { createContext } from "react";

import ThreeCat from "../../components/parts/home/threecat/ThreeCat";
import Audioman from "../../components/parts/home/audioman/Audioman";
import Homepics from "../../components/parts/home/homepics/Homepics.jsx";
import { NavLink } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="homehead">
        <div className="headdiv">
          <p className="homenewp">NEW PRODUCT</p>
          <h1>XX99 Mark II Headphones</h1>
          <p className="homedesc">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <button>
            <NavLink to="/headphones/xx99-mark-two-headphones">
              See Product
            </NavLink>
          </button>
        </div>
      </div>
      <ThreeCat />
      <Homepics />
      <Audioman />
    </div>
  );
}

export default Home;
