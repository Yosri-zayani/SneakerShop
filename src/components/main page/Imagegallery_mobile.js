import React, { useState,  } from "react";
import image1 from "./Productimages/image-product-1.jpg";
import image2 from "./Productimages/image-product-2.jpg";
import image3 from "./Productimages/image-product-3.jpg";
import image4 from "./Productimages/image-product-4.jpg";
import LightBox from "./LightBox";
const ImagegalleryMobile = () => {
  const [index, setIndex] = useState(0);
  const images = [image1, image2, image3, image4];
  const condition = index >= 0 && index < 4;
  const condition2 = index < 0;
  const [isLightBoxOpen, setLightBoxOpen] = useState(false);
  const [currentIndex,setCurrentIndex] = useState(0); 
  const openLightBox = (index) => {
    setIndex(index);
    setLightBoxOpen(true);
  };

  const closeLightBox = () => {
    setLightBoxOpen(false);
  };
  


  return (
    <>
      <div className="hidden md:inline  ">  {/**Desktop design */}

        <img
          tabIndex={0}
          className="h-auto  w-auto rounded-lg hover:ring-8 cursor-pointer"
          src={images[index]}
          alt="main-images"
          onClick={() => openLightBox(index)}
        ></img>
        <div className="h-auto flex space-x-6 focus:ring-2">
          {" "}
          {images.map((image, index) => (
            <img
              onClick={() => {
                setIndex(index);
                
              }}
              className="   w-[50%] h-[20%] rounded-xl cursor-pointer mt-4  focus:ring-4 ring-lime-500  hover:opacity-hover focus:opacity-focus"
              tabIndex={0}
              key={index}
              src={image}
              alt="images"
            ></img>
            
          ))}
          {isLightBoxOpen && <LightBox images={images} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex}  closeLightBox={closeLightBox} />}

        </div>
      </div>
      <div className="md:hidden">
        {condition ? (
          <div className=" z-0  ">
            <button
              className=" md:hidden bg-white h-9 w-9 absolute left-[5vw] top-1/4 rounded-full flex items-center justify-center"
              onClick={() => {
                setIndex(index - 1);
              }}
            >
              <svg width="14" height="18" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M11 1 3 9l8 8"
                  stroke="#1D2026"
                  strokeWidth="3"
                  fill="none"
                  fillRule="evenodd"
                />
              </svg>
            </button>
            <img
              className="max-h-[38vh] w-[100vw] md:w-[50vw] md:ml-12"
              src={images[index]}
              alt={`shoenumber ${index + 1}`}
            />
            <button
              className="md:hidden bg-white  h-9 w-9  absolute left-[88vw] top-1/4 rounded-full flex items-center justify-center"
              onClick={() => {
                setIndex(index + 1);
              }}
            >
              <svg
                className=" justify-center"
                width="12"
                height="18"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m2 1 8 8-8 8"
                  stroke="#1D2026"
                  stroke-width="3"
                  fill="none"
                  fill-rule="evenodd"
                />
              </svg>
            </button>
          </div>
        ) : (
          setIndex(0)
        )}
        {condition2 && setIndex(3)}
      </div>

    </>
  );
};

export default ImagegalleryMobile;
