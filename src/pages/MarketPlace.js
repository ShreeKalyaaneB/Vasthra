import React, { useState, useEffect } from "react";
import "./MarketPlace.css";
import { Range } from "react-range";
import axios from "../url.js";
import goldy from "../vas.png";

import {
  AiOutlineSearch,
  AiOutlineHeart,
  AiOutlineEnvironment,
} from "react-icons/ai";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { FaHeart } from "react-icons/fa";


const MarketPlace = () => {
  const [priceRange, setPriceRange] = useState([5000, 2000000]);
  const [selectedYear, setSelectedYear] = useState("");
  const [transmission, setTransmission] = useState([]);
  const [iswishListed, setwishList] = useState(false);
  const [daata, setDaata] = useState([]);
  const navigate = useNavigate();
  const descript=(id) =>{
    navigate(`/viewproduct/${id}`)
  }

  const handleFavoriteClick = async (sareeId) => {
    try {
      console.log(sareeId);
      const response = await axios.get(`/wishlist/${sareeId}`);
      console.log(response.data.wishlist);

      const updatedWishList = {
        ...iswishListed,
        [sareeId]: true,
      };
      setwishList(updatedWishList);
      localStorage.setItem("wishList", JSON.stringify(updatedWishList));
    } catch (error) {
      console.error(error);
    }
  };
  const handleFavoriteRemove = async (sareeId) => {
    try {
      console.log(sareeId);
      const response = await axios.get(`/removewishlist/${sareeId}`);
      console.log(response.data.wishlist);

      const updatedWishList = {
        ...iswishListed,
        [sareeId]: false,
      };
      setwishList(updatedWishList);
      localStorage.setItem("wishList", JSON.stringify(updatedWishList));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/allsarees");
        console.log(response.data.saree);
        setDaata(response.data.saree);
        response.data.saree.forEach((saree) => {
          console.log(saree.fabric);
        });
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
    const storedWishList = localStorage.getItem("wishList");
    if (storedWishList) {
      const parsedWishList = JSON.parse(storedWishList);
      setwishList(parsedWishList);
    }
}, []); 
  const handleViewProduct=()=>{
    navigate('/viewproduct')
  }

  const handlePriceRangeChange = (values) => {
    setPriceRange(values);
  };

  const handleSearchInputChange = (event) => {};

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };

  const handleTransmissionChange = (event) => {
    const { checked, value } = event.target;
    if (checked) {
      setTransmission([...transmission, value]);
    } else {
      setTransmission(transmission.filter((item) => item !== value));
    }
  };

  const formatAmount = (amount) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
    }).format(amount);
  };

  return (
    <>
     <Nav />
     <br/>
      <div className="containerer">
        
        <div className="range-container">
          <div className="range-wrapper">
            <h2 className="range-title">Price Range</h2>
            <p className="range-values">
              <span>{formatAmount(priceRange[0])}</span>
              <span>{formatAmount(priceRange[1])}</span>
            </p>

            <Range
              step={5000}
              min={5000}
              max={2000000}
              values={priceRange}
              onChange={handlePriceRangeChange}
              renderTrack={({ props, children }) => (
                <div {...props} className="range-track">
                  {children}
                </div>
              )}
              renderThumb={({ props, isDragged }) => (
                <div
                  {...props}
                  className={`range-thumb ${isDragged ? "dragged" : ""}`}
                />
              )}
            />

            <p>
              <span className="dot">Min</span>
              <span className="value">Max</span>
            </p>

            <div className="search-container">
              <p className="search-title"> Fabric + Material</p>
              <input
                className="search-input"
                type="text"
                placeholder="Search..."
                onChange={handleSearchInputChange}
              />
              <AiOutlineSearch className="search-icon" />
              <p className="top-brands">Material</p>
              <label className="brand-checkbox">
                <input type="checkbox" />
                <span className="brand-name">Silk</span>
                <span className="brand-count"></span>
              </label>
              <label className="brand-checkbox">
                <input type="checkbox" />
                <span className="brand-name">Cotton</span>
                <span className="brand-count"></span>
              </label>
              <label className="brand-checkbox">
                <input type="checkbox" />
                <span className="brand-name">Organza</span>
                <span className="brand-count"></span>
              </label>
              <label className="brand-checkbox">
                <input type="checkbox" />
                <span className="brand-name">Georgette</span>
                <span className="brand-count"></span>
              </label>
            </div>

            <div className="year-container">
              <p className="year-title">Type</p>

              <select
                className="year-dropdown"
                value={selectedYear}
                onChange={handleYearChange}
              >
                <option value="">All Types</option>
                <option value="2020">Saree</option>
                <option value="2018">Duppatta</option>
                <option value="2016">Dhotis</option>
                <option value="2014">Only Fabric</option>
              </select>

              <p className="type">Color Family</p>

              <div className="transmission-checkboxes">
                <label className="transmission-checkbox">
                  <input
                    type="checkbox"
                    name="transmission"
                    value="automatic"
                    checked={transmission.includes("automatic")}
                    onChange={handleTransmissionChange}
                  />
                  <span className="transmission-label">Dark</span>
                </label>
              </div>
              <div className="transmission-checkboxes">
                <label className="transmission-checkbox">
                  <input
                    type="checkbox"
                    name="transmission"
                    value="manual"
                    checked={transmission.includes("manual")}
                    onChange={handleTransmissionChange}
                  />
                  <span className="transmission-label">Pastels</span>
                </label>
              </div>
            </div>
            </div>
            </div>
            <div className="marketalign">
        {Array.isArray(daata) && daata.length > 0 ? (
          daata.map((saree) => (
            <div key={saree._id} className="car-card">
              <div>
                <img
                  className="car-image"
                  src={goldy}
                  onClick={() => descript(saree._id)}
                  alt="Pet"
                />
                <div className="favorite-icon">
                  {iswishListed[saree._id] ? (
                    <FaHeart
                      className="heart-icon"
                      onClick={() => handleFavoriteRemove(saree._id)}
                    />
                  ) : (
                    <AiOutlineHeart
                      className="heart-icon"
                      onClick={() => handleFavoriteClick(saree._id)}
                    />
                  )}
                            
                          </div>
                          {/* <div className="titpri"> */}
                          <div className="titleinfo">
                          <p className="car-title">{saree.fabric}</p>
                          <br/>
                          <p className="car-info">{saree.material}</p>
                          <br/>
                          </div>
                          <br/>
                          <div className="carlo">
                          <p className="car-location">
                            {saree.manufacturer}
                          </p>
                          </div>
                         
                          <div className="carpri">
                          <p className="car-priceee"> ₹{saree.price}</p>
                          </div>
                          
                          </div>
                          <br />
                        </div>
                      // </div>
                    ))
                  ) : (
                    <p>No pets available.</p>
                  )}

          
        
      </div>
      </div>

      
    </>
  );
};

export default MarketPlace;
