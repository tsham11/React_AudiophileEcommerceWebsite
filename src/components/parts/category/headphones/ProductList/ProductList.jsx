import "./ProductList.css";
import img from "../../../../../assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg";

function ProductList() {
  return (
    <div className="products-list">
      <div className="preview">
        <img src={img} alt="headphone" />
        <div className="info">
          <p className="np">NEW PRODUCT</p>
          <h1 className="title">XX99 Mark II Headphones</h1>
          <p className="pr-desc">
            The new XX99 Mark II headphones is the pinnacle of pristine audio.
            It redefines your premium headphone experience by reproducing the
            balanced depth and precision of studio-quality sound.
          </p>
          <button>See Product</button>
        </div>
      </div>
    </div>
  );
}

export default ProductList;
