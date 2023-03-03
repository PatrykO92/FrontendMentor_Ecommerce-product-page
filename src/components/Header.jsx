import "../css/header.css";

import { useState } from "react";

import {
  logo,
  cartIcon,
  hamburgerIcon,
  closeIcon,
  imageAvatar,
} from "../icons";

const Header = ({ cartCounter, changeCartView }) => {
  const [menuOpened, setMenuOpened] = useState(false);

  const handleMenuOpen = () => {
    setMenuOpened(!menuOpened);
  };

  return (
    <header>
      <div className="navigation-left">
        <button
          className="hamburger-menu"
          onClick={() => {
            handleMenuOpen();
          }}
        >
          <img src={hamburgerIcon} alt="menu" />
        </button>
        <img src={logo} alt="logo" className="logo" />
        <nav className={menuOpened ? "" : "menu-hidden"}>
          <button
            className="close-menu-button"
            onClick={() => {
              handleMenuOpen();
            }}
          >
            <img src={closeIcon} alt="close menu" className="close-menu-icon" />
          </button>
          <a href="#collections">Collections</a>
          <a href="#men">Men</a>
          <a href="#women">Women</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
      <div className="navigation-right">
        <button
          onClick={() => {
            changeCartView();
          }}
        >
          {cartCounter > 0 ? <span>{cartCounter}</span> : <></>}
          <img src={cartIcon} alt="shopping cart" />
        </button>
        <button>
          <img src={imageAvatar} alt="avatar" className="avatar-img" />
        </button>
      </div>
    </header>
  );
};

export default Header;
