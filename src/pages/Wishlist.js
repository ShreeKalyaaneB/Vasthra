import React, {useState, useEffect} from "react";
import "./Wishlist.css";
import axios from "../url"
import { Link, useMatch, useNavigate} from 'react-router-dom'
import banner from "../banner.png"

function Wishlist() {
    const [wishlist, setWishlist] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {

        const fetchWishlist = async () => {
    
          try {
    
            const response = await axios.get("/allsarees", { withCredentials: true });
    
            const allsarees = response.data?.saree ?? [];
    
            const filteredWishlist = allsarees.filter((saree) => saree.isWishlisted === "wishlisted");
    
            setWishlist(filteredWishlist);
    
            console.log("wishlist", filteredWishlist);
    
          } catch (error) {
    
            console.error(error);
    
          }
    
        };
    
    
    
    
        fetchWishlist();
    
      }, []);
  return (
    <div className="Wishlist">
      <div className="Wishlist1">
        <h3 style={{ marginLeft: "160px", color: "#00154D" }}>Wishlist</h3>
        <hr className="line" />

        <div className="Wishlist2">
        {wishlist.length > 0 ? (

wishlist.map((saree) => (

  <div className="Wishcard" key={saree._id}>

    <div className="Wishcard1">

      <img className="wishimg" src={saree.imageUrl} alt={saree.name} />

      <div className="Wishttext">

        <h3 className="wishtext1">{saree.material}</h3>

        <h4 className="wishtext2">{saree.fabric}</h4>

      </div>

      <div className="WishTEXT">

        <h4 className="wishtext3">₹ {saree.price}</h4>

        <Link  to={`/description/${saree._id}`}>

<button className="viewbutwish" >View</button>

</Link>

       

     

      </div>

    </div>

  </div>

))

) : (

<p>Your wishlist is empty.</p>

)}
</div>
</div>
    </div>
  );
}

export default Wishlist;
