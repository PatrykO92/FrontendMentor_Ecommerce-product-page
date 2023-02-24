import "../css/product-gallery.css";
import { LoadingComponent } from "./";

import { useState, useEffect } from "react";

const ProductGallery = ({ actualProduct }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [galleryImages, setGalleryImages] = useState([]);
  const [actualImage, setActualImage] = useState("");

  useEffect(() => {
    if (actualProduct?.images?.length > 0) {
      setGalleryImages(actualProduct.images);
    }
  }, [actualProduct]);

  useEffect(() => {
    if (galleryImages?.length > 0) {
      setActualImage(galleryImages[0][0]);
      setIsLoading(false);
    }
  }, [galleryImages]);

  return (
    <div className="product-gallery">
      {isLoading ? (
        <LoadingComponent />
      ) : (
        <div className="gallery">
          <div className="actual-photo">
            <img src={actualImage} alt={`${actualProduct?.name}`} />
          </div>
          <div className="thumbnails-menu">
            {galleryImages.map((item, i) => {
              return (
                <img
                  key={i}
                  src={item[1]}
                  alt=""
                  onClick={() => {
                    setActualImage(item[0]);
                  }}
                />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductGallery;
