import { createContext, useContext, useState } from "react";
import { useCart } from "./CartContext";

const WishListContext = createContext();
export const useWishlist = () => useContext(WishListContext);

export const WishListProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);
  const { addToCart } = useCart();

  const addToWishlist = (product) => {
    setWishlist(prev => prev.some(p => p.id === product.id) ? prev : [...prev, product])
    alert("Product Added to Wishlist")
  };

  const removeFromWishlist = (id) =>{ setWishlist(prev => prev.filter(p => p.id !== id))
    alert("Product Remove to Wishlist")
  }

  const moveToCart = (product) => {
    removeFromWishlist(product.id);
    addToCart(product);
    alert("Product Move to Cart")
  };

  return (
    <WishListContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist, moveToCart }}>
      {children}
    </WishListContext.Provider>
  );
};
