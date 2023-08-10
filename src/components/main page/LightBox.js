import React, { useEffect } from "react";

const LightBox = ({ images, currentIndex, setCurrentIndex, closeLightBox }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        closeLightBox();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeLightBox]);

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center"
      onClick={closeLightBox}
    >
      <div
        className="p-5 w-[36vw] relative max-w-screen-md max-h-screen-md flex flex-col items-center "
        onClick={(e) => e.stopPropagation()}
      >
        <span
          className="absolute bottom-[96%] right-6 text-4xl mb-2  text-lime-500 rounded-full hover:ring-2 ring-white cursor-pointer"
          onClick={closeLightBox}
        >
          &times;
        </span>
          <div className=" w-auto  ">
            <div className="flex">{/* container for image and button*/}
              <img
                className=" h-[100%] w-[100%] rounded-3xl"
                src={images[currentIndex]}
                alt="current "
              />
              <div className="flex mt-4 space-x-4">
                {" "}
                {/* container for prec and next buttons (flex)*/}
                <button
                  className="absolute rounded-full right-[90%] items-center self-center  h-12 w-12 bg-white"
                  onClick={() =>
                    setCurrentIndex(
                      (prevIndex) =>
                        (prevIndex - 1 + images.length) % images.length
                    )
                  }
                >
                  <svg
                    className="  ml-4"
                    width="12"
                    height="18"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11 1 3 9l8 8"
                      stroke="#1D2026"
                      stroke-width="3"
                      fill="none"
                      fill-rule="evenodd"
                    />
                  </svg>
                </button>
                <button
                  className="absolute rounded-full left-[87%] self-center  h-12 w-12 bg-white"
                  onClick={() =>
                    setCurrentIndex(
                      (prevIndex) => (prevIndex + 1) % images.length
                    )
                  }
                >
                  <svg
                    className=" ml-4"
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
            </div>
    
            <div className="flex w-[100%]">{/* container for small images*/}
              {images.map((image, index) => (
                <img
                  onClick={() => {
                    setCurrentIndex(index);
                  }}
                  className=" w-[100%] h-[40%] rounded-xl cursor-pointer mt-4 mx-5 focus:ring-4 ring-lime-500 hover:opacity-hover  focus:opacity-focus "
                  tabIndex={0}
                  key={index}
                  src={image}
                  alt="images"
                ></img>
              ))}
            </div>
          </div>
      </div>
    </div>
  );
};

export default LightBox;
