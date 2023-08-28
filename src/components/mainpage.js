import React, { useState, useRef, useEffect } from "react";
import ImagegalleryMobile from "./main page/Imagegallery_mobile";
import Price from "./main page/Price";
import Quantity from "./main page/quantity";
import Addtocart from "./main page/Addtocart";
import Cart from "./main page/cart";
import Navbar from "./navbar";

const Mainpage = () => {
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

  const [isVisible, setIsVisible] = useState(false);
  const handletoggle = (event) => {
    setIsVisible(!isVisible);
    event.stopPropagation();
  };
  const handleAddtoCart = () => {
    setIsVisible(true);
  };
  const [quantity, setQuantity] = useState(0);
  const handleDeleteitems = () => {
    setQuantity(0);
  };
  const handleAdd = () => {
    setQuantity(quantity + 1);
  };
  const handleRemove = () => {
    setQuantity(quantity - 1);
  };
  const condition = quantity >= 0;
  return (
    <div className="text-left md:my-8 md: md:m-32 mb-12">
      <Navbar handleClick={handletoggle} />
      <Cart
        isVisible={isVisible}
        setIsVisible={setIsVisible}
        quantity={quantity}
        deleteitems={handleDeleteitems}
        cartRef={cartRef}
      />
      <div className="hidden md:flex" >  {/*Desktop  */}
        <div className=" w-[47vw]  h-auto  mr-16">
        <ImagegalleryMobile />
        </div>
        <div className="inlinew-[40vw] mt-12 ml-8">
          <h3 className="  text-lime-500  m-4 font-bold">SNEAKER COMPANY</h3>
          <h1 className="m-4 font-bold text-4xl">
            Fall Limited Edition <br />
            Sneakers{" "}
          </h1>
          <p className="m-4">
            These low-profile sneakers are your perfect casual wear companion.
            <br />
            Featuring a durable rubber outer sole, they'll withstand evreything
            they weather can offer.
          </p>
          <Price price={125.0} discount={50} />
          {condition ? (
            <div className="flex">

              {" "}
              <Quantity
                quantity={quantity}
                addone={handleAdd}
                lessone={handleRemove}
              />
              <Addtocart added={handleAddtoCart} />
            </div>
          ) : (
            setQuantity(0)
          )}
        </div>
      </div>
      <div className="md:hidden"> {/**Mobile*/}
        <ImagegalleryMobile />
        <h3 className="  text-lime-500  m-4 font-bold">SNEAKER COMPANY</h3>
        <h1 className="m-4 font-bold text-4xl">
          Fall Limited Edition <br />
          Sneakers{" "}
        </h1>
        <p className="m-4">
          These low-profile sneakers are your perfect casual wear companion.
          <br />
          Featuring a durable rubber outer sole, they'll withstand evreything
          they weather can offer.
        </p>
        <Price price={125.0} discount={50} />
        {condition ? (
          <>
            {" "}
            <Quantity
              quantity={quantity}
              addone={handleAdd}
              lessone={handleRemove}
            />
          </>
        ) : (
          setQuantity(0)
        )}
        <Addtocart added={handleAddtoCart} />
      </div>
    </div>
  );
};

export default Mainpage;
