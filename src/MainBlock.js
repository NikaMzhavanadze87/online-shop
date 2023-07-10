import React from "react";
import "./MainBlock.css";

function MainBlock() {
  const categories = [
    "Automobiles",
    "Home interiors",
    "Computer and tech",
    "Tools,equipment",
    "Sports and outdoor",
    "Animals and pets",
    "Machinary tools",
    "More category",
  ];

  return (
    <div className="main-block-grid">
      <ul className="category-list">
        {categories.map((category, index) => (
          <li key={index}>{category}</li>
        ))}
      </ul>

      <div className="banner-img-container">
        <img
          src="photos/Banner-board-800x420 2.png"
          alt="main banner"
          className="banner"
        />
      </div>
      <div className="avatar-profile">
        <div className="avatar-profile-entry">
          <div className="avatar">
            <div avatar-img>
              <img
                className="avatar-photo"
                src="icons/avatar.svg"
                alt="avatar"
              />
            </div>
            <div className="user-info">
              <p>Hi, user</p>
              <p>Let's get started!</p>
            </div>
          </div>
          <div className="avatar-buttons">
            <button>Join now</button>
            <button>Log in</button>
          </div>
        </div>
        <div className="sale-block">
          <p>Get US $10 off with a new supplier</p>
        </div>
        <div className="suplier-block">
          <p>Send quotes with supplier preferences</p>
        </div>
      </div>
    </div>
  );
}

export default MainBlock;
