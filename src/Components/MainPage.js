import React from "react";
import BlackBg from "../image/Rectangle.png";
import ModelBg from "../image/Group 15.png";

const MainPage = () => {
  return (
    <div className="imageContainer">
      {/* <img src={BlackBg} alt="" className="img1" /> */}
      <img src={ModelBg} alt="" className="img2" />

      <div className="bannerText">
        <h1>Fresh</h1>
        <h4>2023</h4>
        <h3>
          <span>Look</span>{" "}
        </h3>
      </div>
    </div>
  );
};

export default MainPage;
