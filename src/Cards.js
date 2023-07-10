// Cards.js
import React from "react";
import "./Cards.css";

function Cards({ subcategories }) {
  return (
    <>
      {subcategories.map((subcategory, index) => (
        <div
          className={`di ${index === 7 ? "special-card" : "regular-card"} ${
            subcategory.name === "Pottery" ? "pottery-card" : ""
          }`}
          key={index}
        >
          <h1>{subcategory.name}</h1>
          <span>FROM</span>
          <span>USD 19</span>
          <div className="img-container">
            <img src={subcategory.catimg} alt={subcategory.name} />
          </div>
        </div>
      ))}
    </>
  );
}

export default Cards;
