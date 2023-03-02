import { useEffect, useState } from "react";

import "./css/app.css";

import { Header, ProductGallery, ProductDescription, Cart } from "./components";
import { apiResponse } from "./utils";

function App() {
  const [actualProduct, setActualProduct] = useState({});
  const [cartStatus, setCartStatus] = useState([]);
  const [cartVisibility, setCartVisibility] = useState(true);

  useEffect(() => {
    // Pretended api fetch V
    setTimeout(() => {
      setActualProduct(apiResponse);
      setCartStatus([{ quantity: 3, product: apiResponse }]);
    }, 2500);
  }, []);

  return (
    <div className="container">
      <Header cartStatus={cartStatus} />
      {cartVisibility && <Cart cartStatus={cartStatus} />}
      <ProductGallery actualProduct={actualProduct} />
      <ProductDescription actualProduct={actualProduct} />
    </div>
  );
}

export default App;
