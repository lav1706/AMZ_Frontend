import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState();
  const userId = "68263903bff831935e17c3c7";
  const api = `http://localhost:3000/cart/${userId}`;

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const res = await fetch(api);
        const data = await res.json();
        setCart(data.data);
      } catch (err) {
        console.error("Failed to fetch cart", err);
        setCart([]);
      }
    };
    fetchCart();
  }, []);
  const clearCart = async () => {
    setCart([]);
  };

  const addToCart = async (product) => {
    try {
      const productId = product._id || product.id || product.productId._id;

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
        setCart(data.cart);

        alert("Product added to cart");
      } else {
        alert(data.message || "Failed to add product to cart");
      }
    } catch (err) {
      console.error("Add to cart error", err);
      alert("Error adding product to cart");
    }
  };

  const removeFromCart = async (cartItemId) => {
    try {
      const res = await fetch(`${api}/${cartItemId}`, {
        method: "DELETE",
      });

      const data = await res.json();
      if (res.ok) {
        setCart(data.cart);
        alert("Product removed from cart");
      } else {
        alert(data.message || "Failed to remove product from cart");
      }
    } catch (err) {
      console.error("Remove from cart error", err);
      alert("Error removing product from cart");
    }
  };

  const updateQuantity = async (cartItemId, delta) => {
    if (!cartItemId) {
      alert("Cart Item ID missing");
      return;
    }

    const url =
      delta === 1
        ? `http://localhost:3000/cart/increase/${userId}/${cartItemId}`
        : `http://localhost:3000/cart/decrease/${userId}/${cartItemId}`;

    try {
      const res = await fetch(url, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
      });

      const data = await res.json();

      if (res.ok) {
        setCart(data.cart);
      } else {
        alert(data.message || "Failed to update quantity");
      }
    } catch (err) {
      console.error("Error updating quantity:", err);
      alert("Error updating quantity");
    }
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
