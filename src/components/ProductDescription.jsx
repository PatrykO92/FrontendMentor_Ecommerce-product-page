import LoadingComponent from "./LoadingComponent";
import "../css/product-description.css";
import { plusIcon, minusIcon, cartIcon } from "../icons";

import { useEffect, useState } from "react";

const ProductDescription = ({ actualProduct }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [productData, setProductData] = useState({});
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    if (actualProduct?.name) {
      setProductData(actualProduct);
      setIsLoading(false);
    }
  }, [actualProduct]);

  return (
    <div className="product-description-component">
      {isLoading ? (
        <LoadingComponent />
      ) : (
        <div className="product">
          <div className="product-company">{productData.company}</div>
          <div className="product-name">{productData.name}</div>
          <div className="product-description">{productData.description}</div>
          <div>
            <span className="actual-price">
              $
              {productData.price -
                (productData.discount * productData.price) / 100}
            </span>
            <span className="discount">{productData.discount}%</span>
            <span className="original-price">${productData.price}</span>
            <br />
          </div>
          <div className="product-basket">
            <div className="quantity-chart">
              <button>
                <img src={minusIcon} onClick={() => {}} />
              </button>
              <span className="product-counter">{counter}</span>
              <button>
                <img src={plusIcon} />
              </button>
            </div>
            <button className="add-to-cart">
              <img src={cartIcon} alt="cart" />
              Add to cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDescription;
