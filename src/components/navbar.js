import React from "react";
import Menu from "./navbar/menu";
import Shoppingcart from "./navbar/Shoppingcart";
import Profile from "./navbar/profile";
const Navbar = ({ handleClick, ref }) => {
  return (
    <div className="inline">
      <div className="flex  w-full md:py-6 md:mb-8 md:p-0 md:pr-6 p-6 bg-white justify-between items-center ">

        <div className="flex ">
          <Menu className=" h-auto" />
          <h1 className=" md:ml-0 ml-4 font-Kumbh text-2xl  font-bold">
            {" "}
            Sneakers{" "}
          </h1>
          <div className="hidden md:flex mt-1 ml-16 text-xl space-x-5 font-semibold  text-gray-400 text-center">
            <a className=" hover:text-black" href="#Collections">Collections</a>
            <a  className=" hover:text-black"href="#Men">Men</a>
            <a className=" hover:text-black" href="#Women">Women</a>
            <a className=" hover:text-black" href="#About">About</a>
            <a  className=" hover:text-black"href="#collection">Contact</a>
          </div>
        </div>
        <div className="flex">
          <Shoppingcart ref={ref} handleClick={handleClick} />
          <Profile />
        </div>
      </div>
      <hr className=" hidden md:flex md:w-full border-gray-500 mb-8 mr-4" />

    </div>
  );
};

export default Navbar;
