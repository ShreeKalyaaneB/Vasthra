import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../url.js";
import "./AddProduct.css";
import Nav from "../components/Nav";
// import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import NavSell from "../components/NavSell.js";


const AddProduct = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [sareename, setSareeName] = useState("");
  const [fabric, setFabric] = useState("");
  const [material, setMaterial] = useState("");
  const [price, setPrice] = useState("");
  const [colorfamily, setColor] = useState("");
  const [manufacturer, setManufacturerName] = useState("");
  const [collections, setCollection] = useState("");
  const [manufacturerLicense, setManufacturerLicense] = useState("");
  const [manufacturerphonenumber, setManufacturerPhoneNumber] = useState("");
  const [sareeImage, setSareeImage] = useState([]);
  const [ID, setId] = useState("");
  const [images, setImages] = useState([]);

  const handleNext = () => {
    setStep((prevStep) => prevStep + 1);
  };



 

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/addsarees',
        {
          fabric,material,price,colorfamily,collections,manufacturer,sareeImage
        },
        { withCredentials: true }
      );

      console.log(response.data);
      setId(response.data._id)
     
    } catch (error) {
      console.error(error);
      alert(error);
    }
  };
  const handleimageupload = async () => {
    try {
      const formData = new FormData();
      formData.append("_id", ID);
      formData.append("images", images[0]);
      console.log(formData);

      const responsee = await axios.post(`/uploadData/${ID}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          req: "Access-Control-Allow-Origin",
        },
        withCredentials: true,
      });

      const responseee = await axios.get(`/imageStatus/${ID}`);

      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });

      Toast.fire({
        icon: "success",
        title: "Car Registered",
        showCloseButton: true,
      });

      // navigate("/sidebar");
    } catch (error) {
      Swal.fire({
        icon: "error",
        text: "Please check the details ",
      });
    }
  };
  const handleNextAndSubmit = (e) => {
    e.preventDefault();
    handleSubmit(e);
    handleNext();
  };
  const handleUploadAndSubmit = (e) => {
    e.preventDefault();
    handleSubmit(e);
    handleImagesChange(e);
  };
  const handleImagesChange = (e) => {
    const selectedImages = Array.from(e.target.files);
    setImages(selectedImages);
  };

  const renderStepOne = () => (
    <div className="addproddd">
      <div className="addproductsection">
        {/* <div className="form-step">
          <h4 className="Sellitem-Placeholder">SareeName</h4>
          <input
            className="selliteminput"
            type="text"
            id="sareename"
            value={sareename}
            onChange={(e) => setSareeName(e.target.value)}
          />
        </div> */}


        <div className="form-step">
          <h4 className="Sellitem-Placeholder">Fabric</h4>
          <input
            className="selliteminput"
            type="text"
            id="fabric"
            value={fabric}
            onChange={(e) => setFabric(e.target.value)}
          />
        </div>
        <br/>
        
        


        <div className="form-step">
          <h4 className="Sellitem-Placeholder">Material</h4>
          <input
            className="selliteminput"
            type="text"
            id="material"
            value={material}
            onChange={(e) => setMaterial(e.target.value)}
          />
        </div>
        <br/>

        <div className="form-step">
          <h4 className="Sellitem-Placeholder">price</h4>
          <input
            className="selliteminput"
            type="number"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <br/>

        <div className="form-step">
          <h4 className="Sellitem-Placeholder">Color</h4>
          <input
            className="selliteminput"
            type="text"
            id="color"
            value={colorfamily}
            onChange={(e) => setColor(e.target.value)}
          />
        </div>
        <br/>

        <div className="form-step">
          <h4 className="Sellitem-Placeholder">Collection</h4>
          <select
            className="selliteminputdropdown"
            type="text"
            id="collection"
            value={collections}
            onChange={(e) => setCollection(e.target.value)}
          > <option value="">Select</option>
          <option value="Bridal">Bridal</option>
          <option value="Pastels">Pastels</option>
          <option value="Kalamkari">Kalamkari</option>
          <option value="Simple">Simple</option>
          <option value="Vintage">Vintage</option>
        </select>
        </div>
        <br/>

        <div className="form-step">
          <h4 className="Sellitem-Placeholder">Manufacturer Name</h4>
          <input
            className="selliteminput"
            type="text"
            id="manufacturername"
            value={manufacturer}
            onChange={(e) => setManufacturerName(e.target.value)}
          />
        </div>
        <br/>

        {/* <div className="form-step">
          <h4 className="Sellitem-Placeholder">Manufacturer PhoneNumber</h4>
          <input
            className="selliteminput"
            type="number"
            id="brand"
            value={manufacturerphonenumber}
            onChange={(e) => setManufacturerPhoneNumber(e.target.value)}
          />
        </div> */}
        </div>
        <br/>

        <div className="selsum">
        <button
          type="button"
          className="Nxtbutton"
          onClick={handleNextAndSubmit}
        >
          <span>Next</span>
          <svg
            height="16"
            width="16"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            viewBox="0 0 1024 1024"
          >
            <path d="M149.308584 494.630501c0-11.2973 9.168824-20.466124 20.466124-20.466124l604.773963 0-188.083679-188.083679c-7.992021-7.992021-7.992021-20.947078 0-28.939099 3.990894-4.001127 9.240455-5.996574 14.46955-5.996574 5.239328 0 10.478655 1.995447 14.479783 5.996574l223.00912 223.00912c3.837398 3.837398 5.996574 9.046027 5.996574 14.46955 0 5.433756-2.159176 10.632151-5.996574 14.46955l-223.019353 223.029586c-7.992021 7.992021-20.957311 7.992021-28.949332 0-7.992021-8.002254-7.992021-20.957311 0-28.949332l188.073446-188.073446-604.753497 0C158.477408 515.096625 149.308584 505.938034 149.308584 494.630501z"></path>
          </svg>
        </button>


        



        

        </div>
        </div>
  );
        

  const renderStepTwo = () => (
    <div className="addproddduct">
      <div className="addproductsections">
        <div className="alirest">
        <div className="form-step">
          <h4 className="Sellitem-Placeholder"> Saree Image</h4>
          <input
            className="selliteminputimage"
            type="file"
            id="images"
            multiple
            onChange={handleImagesChange}
          />
        </div>
        <div className="presum">
        <div className="button-ccoontainer">
          {/* <button
            type="button"
            className="Prebutton"
            onClick={() => setStep(step - 1)}
          >
            <svg
              height="16"
              width="16"
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              viewBox="0 0 1024 1024"
            >
              <path d="M874.690416 495.52477c0 11.2973-9.168824 20.466124-20.466124 20.466124l-604.773963 0 188.083679 188.083679c7.992021 7.992021 7.992021 20.947078 0 28.939099-4.001127 3.990894-9.240455 5.996574-14.46955 5.996574-5.239328 0-10.478655-1.995447-14.479783-5.996574l-223.00912-223.00912c-3.837398-3.837398-5.996574-9.046027-5.996574-14.46955 0-5.433756 2.159176-10.632151 5.996574-14.46955l223.019353-223.029586c7.992021-7.992021 20.957311-7.992021 28.949332 0 7.992021 8.002254 7.992021 20.957311 0 28.949332l-188.073446 188.073446 604.753497 0C865.521592 475.058646 874.690416 484.217237 874.690416 495.52477z"></path>
            </svg>
            <span>Previous</span>
          </button> */}
          <div className="subbbbu">
            <button className="sub-button" type="submit" onClick={handleimageupload}>
              Submit
            </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
 

  return (
    <div>
      <NavSell />
      <br />
      <br />

      <br />
      
      {/* <div className="Backimg"> */}
      <div className="prohe">
        <h3>Enter the Saree Details</h3>
      </div>
      <br />
      <br />
      <br />
      <br />
      <form className="sell-item-form" >
        {step === 1 && renderStepOne()}
        {step === 2 && renderStepTwo()}
      </form>
    {/* </div> */}
    </div>
  );
}


 export default AddProduct;
