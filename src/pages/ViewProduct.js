import React,{useState,useEffect} from "react";
import "./ViewProduct.css";
import { AiOutlineEnvironment, AiOutlineHeart } from "react-icons/ai";
import QRCode from "qrcode.react";
import Nav from "../components/Nav";
import axios from "../url.js";
import { useParams, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import jwt_decode from "jwt-decode";
import Swal from "sweetalert2"
import Notverified from "./Notverified.png"

const ViewProduct = () => {
const navigate = useNavigate();
const [daata,setDaata] = useState([]);
const [isAddedtocart, setAddtoCart] = useState({});
const [status, setStatus] = useState("");
const [showQRCodeDetails, setShowQRCodeDetails] = useState(false);
const [qrCodeValue, setQRCodeValue] = useState("");
const [verifyStatus, setVerifyStatus] = useState("");
const [isWishListed, setWishList] = useState(false); // Changed the initial state to false
const [cookies, setCookie, removeCookie] = useCookies([
  "user_token",
]);
const addd=()=>{
  console.log(daata)
}

const tokenn = jwt_decode(cookies.user_token);

// const handleBuyNow = () => {
//   // Check if the cookie is present
//   const cookie = document.cookie;
//   const hasCookie = cookie.includes("your_cookie_name_here");
  
//   if (tokenn.role === "buyer") {
//     // Navigate to "/buypet" page
//     navigate("/buypet");
//   } else {
//     // Display SweetAlert2 popup and navigate to "/login" page after 4 seconds
//     Swal.fire({
//       title: "Please Login",
//       text: "You need to login to continue",
//       icon: "warning",
//       showConfirmButton: false,
//       timer: 2000,
//     }).then(() => {
//       navigate("/login");
//     });
//   }
// };

const { _id } = useParams();
const stringId = String(_id); 
console.log(_id,"asadaasdasd");

const addtowish = async () => {
  try {
    console.log(stringId);
    const response = await axios.get(`/wishlist/${stringId}`);
    console.log(response.data.wishlist);
    setWishList(true); 
  } catch (error) {
    console.error(error);
  }
};
const handleBuyNow = async () => {
  // Check if the cookie is present
  try{
  const tokenn = jwt_decode(cookies.user_token);

  if (tokenn.role === "buyer") {
    try {
      console.log(_id);
      const response = await axios.get(`/addtocart/${_id}`);
      console.log(response.data.cart);

      setAddtoCart(response.data.cart);
      navigate("/cart");
    } catch (error) {
      console.error(error);
    }
  } else {
    // Display SweetAlert2 popup and navigate to "/login" page after 4 seconds
    Swal.fire({
      title: "Please Login",
      text: "You need to login to buy ",
      icon: "warning",
      showConfirmButton: false,
      timer: 2000,
    }).then(() => {
      navigate("/login");
    });
  }
}catch(error){
  Swal.fire({
    title: "Please Login",
    text: "You need to login to buy ",
    icon: "warning",
    showConfirmButton: false,
    timer: 2000,
  }).then(() => {
    navigate("/login");
  });  }
};

useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await axios.get(`/description/${_id}`);
      console.log(response.data.user);
      setDaata(response.data.user);
      setVerifyStatus(response.data.user.verifyStatus); // Set the verifyStatus state based on the fetched data
      
    } catch (error) {
      console.log(error);
    }
  };

  fetchData();
}, []);
const handleQRCodeClick = () => {
  // setShowQRCodeDetails(true);
  const qrValue = `http://localhost:8080/trace/${_id}`; // Replace with your trace page URL
      window.open(qrValue, "_blank");
};

const handleCloseQRCodeDetails = () => {
  setShowQRCodeDetails(false);
};

const generateQRCode = () => {
  if (daata.verifyStatus === "verified") {
    const qrValue = `http://localhost:8080/trace/${_id}`; // Replace with your trace page URL
    return (
      <QRCode
        value={qrValue}
        onClick={handleQRCodeClick}
        style={{ cursor: "pointer" }}
      />
    );
  }
  return null;
};
  return (
    <div>
      <Nav />
      <div className="attai">
        {/* <div> */}
        <div className="monimg">
        <img
          className="monster"
          src={daata.imageUrl}
          alt=""
        />
        </div>
        {/* </div> */}

        <div className="detailsbox">
          <h4 className="tncs">Saree : {daata.fabric}</h4>

          <div className="factory">
            <p>Material : {daata.material} </p>
           
          </div>
          <div className="factory">
          <p>Color : {daata.colorfamily}</p>
          </div>
          <div className="idam">
            <div className="land">
              <AiOutlineEnvironment className="signified" />
              <p>Manufacturer : {daata.manufacturer}</p>
            </div>
            <p className="kaasu">Price : ₹{daata.price}</p>
            {/* <p className="toomuch">Scan the QR:</p> */}
          </div>

          <p className="toomuch">Scan the QR:</p>
          <div className="pathukaapu" onClick={() => console.log(qrCodeValue)}>
{verifyStatus === "verified" ? (
generateQRCode()
) : (
    <img
    className="notverifiedqr"
    src={Notverified}
    alt="Not verified"
/>
  )}
</div>
       
          <div className="diffBB">
            <button className="purchase" onClick={handleBuyNow}>ADD TO CART</button>

            {!isWishListed ? (
                  <button className="valthukal" onClick={addtowish}>
                    <AiOutlineHeart />
                    Add to Wishlist
                  </button>
                ) : (
                  <button
                    className="valthukal"
                    style={{ backgroundColor: "grey" }}
                    disabled
                  >
                    Added to Wishlist
                  </button>
                )}

            <button className="vaangu" onClick={handleBuyNow}>BUY NOW</button>
          </div>
          {/* <div className="tommy">
            <p className="whole">Saree Overview</p>
            <div className="tharavu">
              <div className="romeio">
                <div className="kaaval">
                  <span className="lllbal">Make year:</span>
                </div>
                <div className="kaaval">
                  <span className="vvalue">Mar2019</span>
                </div>
              </div>
              <div className="romeio">
                <div className="kaaval">
                  <span className="lllbal">Registration year:</span>
                </div>
                <div className="kaaval">
                  <span className="vvalue">Feb2019</span>
                </div>
              </div>
                         </div>
          </div> */}
        </div>
        {/* <div className="qr-check-button">
            <button onClick={() => console.log(qrCodeValue)}>
              Check QR Value
            </button>
          </div> */}
        {/* <img className="pathukaapu" src={qr} /> */}
      </div>
    </div>
  );
};

export default ViewProduct;