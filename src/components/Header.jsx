import { logo, iconCart } from "../icons";
import { imageAvatar } from "../images";

const Header = () => {
  return (
    <header>
      <div className="navigation-left">
        <img src={logo} alt="logo" />
        <nav>
          <a href="#collections">Collections</a>
          <a href="#men">Men</a>
          <a href="#women">Women</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
      <div className="navigation-right">
        <button>
          <img src={iconCart} alt="shopping cart" />
        </button>
        <button>
          <img src={imageAvatar} alt="avatar image" className="avatar-img" />
        </button>
      </div>
    </header>
  );
};

export default Header;
