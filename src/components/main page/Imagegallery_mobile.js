import React, { useState } from "react";
import LightBox from "./LightBox";
import image1 from "./Productimages/image-product-1.jpg";
import image2 from "./Productimages/image-product-2.jpg";
import image3 from "./Productimages/image-product-3.jpg";
import image4 from "./Productimages/image-product-4.jpg";

const ImageGalleryMobile = () => {
  const [index, setIndex] = useState(0);
  const images = [image1, image2, image3, image4];
  const condition = index >= 0 && index < images.length;
  const [isLightBoxOpen, setLightBoxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightBox = (index) => {
    setIndex(index);
    setLightBoxOpen(true);
  };

  const closeLightBox = () => {
    setLightBoxOpen(false);
  };

  return (
    <>
      {/* Desktop Design */}
      <div className="hidden md:inline">
        <img
          tabIndex={0}
          className="h-auto w-auto rounded-lg hover:ring-8 cursor-pointer"
          src={images[index]}
          alt="main-images"
          onClick={() => openLightBox(index)}
        />
        <div className="h-auto flex space-x-6 focus:ring-2">
          {images.map((image, idx) => (
            <img
              key={idx}
              onClick={() => setIndex(idx)}
              className="w-[50%] h-[20%] rounded-xl cursor-pointer mt-4 focus:ring-4 ring-lime-500 hover:opacity-hover focus:opacity-focus"
              tabIndex={0}
              src={image}
              alt="images"
            />
          ))}
          {isLightBoxOpen && (
            <LightBox
              images={images}
              currentIndex={currentIndex}
              setCurrentIndex={setCurrentIndex}
              closeLightBox={closeLightBox}
            />
          )}
        </div>
      </div>
      {/* Mobile Design */}
      <div className="md:hidden">
        {condition && (
          <div className="z-0">
            {/* Previous Button */}
            <button
              className="md:hidden bg-white h-9 w-9 absolute left-[5vw] top-1/4 rounded-full flex items-center justify-center"
              onClick={() => setIndex(index - 1)}
            >
              {/* SVG Path */}
            </button>
            {/* Main Image */}
            <img
              className="max-h-[38vh] w-[100vw] md:w-[50vw] md:ml-12"
              src={images[index]}
              alt={`shoenumber ${index + 1}`}
            />
            {/* Next Button */}
            <button
              className="md:hidden bg-white h-9 w-9 absolute left-[88vw] top-1/4 rounded-full flex items-center justify-center"
              onClick={() => setIndex(index + 1)}
            >
              {/* SVG Path */}
            </button>
          </div>
        )}
        {!condition && setIndex(0)}
      </div>
    </>
  );
};

export default ImageGalleryMobile;
