import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Verifier.css";
import Nav from "../components/Nav";

const Verifier = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("TODO");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
   <div>
      <Nav/>

      <br />
      <br />

      <div className="tabs">
        <button
          className={activeTab === "TODO" ? "active" : ""}
          onClick={() => handleTabChange("TODO")}
        >
          Pending
        </button>
        <button
          className={activeTab === "Verified" ? "active" : ""}
          onClick={() => handleTabChange("Verified")}
        >
          Verified Product
        </button>
      </div>

      {activeTab === "TODO" && (
        <div className="carrr-carrrd" onClick={() => navigate("/verify")}>
          <img
            className="carrr-image"
            src="main-banner-saree1.png"
            alt="carrr"
          />
          <div className="carrr-details">
            <h3 className="carrr-title">KANCHIPURAM SILK TISSUE BROCADE GOLD SAREE</h3>
            <p className="carrr-info">Some information about the saree</p>
            <p className="carrr-price">₹30,000</p>
            <div className="carrr-amount-line"></div>
            <br/>
            <div className="carrr-location">
              <button className="verifybuttton" onClick={() => navigate("/verify")}>
                Verify
              </button>
            </div>
          </div>
        </div>
      )}

      {activeTab === "Verified" && (
        <div className="verified-product">
          <h3>Verified Product</h3>
          {/* Add your content for verified products here */}
        </div>
      )}
      <br/>
      <br/>
      <br/>
      
    </div>
  );
};

export default Verifier;
