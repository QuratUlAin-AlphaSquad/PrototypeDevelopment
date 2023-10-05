// import React from 'react'
import logo from "/src/assets/WF Logo Placeholder.png";

const Header = () => {
  return (
    <div
      className=" px-10 py-6 border-b-2  border-[#2D3648] w-[ 1512px ];
      "
    >
      {/* <p>Top Bar</p> */}
      <img src={logo}></img>
    </div>
  );
};

export default Header;
