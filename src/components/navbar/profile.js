import React from "react";
import IMG from "./image-avatar.png";
const Profile = () => {
  return (
    <>
      <div>
        <button>
          <img
            tabIndex={0}
            key={0}
            src={IMG}
            alt="profile pic"
            className=" md:hover:ring-2 md:focus:ring-4 ring-lime-500 rounded-full ml-8  p-0 m-0 h-8 w-8"
          ></img>
        </button>
      </div>
    </>
  );
};

export default Profile;
