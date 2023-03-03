import { useEffect, useState } from "react";

import "./css/app.css";

import { Header, ProductGallery, ProductDescription, Cart } from "./components";
import { apiResponse } from "./utils";

function App() {
  const [actualProduct, setActualProduct] = useState({});
  const [cartStatus, setCartStatus] = useState([]);
  const [cartCounter, setCartCounter] = useState(0);
  const [cartVisibility, setCartVisibility] = useState(false);

  const handleCartChange = (newObject) => {
    setCartStatus(newObject);
  };

  const addToCart = (quantity) => {
    if (quantity <= 0) return;

    setCartStatus((prevState) => [
      ...prevState,
      { quantity: quantity, product: actualProduct },
    ]);
  };

  const changeCartVisibility = () => {
    setCartVisibility(!cartVisibility);
  };

  useEffect(() => {
    setTimeout(() => {
      setActualProduct(apiResponse);
    }, 2500);
  }, []);

  useEffect(() => {
    const counter = cartStatus.reduce((acc, item) => acc + item.quantity, 0);
    setCartCounter(counter);
  }, [cartStatus]);

  return (
    <div className="container">
      <Header cartCounter={cartCounter} changeCartView={changeCartVisibility} />
      {cartVisibility && (
        <Cart cartStatus={cartStatus} onCartChange={handleCartChange} />
      )}
      <ProductGallery actualProduct={actualProduct} />
      <ProductDescription
        actualProduct={actualProduct}
        onPressButton={addToCart}
      />
    </div>
  );
}

export default App;
