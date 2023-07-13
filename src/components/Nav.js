import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiSearch, FiUser, FiHeart, FiShoppingCart } from "react-icons/fi";
import "./Nav.css";
import Wishlist from "../pages/Wishlist";
import logoImage from "./../vas.png"

const Nav = () => {
  const navigate = useNavigate();
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  useEffect(() => {
    const userCookie = document.cookie
      .split(";")
      .map((cookie) => cookie.trim())
      .find((cookie) => cookie.startsWith("user_token="));

    setIsUserLoggedIn(!!userCookie);
  }, []);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };
  const verifypagee = () => {
    window.open("http://localhost:8080/verification", "_blank");
  };

  const handleUserIconClick = () => {
    const userCookie = document.cookie
      .split(";")
      .map((cookie) => cookie.trim())
      .find((cookie) => cookie.startsWith("user_token="));

    if (isUserLoggedIn) {
      navigate("/profile");
    } else {
      navigate("/login");
    }
  };

  const handleHeartIconClick = () => {
    const userCookie = document.cookie
      .split(";")
      .map((cookie) => cookie.trim())
      .find((cookie) => cookie.startsWith("user_token="));

    if (isUserLoggedIn) {
      openPopup();
    } else {
      alert("Please login to add to wishlist.");
    }
  };
  const handleCartIconClick = () => {
    const userCookie = document.cookie
      .split(";")
      .map((cookie) => cookie.trim())
      .find((cookie) => cookie.startsWith("user_token="));

    if (isUserLoggedIn) {
      navigate("/cart")
    } else {
      alert("Please login to Cart.");
    }
  };
  

  return (
    <nav className="nav-container">
      <div className="logo">
        <Link to="/">
          <img
            className="logo-image"
            src={logoImage}
            alt="Your Logo"
            onClick={() => navigate("/")}
          />
        </Link>
      </div>
      <div className="sub-nav">
        <Link to="/market">Sarees</Link>
        <Link to="/">About us</Link>
        <Link onClick={verifypagee}>Verifier</Link>
        
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search" />
        <button>
          <FiSearch />
        </button>
      </div>
      <div className="right-icons">
        <Link to="/login"
          onClick={handleUserIconClick} // Update the click event handler
          // style={{ marginRight: "35px", fontSize: "21px", cursor: "pointer" }}
        >
          <FiUser />
        </Link>
        <Link
          // onMouseEnter={openPopup}
          onClick={handleHeartIconClick}
          // style={{ marginRight: "35px", fontSize: "21px", cursor: "pointer" }}
        >
          <FiHeart />
        </Link>
        <Link
          onClick={handleCartIconClick}
          // style={{ marginRight: "10px", fontSize: "21px", cursor: "pointer" }}
        >
          <FiShoppingCart />
        </Link>
      </div>
      {isPopupOpen && (
        <div className="popup" onMouseLeave={closePopup}>
          <Wishlist />
        </div>
      )}
    </nav>
  );
};

export default Nav;
