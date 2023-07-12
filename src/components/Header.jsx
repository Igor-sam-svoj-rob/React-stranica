import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaHotel, FaBars, FaTimes } from "react-icons/fa";
import "./Header.css";
import Button from "./Button";

const Header = () => {
  const [click, setClick] = useState(false);
  const clickHandler = () => setClick(!click);
  const menuIcon = click ? <FaTimes /> : <FaBars />;
  const navMenuClass = click ? "nav-menu active" : "nav-menu";
  const closeMobileMenu = () => setClick(false);
  const [button, setButton] = useState(false);

  useEffect(() => {
    showButton();
  }, [button]);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  window.addEventListener("resize", showButton);

  return (
    <header className="navbar">
      <nav className="navbar-container">
        <Link to="/" className="navbar-logo">
          Booking <FaHotel />
        </Link>
        <div className="menu-icon" onClick={clickHandler}>
          {menuIcon}
        </div>
        <ul className={navMenuClass}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Početna
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/servisi" className="nav-links" onClick={closeMobileMenu}>
              Servisi
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/proizvodi"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Proizvodi
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/kontakt"
              className="nav-links-mobile"
              onClick={closeMobileMenu}
            >
              Kontakt
            </Link>
          </li>
        </ul>
        {button && <Button buttonStyle="btn-outline">Kontakt</Button>}
      </nav>
    </header>
  );
};

export default Header;
