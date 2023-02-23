import { useState } from "react";
import "./app.css";
import { Header, ProductGallery, ProductDescription } from "./components";

function App() {
  const [product, setProduct] = useState({
    company: "Sneaker Company",
    name: "Fall Limited Edition Sneakers",
    description: `These low-profile sneakers
    are your perfect casual wear companion. Featuring a durable rubber outer
    sole, they'll withstand everything the weather can offer.`,
    price: 250.0,
    discount: 50,
  });

  return (
    <div className="container">
      <Header />
      <ProductGallery />
      <ProductDescription />
    </div>
  );
}

export default App;
