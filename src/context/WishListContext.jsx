import { createContext, useContext, useState } from "react";
import { useCart } from "./CartContext";

const WishListContext = createContext();
export const useWishlist = () => useContext(WishListContext);

export const WishListProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);
  const { addToCart } = useCart();

  const addToWishlist = (product) => {
    setWishlist(prev => prev.some(p => p.id === product.id) ? prev : [...prev, product]);
  };

  const removeFromWishlist = (id) => setWishlist(prev => prev.filter(p => p.id !== id));

  const moveToCart = (product) => {
    removeFromWishlist(product.id);
    addToCart(product);
  };

  return (
    <WishListContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist, moveToCart }}>
      {children}
    </WishListContext.Provider>
  );
};
