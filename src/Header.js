import "./Header.css";

const Header = () => {
  return (
    <header className="header-section">
      <img src="photos/logo-colored.svg" alt="Logo" />
      <div className="search-container">
        <input
          className="header-section-input"
          type="text"
          placeholder="Search..."
        />
        <select className="cat-dropdown">
          <option value="">All category</option>
          <option value="category1">Category 1</option>
          <option value="category2">Category 2</option>
          <option value="category3">Category 3</option>
        </select>
        <button className="search-btn">Search</button>
      </div>
      <div className="actions-container">
        <div className="action-icon-container">
          <img src="photos/profile.svg" alt="profile" className="action-img" />
          <span>Profile</span>
        </div>
        <div className="action-icon-container">
          <img src="photos/chat.svg" alt="message" className="action-img" />
          <span>message</span>
        </div>
        <div className="action-icon-container">
          <img src="photos/heart.svg" alt="order" className="action-img" />
          <span>Orders</span>
        </div>
        <div className="action-icon-container">
          <img src="photos/cart.svg" alt="cart" className="action-img" />
          <span>My cart</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
