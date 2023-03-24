import Navbar from "./Navbar";
import "./navigation.css";

const Header = () => {
  return (
    <header>
      <div className="nav-area">
        <a href="/" className="logo">
          Logo
        </a>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
