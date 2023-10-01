import React from "react";
import Header from "./Header";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <h1>ShopKart</h1>
      </div>
      <div className="prodDetails">
        <ul>
          <li>WISHLIST(0)</li>
          <li>BAG(0)</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
