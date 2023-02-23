import { useEffect, useState } from "react";
import "./app.css";
import { Header, ProductGallery, ProductDescription } from "./components";
import { apiResponse } from "./utils";

function App() {
  const [product, setProduct] = useState({});

  useEffect(() => {
    // Pretended api fetch V
    setProduct(apiResponse);
  }, []);

  return (
    <div className="container">
      <Header />
      <ProductGallery />
      <ProductDescription />
    </div>
  );
}

export default App;
