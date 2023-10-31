import React from "react";
import ThreeCat from "../../components/parts/home/threecat/ThreeCat";
import Audioman from "../../components/parts/home/audioman/Audioman";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="homehead">
        <div className="headdiv">
          <p>shkhskjd</p>
          <p className="homenewp">NEW PRODUCT</p>
          <h1>XX99 Mark II Headphones</h1>
          <p className="homedesc">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <button>See Product</button>
        </div>
      </div>
      <ThreeCat />
      <div className="homepics"></div>
      <Audioman />
    </div>
  );
}

export default Home;
