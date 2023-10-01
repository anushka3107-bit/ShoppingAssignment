import React from "react";
import BlackBg from "../image/Rectangle.png";
import ModelBg from "../image/Group 15.png";
import Banner1 from "../image/banner1.png";
import Banner2 from "../image/banner2.png";
import Banner3 from "../image/banner3.png";

const MainPage = () => {
  return (
    <div className="imageContainer">
      {/* <img src={BlackBg} alt="" className="img1" /> */}
      <img src={ModelBg} alt="" className="img2" />

      <div className="banner1Img">
        <img src={Banner1} alt="banner1"></img>
      </div>
      <div className="banner2Img">
        <img src={Banner2} alt="banner2"></img>
      </div>
      <div className="banner3Img">
        <img src={Banner3} alt="banner3"></img>
      </div>
    </div>
  );
};

export default MainPage;
