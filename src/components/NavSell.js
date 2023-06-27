import React,{useState}  from 'react';
import { Link } from 'react-router-dom';
import { FiSearch, FiUser, FiHeart, FiShoppingCart } from 'react-icons/fi';
import './NavSell.css';
import logoImage from './../vas.png';

const NavSell = () => {
  const [isPopup, setisPopup] = useState(false);
  const openLogPopup = () => {
    setisPopup(true);
  };

  const closeLogPopup = () => {
    setisPopup(false);
  };
  return (
    <nav className="nav-container">
      <div className="logo">
        <Link to="/">
          <img src={logoImage} alt="Your Logo" className="logo-image" />
        </Link>
      </div>
      <div className="sub-nav">
        <Link to="/">Contact us</Link>
        <Link to="/">About us</Link>
        {/* <Link to="/dhotis">Dhotis</Link>
        <Link to="/fabric">Fabric</Link> */}
      </div>
      {/* <div className="search-bar">
        <input type="text" placeholder="Search" />
        <button>
          <FiSearch />
        </button>
      </div> */}
      <div className="right-icons">
        <Link  onMouseEnter={openLogPopup}>
          <FiUser />
        </Link>
        {/* <Link to="/wishlist">
          <FiHeart />
        </Link>
        <Link to="/cart">
          <FiShoppingCart />
        </Link> */}
      </div>
      {isPopup && (
        <div className="logpopup" onMouseEnter={openLogPopup} onMouseLeave={closeLogPopup}>
          <Link to="/login">
          <button className="logButton">Login</button>
          </Link>
          <Link to="/register">
          <button className="logButton"> Register</button>
          </Link>
        </div>
      )}
    </nav>
  );
}

export default NavSell;
