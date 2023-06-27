import React, { useState,useEffect } from "react";
import "./Sidebar.css";
import axios from "../url.js";
import { useNavigate } from "react-router";
import Nav from "../components/Nav";
import goldy from "../main-banner-saree1.png";

// import TopNav from "../Topbar/TopNav";
// import Footer from "../Footer/Footer";
// import "bourbon/bourbon";

function Sidebar() {
  const [selectedMenu, setSelectedMenu] = useState("Orders");
  const navigate = useNavigate();
  const [daata, setDaata] = useState([]);
  const descript = (id) => {
    navigate(`/description/${id}`);
  };
 

  const handleMenuClick = (menu) => {
    setSelectedMenu(menu);
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

    if (selectedMenu === "Collection") {
      fetchData();
    }
  }, [selectedMenu]);

  return (
    <div>
      {/* <TopNav /> */}
      <Nav/>
      <br/>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div
          className="sidebar-container"
          style={{
            width: "21%",
            height: "100vh",
            // marginTop:"8px"
          }}
        >
          <div className="app">
            <aside className="sidebar">
              {/* <header></header> */}
              <nav className="sidebar-nav">
                <h4 className="Dashhead">Dashboard</h4>
                <br />
                <br />
                <ul>
                  <li>
                    <a href="#" onClick={() => handleMenuClick("Orders")}>
                      <i className="ion-bag"></i> <span>Orders</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" onClick={() => handleMenuClick("Product")}>
                      <i className="ion-ios-settings"></i> <span>Product</span>
                    </a>
                  </li>
                  {/* <li>
                    <a href="#" onClick={() => handleMenuClick("Categories")}>
                      <i className="ion-ios-briefcase-outline"></i>{" "}
                      <span>Categories</span>
                    </a>
                  </li> */}
                  <li>
                    <a href="#" onClick={() => handleMenuClick("Collection")}>
                      <i className="ion-ios-analytics-outline"></i>{" "}
                      <span>Collection</span>
                    </a>
                  </li>
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />

                  <li>
                    <a href="#" onClick={() => navigate("/")}>
                      <i
                        className="ion-ios-analytics-outline"
                        // style={{ display: "flex", }}
                      ></i>{" "}
                      <span style={{ color: "red" }}>Logout</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </aside>
          </div>
        </div>
        <div
          style={{
            width: "79%",
            height: "100vh",
            marginTop:"6px",
            backgroundColor: "RGB(243, 244, 245)",

            // position: "fixed",
          }}
        >
          <div className="dashorder">
            {/* <header></header> */}
            {selectedMenu === "Orders" && (
              <div>
                <p className="innerhead">Orders</p>
                <p className="innerorder">You haven't received any orders.</p>
              </div>
            )}
            {selectedMenu === "Product" && (
              <div>
                <p className="innerhead">Products</p>
                <p className="innerorder">
                  Add the product that you would like to sell.
                </p>
                <button
                  className="addpro"
                  onClick={() => navigate("/addproduct")}
                >
                  Add Product
                </button>
              </div>
            )}
            {selectedMenu === "Categories" && (
              <div>
                <p className="innerhead">Categories</p>
                <p className="innerorder">
                  Create Categories to group your product.
                </p>
                <button className="addpro">Add Categories</button>
              </div>
            )}
            {selectedMenu === "Collection" && (
              <div className="pettt-card">
              {Array.isArray(daata) && daata.length > 0 ? (
                daata.map((saree) => (
                  <div
                    key={saree._id}
                    className="carr-card"
                    onClick={() => descript(saree._id)}
                  >
                    <div>
                      <img
                        className="car-image"
                        src={goldy}
                        alt="Saree"
                      />

                      <p className="car-title">{saree.fabric}</p>
                      <p className="car-info">{saree.material}</p>
                      <p className="car-location">{saree.manufacturer}</p>
                      <p className="car-price"> ₹{saree.price}</p>
                      <br />
                    </div>
                  </div>
                ))
              ) : (
                <p>No Sarees available.</p>
              )}
            </div>
            )}
          </div>
        </div>
      </div>
      {/* <Footer /> */}
      
    </div>
  );
}

export default Sidebar;
