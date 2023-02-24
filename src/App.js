import { useEffect, useState } from "react";
import "./css/app.css";
import { Header, ProductGallery, ProductDescription } from "./components";
import { apiResponse } from "./utils";

function App() {
  const [actualProduct, setActualProduct] = useState({});
  const [basketStatus, setbasketStatus] = useState([]);

  useEffect(() => {
    // Pretended api fetch V
    setTimeout(() => {
      setActualProduct(apiResponse);
    }, 2500);
  }, []);

  return (
    <div className="container">
      <Header basket={basketStatus} />
      <ProductGallery actualProduct={actualProduct} />
      <ProductDescription actualProduct={actualProduct} />
    </div>
  );
}

export default App;
