import React, { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './TopPicks.css';
import axios from "../url";
import goldy from "../vas.png";

const TopPicks = () => {
  const containerRef = useRef(null);
  const [daata, setDaata] = useState([]);
  const navigate = useNavigate(); 
  const descript = (id) => {
    navigate(`/viewproduct/${id}`);
  };

  

 

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
  useEffect(() => {
    const fetchData = async () => {
      try {
        const responsee = await axios.get("/allsarees");
        const allSarees = responsee.data.saree;
  
        const filteredPets = allSarees.filter((saree) => saree.imageUrl !== "");
  
        setDaata(filteredPets);
        console.log(filteredPets,"sdjfjdsfkjddanbsdafbdsj,fkjdsfkndas ")
      } catch (error) {
        console.log(error);
      }
    };
  
    fetchData();
  }, []);


  return (
    <section>
      <div className="top-picks-section">
        <h2>Top Picks</h2>
        <div className="top-picks-wrapper" ref={containerRef}>
          <div className="top-picks-container">
            {Array.isArray(daata) && daata.length > 0 ? (
              daata.map((image,index) => (
                <div className="card" key={image._id} alt={`Saree ${index+1}`} onClick={() => descript(image._id)}>
                  <img src={image.imageUrl} alt="Saree 1" />
                  <button className="piclbut">Add to cart</button>
                  <h3>{image.fabric}    {image.material}</h3>
                  <p>₹{image.price}</p>
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
