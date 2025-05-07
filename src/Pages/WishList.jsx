import React from "react";
import { useWishlist } from "../context/WishListContext";

const WishList = () => {
   const {wishlist, moveToCart,removeFromWishlist}=useWishlist()
  return (
    <div className="container mt-4">
      <h2>Wishlist</h2>
      {wishlist.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <div className="row">
          {wishlist.map((item) => (
            <div key={item.id} className="col-md-4">
              <div className="card mb-3">
                <img src={item.image} className="card-img-top" alt={item.name} />
                <div className="card-body">
                  <h5>{item.name}</h5>
                  <p>${item.price}</p>
                  <button onClick={() => moveToCart(item)} className="btn btn-primary btn-sm">Add to Cart</button>
                  <button onClick={() => removeFromWishlist(item.id)} className="btn btn-danger btn-sm ms-2">Remove</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WishList;
