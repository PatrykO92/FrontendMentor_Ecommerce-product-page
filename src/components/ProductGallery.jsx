import "../css/product-gallery.css";
import { LoadingComponent } from "./";
import { previousIcon, nextIcon, closeIcon } from "../icons";

import { useState, useEffect } from "react";

const ProductGallery = ({ actualProduct }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [galleryImages, setGalleryImages] = useState([]);
  const [actualImage, setActualImage] = useState("");

  const [isLigthbox, setIsLightbox] = useState(false);
  const [lightboxImage, setLightboxImage] = useState("");

  const changePhoto = (counter, lightbox = false) => {
    let check;

    lightbox
      ? (check = galleryImages.findIndex((item) =>
          item.includes(lightboxImage)
        ))
      : (check = galleryImages.findIndex((item) => item.includes(actualImage)));

    if (check + counter < 0) {
      lightbox
        ? setLightboxImage(galleryImages[galleryImages.length - 1][0])
        : setActualImage(galleryImages[galleryImages.length - 1][0]);
    } else if (check + counter > galleryImages.length - 1) {
      lightbox
        ? setLightboxImage(galleryImages[0][0])
        : setActualImage(galleryImages[0][0]);
    } else {
      lightbox
        ? setLightboxImage(galleryImages[check + counter][0])
        : setActualImage(galleryImages[check + counter][0]);
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
            <img
              src={actualImage}
              alt={`${actualProduct?.name}`}
              onClick={() => {
                setLightboxImage(actualImage);
                setIsLightbox(true);
              }}
            />
            <button className="previous-button" onClick={() => changePhoto(-1)}>
              <img src={previousIcon} alt="previous" />
            </button>
            <button className="next-button" onClick={() => changePhoto(1)}>
              <img src={nextIcon} alt="next" />
            </button>
          </div>
          <div className="thumbnails-menu">
            {galleryImages.map((item, i) => {
              if (item[0] === actualImage) {
                return (
                  <div key={i} className="active-thumbnail">
                    <img
                      src={item[1]}
                      alt=""
                      onClick={() => {
                        setActualImage(item[0]);
                      }}
                    />
                  </div>
                );
              } else {
                return (
                  <div key={i}>
                    <img
                      src={item[1]}
                      alt=""
                      onClick={() => {
                        setActualImage(item[0]);
                      }}
                    />
                  </div>
                );
              }
            })}
          </div>
        </div>
      )}
      {isLigthbox ? (
        <div className="light-box">
          <div className="lb-actual-photo-container">
            <button
              onClick={() => setIsLightbox(false)}
              className="lb-close-menu"
            >
              <img src={closeIcon} alt="close" />
            </button>
            <img
              src={lightboxImage}
              alt={`${actualProduct?.name}`}
              className="lb-actual-image"
            />
            <button
              onClick={() => changePhoto(-1, true)}
              className="lb-previous-button"
            >
              <img src={previousIcon} alt="previous" />
            </button>
            <button
              onClick={() => changePhoto(1, true)}
              className="lb-next-button"
            >
              <img src={nextIcon} alt="next" />
            </button>
          </div>
          <div className="lb-thumbnails-menu">
            {galleryImages.map((item, i) => {
              if (item[0] === lightboxImage) {
                return (
                  <div key={i} className="active-thumbnail">
                    <img
                      src={item[1]}
                      alt=""
                      onClick={() => {
                        setLightboxImage(item[0]);
                      }}
                    />
                  </div>
                );
              } else {
                return (
                  <div key={i}>
                    <img
                      src={item[1]}
                      alt=""
                      onClick={() => {
                        setLightboxImage(item[0]);
                      }}
                    />
                  </div>
                );
              }
            })}
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default ProductGallery;
