import { createContext, useContext, useState } from "react";
import { useCart } from "./CartContext";
import { useEffect } from "react";

const WishListContext = createContext();
export const useWishlist = () => useContext(WishListContext);

export const WishListProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);
  const { addToCart } = useCart();
  const userId = "68263903bff831935e17c3c7";
  const api = `https://amz-backend-1.onrender.com/wishlist/${userId}`;

  useEffect(() => {
    const fetchWishlist = async () => {
      try {
        const res = await fetch(api);
        const data = await res.json();
        setWishlist(Array.isArray(data.wishlist) ? data.wishlist : []);
      } catch (error) {
        console.error("Failed to fetch wishlist", error);
        setWishlist([]);
      }
    };
    fetchWishlist();
  }, []);

  const addToWishlist = async (product) => {
    try {
      const productId = product._id || product.id;

      if (!productId) {
        alert("Product ID missing");
        return null;
      }

      const res = await fetch(`${api}/${productId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      if (res.ok) {
        setWishlist(data.wishlist);

        alert("Product added to Wishlist");
      } else {
        alert(data.message || "Failed to add product to wishlist");
      }
    } catch (error) {
      console.error("Add to wishlist error", error);
      alert("Error adding product to wishlist");
    }
  };

  const removeFromWishlist = async (product) => {
    try {
      const productId = product._id || product.id || product.productId._id;

      if (!productId) {
        alert("Product ID missing");
        return null;
      }

      const res = await fetch(`${api}/${productId}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (res.ok) {
        setWishlist(data.wishlist);

        alert("Product Remove from Wishlist");
      } else {
        alert(data.message || "Failed to remove product from wishlist");
      }
    } catch (error) {
      console.error("Remove from wishlist error", error);
      alert("Error adding product to wishlist");
    }
  };

  const moveToCart = (product) => {
    removeFromWishlist(product);
    addToCart(product);
    alert("Product Move to Cart");
  };

  return (
    <WishListContext.Provider
      value={{ wishlist, addToWishlist, removeFromWishlist, moveToCart }}
    >
      {children}
    </WishListContext.Provider>
  );
};
