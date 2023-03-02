import { useEffect, useState } from "react";

import "./css/app.css";

import {
  Header,
  ProductGallery,
  ProductDescription,
  Basket,
} from "./components";
import { apiResponse } from "./utils";

function App() {
  const [actualProduct, setActualProduct] = useState({});
  const [basketStatus, setBasketStatus] = useState([]);
  const [basketVisibility, setBasketVisibility] = useState(true);

  useEffect(() => {
    // Pretended api fetch V
    setTimeout(() => {
      setActualProduct(apiResponse);
    }, 2500);
  }, []);

  return (
    <div className="container">
      <Header basketStatus={basketStatus} />
      {basketVisibility && <Basket basketStatus={basketStatus} />}
      <ProductGallery actualProduct={actualProduct} />
      <ProductDescription actualProduct={actualProduct} />
    </div>
  );
}

export default App;
