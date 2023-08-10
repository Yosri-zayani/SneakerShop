import React from "react";

const Quantity = ({ quantity, addone, lessone }) => {
  return (
    <div className=" md:w-[45%] flex  items-center self-center justify-between m-4  w-auto h-[10vh] bg-Lightgrayishblue rounded-xl">
        <button className=" ml-4" onClick={lessone}>
          <svg
            className=" "
            width="12"
            height="4"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.357 3.332A.641.641 0 0 0 12 2.69V.643A.641.641 0 0 0 11.357 0H.643A.641.641 0 0 0 0 .643v2.046c0 .357.287.643.643.643h10.714Z"
              id="a"
            />

            <use fill="#FF7E1B" fill-rule="nonzero" />
          </svg>
        </button>
        <div className=" text-center text-xl"> {quantity} </div>
      <button className=" mr-4 " onClick={addone}>
        <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 7.023V4.977a.641.641 0 0 0-.643-.643h-3.69V.643A.641.641 0 0 0 7.022 0H4.977a.641.641 0 0 0-.643.643v3.69H.643A.641.641 0 0 0 0 4.978v2.046c0 .356.287.643.643.643h3.69v3.691c0 .356.288.643.644.643h2.046a.641.641 0 0 0 .643-.643v-3.69h3.691A.641.641 0 0 0 12 7.022Z"
            id="b"
          />
        </svg>
      </button>
    </div>
  );
};

export default Quantity;
