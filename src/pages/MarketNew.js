import React, { useState, useEffect } from "react";
import "./MarketNew.css";
import { Range } from "react-range";
import axios from "../url.js";
import goldy from "../vas.png";
import check from "../../src/check.png"

import {
  AiOutlineSearch,
  AiOutlineHeart,
  AiOutlineEnvironment,
} from "react-icons/ai";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { FaHeart } from "react-icons/fa";

const MarketNew=()=>{
    const [iswishListed, setwishList] = useState(false);
  const [daata, setDaata] = useState([]);
  const [petsId, setPetsId] = useState([]);
  const [daaata, setDaaata] = useState([])
  const navigate = useNavigate();
  const descript=(id) =>{
    navigate(`/viewproduct/${id}`)
  }
  const [priceRange, setPriceRange] = useState(0);

  const handlePriceChange = (event) => {
    setPriceRange(event.target.value);
  };

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
        const sareeID = response.data.saree.map((saree) => saree._id);
        setPetsId(sareeID);
       
        try{
          const responsee = await axios.get(`/image/${sareeID}`);
          const updatedDaata = daata.map((saree) => ({
            ...saree,
            imageUrl:
              responsee.data.find((data) => data._id === saree._id)?.imageUrl || null,
          }));
          setDaaata(updatedDaata);
        }catch (error) {
          console.log(error);
        }
        
      } catch (error) {
        console.log(error);
      }
    };
    
    fetchData();
  },[]);
  useEffect(()=>{
    const storedWishList = localStorage.getItem("wishList");
    if (storedWishList) {
      const parsedWishList = JSON.parse(storedWishList);
      setwishList(parsedWishList);
    }
}, []); 
  const handleViewProduct=()=>{
    navigate('/viewproduct')
  }
    return (
        <div>
          <Nav />
          <div className="marketnew-container">
            
            <aside className="marketnew-sidebar">
              <h2>Filters</h2>
              <div className="marketnew-filter">
                <h3>Fabric</h3>
                <ul>
                  <li>
                    <input type="checkbox" id="fabric-cotton" />
                    <label htmlFor="fabric-cotton">Cotton</label>
                  </li>
                  <li>
                    <input type="checkbox" id="fabric-silk" />
                    <label htmlFor="fabric-silk">Silk</label>
                  </li>
                  <li>
                    <input type="checkbox" id="fabric-silk" />
                    <label htmlFor="fabric-silk">Tissue</label>
                  </li>
                  <li>
                    <input type="checkbox" id="fabric-silk" />
                    <label htmlFor="fabric-silk">Organza</label>
                  </li>
                  <li>
                    <input type="checkbox" id="fabric-silk" />
                    <label htmlFor="fabric-silk">Georgette</label>
                  </li>
                  {/* Add more fabric options */}
                </ul>
              </div>
              <div className="marketnew-filter">
                <h3>Color</h3>
                <ul>
                  <li>
                    <input type="checkbox" id="color-red" />
                    <label htmlFor="color-red">Red</label>
                  </li>
                  <li>
                    <input type="checkbox" id="color-blue" />
                    <label htmlFor="color-blue">Blue</label>
                  </li>
                  <li>
                    <input type="checkbox" id="color-blue" />
                    <label htmlFor="color-blue">Yellow</label>
                  </li>
                  <li>
                    <input type="checkbox" id="color-blue" />
                    <label htmlFor="color-blue">Pink</label>
                  </li>
                  <li>
                    <input type="checkbox" id="color-blue" />
                    <label htmlFor="color-blue">Green</label>
                  </li>
                  {/* Add more color options */}
                </ul>
              </div>
              <div className="marketnew-filter">
        <h3>Price Range</h3>
        <div className="marketnewrange-slider">
        <input
                type="range"
                min="3000"
                max="300000"
                step="10"
                value={priceRange}
                onChange={handlePriceChange}
              />
          <span className="marketnewrange-value">₹{priceRange}</span>
        </div>
      </div>
            </aside>
           
            <div className="marketnew-content">
              <h1>Sarees</h1>
              <div className="marketnewsaree-grid">
              {Array.isArray(daata)&& daata.length>0?(
                daata.map((saree)=>(
                    <div key={saree._id} className="marketnewsaree-card">
                        <img src={saree.imageUrl}
                        onClick={() => descript(saree._id)}
                        alt="Saree" />
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
                          {saree.verifyStatus === "verified" && (

<img src={check} style={{width:"50px", height:"50px"}} className="check-icon" alt="Check" />

)}
                      <h3>{saree.material} {''}{''}{saree.fabric} {''}{''}{saree.colorfamily} saree</h3>
                  {/* <p>{saree.material}</p> */}
                  {/* <p>{saree.colorfamily}</p> */}
                  <p>₹{saree.price}</p>
                  </div>  
                ))
              ):(
                <p>No sarees available</p>
              )
              }
               </div>
            </div>
          </div>
          <br />
          <br />
          <Footer />
        </div>
      );
}
export default MarketNew