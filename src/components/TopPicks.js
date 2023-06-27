import React, { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './TopPicks.css';
import axios from "../url";
import goldy from "../vas.png";

const TopPicks = () => {
  const navigate = useNavigate(); // Declare navigate here

  const [daata, setDaata] = useState([]);

  const descript = (id) => {
    navigate(`/description/${id}`);
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
  }, []);

  const containerRef = useRef(null);

  const scrollRight = () => {
    containerRef.current.scrollTo({
      left: containerRef.current.scrollLeft + containerRef.current.offsetWidth,
      behavior: 'smooth',
    });
  };

  const scrollLeft = () => {
    containerRef.current.scrollTo({
      left: containerRef.current.scrollLeft - containerRef.current.offsetWidth,
      behavior: 'smooth',
    });
  };

  return (
    <section>
      <div className="top-picks-section">
        <h2>Top Picks</h2>
        <div className="top-picks-wrapper" ref={containerRef}>
          <div className="top-picks-container">
            {Array.isArray(daata) && daata.length > 0 ? (
              daata.map((saree) => (
                <div className="card" key={saree._id} onClick={() => descript(saree._id)}>
                  <img src={goldy} alt="Saree 1" />
                  <button className="piclbut">Add to cart</button>
                  <h3>{saree.fabric}.{saree.material}</h3>
                  <p>₹{saree.price}</p>
                </div>
              ))
            ) : (
              <p>not available</p>
            )}
          </div>
        </div>

        <div className="carousel-arrows">
          <span className="arrow-left" onClick={scrollLeft}>
            &#8249;
          </span>
          <span className="arrow-right" onClick={scrollRight}>
            &#8250;
          </span>
        </div>
      </div>
    </section>
  );
};

export default TopPicks;
