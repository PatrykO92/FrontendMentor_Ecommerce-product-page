import LoadingComponent from "./LoadingComponent";
import "../css/product-description.css";
import { plusIcon, minusIcon, cartIcon } from "../icons";

import { useEffect, useState } from "react";

const ProductDescription = ({ actualProduct }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [productData, setProductData] = useState({});
  const [counter, setCounter] = useState(0);

  const changeCounter = (change) => {
    if (counter + change >= 0 && counter + change < 100)
      setCounter(counter + change);
  };

  const addToCart = () => {
    console.log("lol");
  };

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
          <div className="price">
            <p className="actual-price">
              $
              {(
                productData.price -
                (productData.discount * productData.price) / 100
              ).toFixed(2)}
            </p>
            <p className="discount">{productData.discount}%</p>
            <p className="original-price">${productData.price.toFixed(2)}</p>
          </div>
          <div className="product-basket">
            <div className="quantity-chart">
              <button
                onClick={() => {
                  changeCounter(-1);
                }}
              >
                <img src={minusIcon} alt="minus" />
              </button>
              <span className="product-counter">{counter}</span>
              <button
                onClick={() => {
                  changeCounter(1);
                }}
              >
                <img src={plusIcon} alt="plus" />
              </button>
            </div>
            <button
              className="add-to-cart"
              onClick={() => {
                addToCart();
              }}
            >
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
