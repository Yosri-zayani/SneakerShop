import React from "react";
import { useRef,useEffect } from "react";
import image from "./Productimages/image-product-1-thumbnail.jpg";

const Cart = ({ isVisible, quantity, deleteitems , setIsVisible }) => {
  const cartRef = useRef(null);
  
  const handleClickOutside = (event) => {
    if (cartRef.current && !cartRef.current.contains(event.target)) {
      setIsVisible(false);
    }
  };
  

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  return (
    <div>
      {isVisible && (
        <div ref={cartRef} className=" md:w-[20vw] md:min-w-[25vw] md:right-8  md:min-h-[30vh] md:mr-4 p-6  absolute overflow-auto h-auto  right-3 w-[95vw] top-24  z-10   bg-white shadow-md border border-gray-200 rounded">
          <h2 className="text-lg font-bold"> Cart</h2>

          {quantity > 0 ?  (<div className="">
              <div className="flex mt-4   self-center justify-start items-center">
                <img
                  className=" h-16 w-16 rounded-md"
                  src={image}
                  alt="imagethumbnail"
                ></img>
                <div className="  ml-4 inline-block">
                  <div className="text-gray-500 "> Fall Limited Edition Sneakers</div>
                  <div className="flex">
                    <div className=" text-gray-500 mr-4 ">
                    $125.00 x {quantity}</div> <div className="flex text-xl font-bold ">${quantity * 125}.00{" "}</div>
                  </div>
                </div>
                <button onClick={deleteitems}>
                  <svg
                    className="ml-4"
                    width="14"
                    height="16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z"
                      id="a"
                    />
                    <use fill="#C3CAD9" fill-rule="nonzero" />
                  </svg>
                </button>
              </div>{" "}
              <button className=" bg-lime-500 text-white text-lg align-middle text-center mt-4 h-12 w-full items-center  rounded-lg" >Checkout </button>
            </div>
          )
           : (
            <div>Your cart is empty </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Cart;
