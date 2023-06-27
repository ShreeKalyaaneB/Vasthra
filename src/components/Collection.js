import React, { useState } from "react";
import "./Collection.css";
import { useNavigate } from "react-router-dom";

function Collection() {
  const [focusedIndex, setFocusedIndex] = useState(null);

  const handleHover = (index) => {
    setFocusedIndex(index);
  };

  const navigate = useNavigate();
  const handleViewAll=()=>{
    navigate('/market')
  }

  return (
    <div className="top-picks-section">
      <h2>Collections</h2>
      <div className="Collectionpicks">
        <div className="grid-container">
          <div
            className={`card-1 large-card ${focusedIndex === 0 ? "focused" : ""}`}
            onMouseEnter={() => handleHover(0)}
            onMouseLeave={() => handleHover(null)}
            style={{cursor:"pointer"}}
          >
           
            <img className="imglargecard" src="bridal.jpg" alt="SareeCol1" />
            <h3 className="Sarecol">Bridal Kanchipuram</h3>
          </div>
          <div
            className={`card-1 small-card ${focusedIndex === 1 ? "focused" : ""}`}
            onMouseEnter={() => handleHover(1)}
            onMouseLeave={() => handleHover(null)}
            style={{cursor:"pointer"}}
          >
            <img
              className="imgsmallcard"
              src="vintage.jpg"
              alt="SareeCol1"
            />
            <h3 className="Sarecol">Vitange Kanchipuram</h3>
          </div>
        </div>
        <br />
        <div className="grid-container1">
          <div
            className={`card-1 small-card1 ${focusedIndex === 2 ? "focused" : ""}`}
            onMouseEnter={() => handleHover(2)}
            onMouseLeave={() => handleHover(null)}
            style={{cursor:"pointer"}}
          >
            <img
              className="imgsmallcard"
              src="pastel.jpg"
              alt="SareeCol1"
            />
             <h3 className="Sarecol">Pastels</h3>
          </div>
          <div
            className={`card-1 small-card2 ${focusedIndex === 3 ? "focused" : ""}`}
            onMouseEnter={() => handleHover(3)}
            onMouseLeave={() => handleHover(null)}
            style={{cursor:"pointer"}}
          >
            <img
              className="imgsmallcard"
              src="simple.jpg"
              alt="SareeCol1"
            />
             <h3 className="Sarecol">Simple Kanchipuram</h3>
          </div>
          <div
            className={`card-1 medium-card1 ${focusedIndex === 4 ? "focused" : ""}`}
            onMouseEnter={() => handleHover(4)}
            onMouseLeave={() => handleHover(null)}
            style={{cursor:"pointer"}}
          >
            <img
              className="imgsmallcard"
              src="kalamkari.jpeg"
              alt="SareeCol1"
            />
             <h3 className="Sarecol">Kalamkari</h3>
          </div>
        </div>
      </div>
      <br/>
      <br/>

      <button className="viewallbut" onClick={handleViewAll}>
    <p>View All</p>
    <svg stroke-width="4" stroke="currentColor" viewBox="0 0 24 24" fill="none" class="h-6 w-6" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 5l7 7m0 0l-7 7m7-7H3" stroke-linejoin="round" stroke-linecap="round"></path>
    </svg>
</button>
    </div>
  );
}

export default Collection;
