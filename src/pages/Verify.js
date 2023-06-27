import React, { useState, useEffect } from "react";
import "./Verify.css";

import Nav from "../components/Nav";

const Verify = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleOptionClick = (option, index) => {
    setSelectedOption({ option, index });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, []);
  return (
    <div>
      <Nav />
      {/* {loading ? (
        <div className="loader">
          <img style={{ marginTop: "200px" }} src={""} alt="Loader" />
        </div>
      ) : (
        <> */}

      <div className="cardverify">
        <h2 className="card-heading">Verification Process</h2>
        <br />
        <div className="card-options">
          <button
            className={`option-button ${
              selectedOption && selectedOption.index === 0 ? "selected" : ""
            }`}
            onClick={() => handleOptionClick("details", 0)}
          >
            Details
          </button>
          <button
            className={`option-button ${
              selectedOption && selectedOption.index === 1 ? "selected" : ""
            }`}
            onClick={() => handleOptionClick("certificates", 1)}
          >
            Proof
          </button>
          <button
            className={`option-button ${
              selectedOption && selectedOption.index === 2 ? "selected" : ""
            }`}
            onClick={() => handleOptionClick("description", 2)}
          >
            Description
          </button>
        </div>
        {selectedOption && (
          <div className="details-container">
            {selectedOption.option === "details" && (
              <div className="details show">
                <div className="det">
                  <div className="category">
                    <span className="category-label">Manufacturer's Name:</span>
                    <span className="category-value">John Doe</span>
                  </div>
                  <div className="category">
                    <span className="category-label">Mobile Number:</span>
                    <span className="category-value">123-456-7890</span>
                  </div>
                  <div className="category">
                    <span className="category-label">Fabric:</span>
                    <span className="category-value">Kanchipuram</span>
                  </div>
                  <div className="category">
                    <span className="category-label">Material:</span>
                    <span className="category-value">Organza</span>
                  </div>
                  <div className="category">
                    <span className="category-label">Color:</span>
                    <span className="category-value">Pink</span>
                  </div>
                  <div className="category">
                    <span className="category-label">Price:</span>
                    <span className="category-value">30,000</span>
                  </div>
                </div>
              </div>
            )}
            {selectedOption.option === "certificates" && (
              <div className="certificatesshow">
                <div className="det">
                  <div className="category">
                    <span className="category-labell">
                      Certificate 1:
                      <button className="option1-button">View</button>
                    </span>
                  </div>
                  <div className="category">
                    <span className="category-labell">
                      Certificate 2:
                      <button className="option1-button">View</button>
                    </span>
                  </div>
                  <div className="category">
                    <span className="category-labell">
                      Certificate 3:
                      <button className="option1-button">View</button>
                    </span>
                  </div>
                </div>
              </div>
            )}

            {selectedOption.option === "description" && (
              <div className="description show">
                <div className="det">
                  <form>
                    {/* <div className="form-group">
                      <label htmlFor="activeness">PickUp:</label>
                      <select id="activeness" name="activeness">
                        <option value="high">High</option>
                        <option value="moderate">Moderate</option>
                        <option value="low">Low</option>
                      </select>
                    </div> */}
                    <div className="form-group">
                      <label htmlFor="colour">Colour:</label>
                      <input type="text" id="colour" name="colour" />
                    </div>
                     <div className="form-group">
                      <label htmlFor="activeness">Zari thread:</label>
                      <select id="activeness" name="activeness">
                        <option value="high">Silver</option>
                        <option value="moderate">Gold</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="gender">Touch Test:</label>
                      <div className="radio-group">
                        <label>
                          <input type="radio" name="gender" value="male" /> Pass
                        </label>
                        <label>
                          <input
                            style={{ marginLeft: "0px" }}
                            type="radio"
                            name="gender"
                            value="female"
                          />{" "}
                          Fail
                        </label>
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="diseaseTolerance">
                        HallMark Sign 
                      </label>
                      <div className="radio-group">
                        <label>
                          <input
                            style={{ backgroundColor: "white" }}
                            type="radio"
                            name="diseaseTolerance"
                            value="yes"
                          />{" "}
                          Yes
                        </label>
                        <label>
                          <input
                            type="radio"
                            name="diseaseTolerance"
                            value="no"
                          />{" "}
                          No
                        </label>
                      </div>
                    </div>
                    {/* <div className="form-group">
                      <label htmlFor="breed">Breed:</label>
                      <input type="text" id="breed" name="breed" />
                    </div> */}
                    <br />
                    <div
                      style={{
                        marginLeft: "80px",
                      }}
                    >
                      <button className="option2-button" type="submit">
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
      {/* </> */}

      <br />
      <br />
    </div>
  );
};

export default Verify;
