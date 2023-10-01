import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ThinLine from "../image/Group 17.png";

const Category = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch data from the API
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      });
  }, []);

  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 1000,
    arrows: true,
    autoplay:true,
    autoplaySpeed:3000,
  };

  return (
    <div className="mainCat">
    <div className="categoryHeading">
        <h2>New products</h2>
      </div>
    <div className="categoryContainer">
      <div className="productCategory">
        <ul>
          <li>Apparel</li>
          <li>Accessories</li>
          <li>BestSellers</li>
          <li>50% off</li>
        </ul>
      </div>

      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="productSlider">
          <Slider {...settings}>
            {products.map((product) => (
              <div key={product.id} className="product">
                <img src={product.image} alt={product.title} />
                <p className="title">{product.title}</p>
                <p className="desc">{product.description}</p>
                <p className="price">${product.price}</p>
              </div>
            ))}
          </Slider>
        </div>
      )}
    </div>
    </div>
  );
};

export default Category;
