import React, { useState } from "react";
import Nav from "../components/Nav";
import "./Shopcart.css"


const ShopCart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      imageSrc: "https://www.visa.co.in/dam/VCOM/global/run-your-business/images/visa-direct-overview-globalreach-750x280.jpg",
      title: "Kanchipuram",
      description:
        "Vitange",
      price: 2000,
      quantity: 1,
    },
    {
      id: 2,
      imageSrc: "https://thumbs.dreamstime.com/b/close-up-indian-saree-design-banarasi-saree-close-up-indian-saree-design-banarasi-saree-indain-wedding-party-indian-130474595.jpg?w=992",
      title: "kalamkari",
      description:
        "Pastels",
      price: 5000,
      quantity: 1,
    },
  ]);

  const removeItem = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  const updateQuantity = (itemId, quantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, quantity: quantity } : item
      )
    );
  };

  const recalculateCart = () => {
    // Calculate totals
    let subtotal = 0;
    cartItems.forEach((item) => {
      subtotal += item.price * item.quantity;
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

  const cartTotals = recalculateCart();

  return (
    <div>
      <Nav/>
      <br/>
      <br/>
      <br/>
      <br/>
     
    <div className="shopping-cart">
      <div className="column-labels">
        <label className="product-image">Image</label>
        <label className="product-details">Product</label>
        <label className="product-price">Price</label>
        <label className="product-quantity">Quantity</label>
        <label className="product-removal">Remove</label>
        <label className="product-line-price">Total</label>
      </div>

      {cartItems.map((item) => (
        <div className="product" key={item.id}>
          <div className="product-image">
            <img src={item.imageSrc} alt="Product" />
          </div>
          <div className="product-details">
            <div className="product-title">{item.title}</div>
            <p className="product-description">{item.description}</p>
          </div>
          <div className="product-price">{item.price.toFixed(2)}</div>
          <div className="product-quantity">
            <input
              type="number"
              value={item.quantity}
              min="1"
              onChange={(e) =>
                updateQuantity(item.id, parseInt(e.target.value))
              }
            />
          </div>
          <div className="product-removal">
            <button
              className="remove-product"
              onClick={() => removeItem(item.id)}
            >
              Remove
            </button>
          </div>
          <div className="product-line-price">
            {(item.price * item.quantity).toFixed(2)}
          </div>
        </div>
      ))}

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

export default ShopCart;
