import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="main-footer-container">
      <div className="f-news-letter-comtainer">
        <div className="footer-subscribe">
          <h4 className="f-sub-title">Subscribe on our newsletter</h4>
          <p>
            Get daily news on upcoming offers from many suppliers all over the
            world
          </p>
          <div className="sub-mail">
            <input
              type="email"
              placeholder=""
              className="subscribe-input"
              style={{ backgroundImage: "url('./icons/email.svg')" }}
            />
            <button className="sub-btn">Subscribe</button>
          </div>
        </div>
      </div>
      <div className="footer-container">
        <div className="footer-brand-social">
          <img
            className="footer-logo"
            src="icons/logo-colored.png"
            alt="logo"
          />
          <h2 className="footer-advert">
            Best information about the company gies here but now lorem ipsum is
          </h2>
          <div className="footer-social-container">
            <div>
              <img
                className="footer-icon"
                src="icons/facebook3.svg"
                alt="facebook"
              />
            </div>
            <div>
              <img
                className="footer-icon"
                src="icons/twitter3.svg"
                alt="twitter"
              />
            </div>
            <div>
              <img
                className="footer-icon"
                src="icons/linkedin3.svg"
                alt="linkedin"
              />
            </div>
            <div>
              <img
                className="footer-icon"
                src="icons/instagram3.svg"
                alt="instagram"
              />
            </div>
            <div>
              <img
                className="footer-icon"
                src="icons/youtube3.svg"
                alt="youtube"
              />
            </div>
          </div>
        </div>
        <div className="footer-section">
          <h3 className="footer-section-title">About</h3>
          <ul className="footer-list">
            <li>About Us</li>
            <li>Find store</li>
            <li>Categories</li>
            <li>Blogs</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3 className="footer-section-title">Partnership</h3>
          <ul className="footer-list">
            <li>About Us</li>
            <li>Find store</li>
            <li>Categories</li>
            <li>Blogs</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3 className="footer-section-title">Information</h3>
          <ul className="footer-list">
            <li>Help center</li>
            <li>Money Refund</li>
            <li>Shipping</li>
            <li>Contact us</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3 className="footer-section-title">For users</h3>
          <ul className="footer-list">
            <li>Login</li>
            <li>Register</li>
            <li>Settings</li>
            <li>My orders</li>
          </ul>
        </div>
        <div className="get-up-container">
          <h2>Get app</h2>
          <img
            className="footer-get-app"
            src="icons/market-button.svg"
            alt="linkedin"
          />
          <img
            className="footer-get-app"
            src="icons/market-buttong.svg"
            alt="linkedin"
          />
        </div>
      </div>

      <div className="f-tail-container">
        <div className="footer-tail">
          <p>© 2023 Ecommerce.</p>
          <select
            className="footer-dropdown"
            style={{ backgroundImage: "url('./icons/expand_more.png')" }}
          >
            <option value="">Ship to</option>
            <option value="faq">FAQ</option>
            <option value="contact">Contact Us</option>
            <option value="support">Support</option>
          </select>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
