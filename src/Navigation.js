import React from "react";
import "./Navigation.css";

const Navigation = () => {
  return (
    <div className="navigation-nav-container">
      <nav className="navigation-navigate">
        <div className="nav-menu-container">
          <div className="icon-container">
            <img src="icons/menu.svg" alt="Navigation Icon" />
          </div>
          <ul className="navigation-list">
            <li>All category</li>
            <li>Hot offers</li>
            <li>Gift boxes</li>
            <li>Projects</li>
            <li>Menu items</li>
            <li>
              <select
                className="help-dropdown"
                style={{ backgroundImage: "url('./icons/expand_more.png')" }}
              >
                <option value="">Help</option>
                <option value="faq">FAQ</option>
                <option value="contact">Contact Us</option>
                <option value="support">Support</option>
              </select>
            </li>
          </ul>
        </div>
        <div className="sep-selected">
          <select
            className="help-dropdown"
            style={{ backgroundImage: "url('./icons/expand_more.png')" }}
          >
            <option value="">English,USD</option>
            <option value="faq">FAQ</option>
            <option value="contact">Contact Us</option>
            <option value="support">Support</option>
          </select>
          <select
            className="help-dropdown"
            style={{ backgroundImage: "url('./icons/expand_more.png')" }}
          >
            <option value="">Ship to</option>
            <option value="faq">FAQ</option>
            <option value="contact">Contact Us</option>
            <option value="support">Support</option>
          </select>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
