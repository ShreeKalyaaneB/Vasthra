import React, { useEffect, useState } from "react";
import "./ViewProduct";
import { AiOutlineEnvironment, AiOutlineHeart } from "react-icons/ai";
// import qr from "../../Images/paw.png";
// import NavBar from "../../Reusables/NavBar/NavBar";
// import SellerBar from "../../Reusables/SellerBar/SellerBar";
import goldy from "../vas.png";
import axios from "../url";
import { useParams } from "react-router-dom";

const SellerDescription = (props) => {
  const [daata, setDaata] = useState([]);

  const addd = () => {
    console.log(daata);
  };

  const { _id } = useParams();
  console.log(_id, "asadaasdasd");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/description/${_id}`);
        console.log(response.data.user);
        setDaata(response.data.user);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
        {/* <SellerBar/> */}
      <div className="attai">
        <img className="monster" style={{marginLeft:"250px", marginRight:"100px"}} src={daata.imageUrl} alt="" />

        <div className="detailsbox" style={{marginTop:"170px"}}>
          <div className="details show">
            <div className="det">
              <div className="category">
                <span className="category-label"> Saree Name:</span>
                <span className="category-value">{daata.fabric}</span>
              </div>
              <div className="category">
                <span className="category-label">Material:</span>
                <span className="category-value">{daata.material}</span>
              </div>
              <div className="category">
                <span className="category-label">Price:</span>
                <span className="category-value">₹{daata.price}</span>
              </div>
              <div className="category">
                <span className="category-label">Color:</span>
                <span className="category-value">{daata.colorfamily}</span>
              </div>
              <div className="category">
                <span className="category-label">Manufacturer:</span>
                <span className="category-value">{daata.manufacturer}</span>
              </div>
           
              {/* <div className="category">
                <span className="category-label">Price:</span>
                <span className="category-value">{daata.price}</span>
              </div>
              <div className="category">
                <span className="category-label">Location:</span>
                <span className="category-value">{daata.location}</span>
              </div> */}
              <div className="category">
                <span className="category-label">Id:</span>
                <span className="category-value">{daata && daata._id && daata._id.slice(-5)}</span>
              </div>
              <div className="category">
                <span className="category-label">Verification Status:</span>
                <span className="category-value">{daata.verifyStatus}</span>
              </div>
            </div>
          </div>
        </div>
        {/* <img className="pathukaapu" src={qr} /> */}
      </div>
    </div>
  );
};

export default SellerDescription;
