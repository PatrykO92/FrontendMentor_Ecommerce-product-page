import "../css/product-gallery.css";
import { LoadingComponent } from "./";
import { previousIcon, nextIcon } from "../icons";

import { useState, useEffect } from "react";

const ProductGallery = ({ actualProduct }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [galleryImages, setGalleryImages] = useState([]);
  const [actualImage, setActualImage] = useState("");

  const changePhoto = (counter) => {
    const check = galleryImages.findIndex((item) => item.includes(actualImage));
    if (check + counter < 0) {
      setActualImage(galleryImages[galleryImages.length - 1][0]);
    } else if (check + counter > galleryImages.length - 1) {
      setActualImage(galleryImages[0][0]);
    } else {
      setActualImage(galleryImages[check + counter][0]);
    }
  };

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
            <button className="previous-button" onClick={() => changePhoto(-1)}>
              <img src={previousIcon} alt="previous" />
            </button>
            <button className="next-button" onClick={() => changePhoto(1)}>
              <img src={nextIcon} alt="next" />
            </button>
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
