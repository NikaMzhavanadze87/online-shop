import "./Header.css";
import "./Navigation.css";
import "./MainNavigation.css";
import Header from "./Header";
import Navigation from "./Navigation";

function MainNavigation() {
  return (
    <div className="main-nav-container">
      <Header />
      <Navigation />
    </div>
  );
}

export default MainNavigation;
