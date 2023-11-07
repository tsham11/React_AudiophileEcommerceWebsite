import { useContext } from "react";
import { MyContext } from "../../layouts/RootLayout";
import { useParams, useNavigate } from "react-router-dom";
import data from "../../data.json";
import Singlep from "../../components/parts/product/singlep/Singlep";
import Features from "../../components/parts/product/features/Features";
import Gallery from "../../components/parts/product/gallery/Gallery";
import Others from "../../components/parts/product/others/Others";
import ThreeCat from "../../components/parts/home/threecat/ThreeCat";
import "./product.css";

function Product() {
  const { imageSrcKey } = useContext(MyContext);
  const { product } = useParams(); // es exeba :product-s pathsshi
  const navigate = useNavigate();

  const p = data.find((el) => el.slug === product);

  return (
    <div className="product cat-content">
      <p onClick={() => navigate(-1)} className="goback preview mainwrap">
        Go Back
      </p>
      <Singlep p={p} />
      <Features p={p} />
      <Gallery p={p} imageSrcKey={imageSrcKey} />
      <Others items={p.others} />
      <ThreeCat />
    </div>
  );
}

export default Product;
