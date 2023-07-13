import React, { useState, useEffect } from "react";
import "./Shopcart.css";
import NavBar from "../components/Nav";
import axios from "../url";
// import goldy from "../../public/vas.png";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [cartTotals, setCartTotals] = useState({
    subtotal: "0.00",
    tax: "0.00",
    shipping: "0.00",
    total: "0.00",
  });

  const removeItem = async (petId) => {
    try {
      console.log(petId);
      const response = await axios.get(`/removetocart/${petId}`);
      console.log(response.data);
  
      const updatedCartItems = cartItems.filter((item) => item._id !== petId);
      setCartItems(updatedCartItems);
    } catch (error) {
      console.error(error);
    }
  };
  

  const updateQuantity = (itemId, quantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, quantity: quantity } : item
      )
    );
  };

  useEffect(() => {
    const fetchCartlist = async () => {
      try {
        const response = await axios.get("/allsarees", { withCredentials: true });
        const allsarees = response.data?.saree ?? [];
        const filteredCartlist = allsarees.filter(
          (saree) => saree.isAddedtocart === "added"
        );
        const updatedCartItems = filteredCartlist.map((item) => ({
          ...item,
          price: parseFloat(item.price), // Convert price to a number
        }));
        setCartItems(updatedCartItems);
        console.log("cartlist", updatedCartItems);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCartlist();
  }, []);

  useEffect(() => {
    const recalculateCart = () => {
      if (!Array.isArray(cartItems) || cartItems.length === 0) {
        // Cart is empty, return default values
        return {
          subtotal: "0.00",
          tax: "0.00",
          shipping: "0.00",
          total: "0.00",
        };
      }
  
      // Calculate totals
      let subtotal = 0;
      cartItems.forEach((item) => {
        subtotal += item.price;
        item.quantity = 1;
      });
      const taxRate = 0.05;
      const shippingRate = 15.0;
      const tax = subtotal * taxRate;
      const shipping = subtotal > 0 ? shippingRate : 0;
      const total = subtotal + tax + shipping;
  
      return {
        subtotal: subtotal.toFixed(2),
        tax: tax.toFixed(2),
        shipping: shipping.toFixed(2),
        total: total.toFixed(2),
      };
    };
  
    setCartTotals(recalculateCart());
  }, [cartItems]);
  

  return (
    <div>
      <NavBar />
      <br />
      <br />
      <br />
      <br />

      <div className="shopping-cart" style={{marginTop:"40px"}}>
        <div className="column-labels">
          <label className="product-image">Image</label>
          <label className="product-details">Product</label>
          <label className="product-price">Price</label>
          <label className="product-quantity">Quantity</label>
          <label className="product-removal">Remove</label>
          <label className="product-line-price">Total</label>
        </div>

        {Array.isArray(cartItems) && cartItems.length > 0 ? (
          cartItems.map((item) => (
            <div className="product" key={item.id}>
              <div className="product-image">
                <img src={item.imageUrl} alt="Product" />
              </div>
              <div className="product-details">
                <div className="product-title">{item.fabric}</div>
                <p className="product-description">{item.material}</p>
              </div>
              <div className="product-price">{item.price.toFixed(2)}</div>
              <div className="product-quantity">
              <input
                type="number"
                value={item.quantity}
                min="1"
                defaultValue={"1"}
                style={{marginTop:"15px"}}
                onChange={(e) =>
                  updateQuantity(item.id, parseInt(e.target.value))
                }
              />
            </div>
              <div className="product-removal">
                <button
                  className="remove-product"
                  onClick={() => removeItem(item._id)}
                >
                  Remove
                </button>
              </div>
              <div className="product-line-price">
                {(item.price * item.quantity).toFixed(2)}
              </div>
            </div>
          ))
        ) : (
          <div className="empty-cart-message">Your cart is empty.</div>
        )}

        <div className="totals">
          <div className="totals-item">
            <label>Subtotal</label>
            <div className="totals-value" id="cart-subtotal">
              {cartTotals.subtotal}
            </div>
          </div>
          <div className="totals-item">
            <label>Tax (5%)</label>
            <div className="totals-value" id="cart-tax">
              {cartTotals.tax}
            </div>
          </div>
          <div className="totals-item">
            <label>Shipping</label>
            <div className="totals-value" id="cart-shipping">
              {cartTotals.shipping}
            </div>
          </div>
          <div className="totals-item totals-item-total">
            <label>Grand Total</label>
            <div className="totals-value" id="cart-total">
              {cartTotals.total}
            </div>
          </div>
        </div>

        <button className="checkout">Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
