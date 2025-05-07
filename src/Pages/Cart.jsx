import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishListContext";
import { useAddress } from "../context/AddressContext";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();
  const { addToWishlist } = useWishlist();
  const { addresses,
    selectedAddress,
    selectedAddressId,
    addAddress,
    editAddress,
    deleteAddress,
    selectAddress, } = useAddress();

  
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  
  const handleAddressChange = (e) => {
    
    selectedAddress(e.target.value);
  };

  return (
    <div className="container mt-4">
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="row">
          <div className="col-md-8">
            {cart.map((item) => (
              <div key={item.id} className="card mb-3">
                <div className="card-body d-flex">
                  <img src={item.image} width="100" alt={item.name} />
                  <div className="ms-3">
                    <h5>{item.name}</h5>
                    <p>${item.price} × {item.quantity}</p>
                    <div>
                      <button onClick={() => updateQuantity(item.id, -1)} className="btn btn-primary">-</button>
                      <span className="mx-2">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, 1)} className="btn btn-primary">+</button>
                    </div>
                    <div className="mt-2">
                      <button onClick={() => removeFromCart(item.id)} className="btn btn-danger btn-sm">Remove</button>
                      <button onClick={() => addToWishlist(item)} className="btn btn-outline-secondary btn-sm ms-2">Add to Wishlist</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="col-md-4">
            <div className="card p-3">
              <h5>Price Details</h5>
              <p>Total Items: {cart.length}</p>
              <p>Total Price: ${totalPrice}</p>
              <button className="btn btn-success">Checkout</button>
            </div>
            <div className="card mt-3 p-3">
              <h5>Delivery Address</h5>
              {addresses.length === 0 ? (
                <p>No addresses available. Please add one.</p>
              ) : (
                <div>
                  <label htmlFor="addressDropdown">Select Address:</label>
                  <select
                    id="addressDropdown"
                    className="form-select"
                    value={selectedAddressId || ""}
                    onChange={handleAddressChange}
                  >
                    <option value="" disabled>Select an address</option>
                    {addresses.map((address) => (
                      <option key={address.id} value={address.id}>
                        {address.street}, {address.city}, {address.zipcode}
                      </option>
                    ))}
                  </select>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
