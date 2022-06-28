import React, { useState } from "react";
import "../Styles/Image-carousel/carousel.css";
const images = [
  {
    image: "../Styles/Images/carousel/image-product-0.jpg",
    thumbnail: "../Styles/Images/carousel/image-product-0-thumbnail.jpg",
  },
  {
    image: "../Styles/Images/carousel/image-product-1.jpg",
    thumbnail: "../Styles/Images/carousel/image-product-1-thumbnail.jpg",
  },
  {
    image: "../Styles/Images/carousel/image-product-2.jpg",
    thumbnail: "../Styles/Images/carousel/image-product-2-thumbnail.jpg",
  },
  {
    image: "../Styles/Images/carousel/image-product-3.jpg",
    thumbnail: "../Styles/Images/carousel/image-product-3-thumbnail.jpg",
  },
];

export const ImageCarousel = () => {
  const [imgIdx, setImgIdx] = useState(0);
  const [carouselPreview, setCarouselPreview] = useState(false);
  return (
    <section className="image-carousel">
      <div
        className="main-image-container"
        onClick={() => {
          if (window.innerWidth > 790) setCarouselPreview(true);
        }}
      >
        <img
          src={require(`../Styles/Images/carousel/image-product-${imgIdx}.jpg`)}
          alt="image-product"
        />
      </div>
      <div className="images-container">
        {images.map((img, idx) => (
          <div
            className="image-preview-container"
            key={idx}
            onClick={(e) => {
              setImgIdx(e.target.dataset.indexNumber);
            }}
          >
            <img
              src={require(`../Styles/Images/carousel/image-product-${idx}-thumbnail.jpg`)}
              data-index-number={idx}
              alt="image-product"
            />
          </div>
        ))}
      </div>
      {carouselPreview && (
        <CarouselPreview close={() => setCarouselPreview(false)} />
      )}
    </section>
  );
};

function CarouselPreview(props) {
  const [imgIdx, setImgIdx] = useState(0);

  return (
    <div className="carousel-preview">
      <span className="close-preview-btn" onClick={() => props.close()}>
        {" "}
        X{" "}
      </span>
      <div className="inner-container">
        <div className="main-image">
          <img
            src={require(`../Styles/Images/carousel/image-product-${imgIdx}.jpg`)}
          />
        </div>
        <div className="images-selection-container">
          {images.map((img, idx) => (
            <div
              className="images-selection-container-img-container"
              key={idx}
              onClick={(e) => {
                setImgIdx(e.target.dataset.indexNumber);
              }}
            >
              <img
                src={require(`../Styles/Images/carousel/image-product-${idx}-thumbnail.jpg`)}
                data-index-number={idx}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
