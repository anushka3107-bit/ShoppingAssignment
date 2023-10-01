import React, { useState } from "react";
import Border from "../image/Group 16.png";

const Header = () => {
  // const [showDropdown, setShowDropdown] = useState(false);
  // const toggleDropdown = () => {
  //   setShowDropdown(!showDropdown);
  // };
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <nav className="nav-list">
      <img src={Border} alt="border" />
      <ul>
        <li>HOME</li>
        <li>ABOUT</li>
        {/* <li>
          <span onClick={toggleDropdown}>OUR PRODUCTS</span>
          {showDropdown && (
            <ul className="dropdown">
              <li>Product 1</li>
              <li>Product 2</li>
              <li>Product 3</li>
              <li>Product 4</li>
            </ul>
          )}
        </li> */}
        <li
          onMouseEnter={toggleDropdown}
          onMouseLeave={toggleDropdown}
          className="dropdown"
        >
          OUR PRODUCTS
          {isDropdownOpen && (
            <ul className="dropdown-content">
              <li>Product 1</li>
              <li>Product 2</li>
              <li>Product 3</li>
              <li>Product 4</li>
            </ul>
          )}
        </li>
        <li>CONTACT US</li>
      </ul>
    </nav>
  );
};

export default Header;
