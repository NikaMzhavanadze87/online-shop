import React from "react";
import dummyData from "./DummyData.json";
import Cards from "./Cards";
import "./HomePage.css";

function HomePage({ categoryIndex }) {
  const { DummyData } = dummyData;
  const category = DummyData[categoryIndex];
  const subcategories = category.subcategories;

  return (
    <div className="block-container">
      <div className="block-banner">
        <img
          src={
            categoryIndex === 1 ? "photos/image 92.png" : "photos/image 98.png"
          }
          alt="banner"
          className="banner-img"
        />
      </div>

      <div className="block-cards">
        <Cards subcategories={subcategories} />
      </div>
    </div>
  );
}

export default HomePage;
