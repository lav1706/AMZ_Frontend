import { createContext, useContext, useEffect, useState } from "react";
import { useCart } from "./CartContext";
import { useAddress } from "./AddressContext";

const UserContext = createContext();
export const useUserContext = () => useContext(UserContext);

export const UserWrapper = ({ children }) => {
  const { cart, clearCart } = useCart();
  const { selectedAddress } = useAddress();

  const [orderHistory, setOrderHistory] = useState([]);
  const [user, setUser] = useState();
  const userId = "68263903bff831935e17c3c7";

  const handleClick = async () => {
    if (!Array.isArray(cart) || cart.length === 0) {
      return alert("Cart is empty.");
    }
    if (!selectedAddress) {
      return alert("Please select a delivery address.");
    }

    const newOrder = {
      cart: cart.map((item) => ({
        productId: item.productId._id,
        quantity: item.quantity,
      })),
      address: selectedAddress,
      total: cart.reduce(
        (total, item) => item.quantity * item.price + total,
        0
      ),
      date: new Date().toLocaleDateString(),
    };

    try {
      console.log("newOrder being sent:", JSON.stringify(newOrder, null, 2));

      const res = await fetch(`http://localhost:3000/order/${userId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newOrder),
      });

      const updatedUser = await res.json();

      if (!res.ok) {
        throw new Error(updatedUser?.message || "Order failed");
      }
      const fetchUser = async () => {
        try {
          const res = await fetch(`http://localhost:3000/user/${userId}`);
          const data = await res.json();
          setUser(data);
          setOrderHistory(data?.order);
        } catch (err) {
          console.error("Error fetching users:", err);
        }
      };
      setUser(updatedUser);
      setOrderHistory(updatedUser?.order);
      alert("Product will be delivered soon...");
      await fetchUser();
      clearCart();
    } catch (err) {
      console.error("Error placing order:", err);
      alert("Order failed. Please try again.");
    }
  };

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch(`http://localhost:3000/user/${userId}`);
        const data = await res.json();
        setUser(data);
        setOrderHistory(data?.order);
      } catch (err) {
        console.error("Error fetching users:", err);
      }
    };

    fetchUsers();
  }, []);

  return (
    <UserContext.Provider value={{ handleClick, orderHistory, user }}>
      {children}
    </UserContext.Provider>
  );
};
