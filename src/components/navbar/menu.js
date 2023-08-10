import React, { useState, useRef, useEffect } from "react";

const Menuitems = () => {
  return (
    <div className="">
      <Menuitem item={"Collections"} />
      <Menuitem item={"Men"} />
      <Menuitem item={"Women"} />
      <Menuitem item={"About"} />
      <Menuitem item={"Contact"} />
    </div>
  );
};

const Menuitem = ({ item }) => {
  return (
    <>
      <div className="mt-6 text-xl font-bold"> {item}</div>
    </>
  );
};

const Menu = () => {
  const [active, Setactive] = useState(false);
  const ref = useRef(null);
  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      Setactive(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  const handleClick = () => {
    Setactive(!active);
  };
  return (
    <>
    <div className="  md:hidden  flex overflow-auto">
      {active ? (
        <div
          ref={ref}
          className="absolute left-0 p-8 overflow-auto max-w-[75vw] h-full w-[70vw]  top-3  z-30 bg-white"
        >
          <button className=" mb-8" onClick={handleClick}>
            <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg">
              <path
                d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
                fill="#69707D"
                fill-rule="evenodd"
              />
            </svg>{" "}
          </button>
          <Menuitems />
        </div>
      ) : (
        <>
          <button onClick={handleClick}>
            <svg width="16" height="15" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M16 12v3H0v-3h16Zm0-6v3H0V6h16Zm0-6v3H0V0h16Z"
                fill="#69707D"
                fill-rule="evenodd"
              />
            </svg>
          </button>
        </>
      )}

    </div>
    {active && <div className="fixed inset-x-0 inset-y-[12.5px] bg-black opacity-50 z-10"></div>}

    </>
  );
};

export default Menu;
