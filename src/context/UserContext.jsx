import { createContext, useContext, useEffect, useState } from "react";
import { useCart } from "./CartContext";
import { useAddress } from "./AddressContext";

const UserContext = createContext();
export const useUserContext = () => useContext(UserContext);

export const UserWrapper = ({ children }) => {
  const { cart, clearCart } = useCart();
  const { selectedAddress, clearAdress } = useAddress();

  const [orderHistory, setOrderHistory] = useState([]);
  const [user, setUser] = useState();
  const userId = "68263903bff831935e17c3c7";
  console.log(selectedAddress);
  const handleClick = async () => {
    console.log(cart);
    console.log(selectedAddress);
    if (cart.length > 0 && selectedAddress) {
      const newOrder = {
        cart: cart,
        address: selectedAddress,
        total: cart.reduce(
          (total, item) => item.quantity * item.price + total,
          0
        ),
        date: new Date().toLocaleDateString(),
      };

      try {
        const res = await fetch(`http://localhost:3000/order/${userId}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newOrder),
        });

        if (!res.ok) {
          throw new Error("Failed to place order");
        }

        const updatedUser = await res.json();
        setUser(updatedUser);
        setOrderHistory(updatedUser?.order);
        alert("Product will be delivered soon...");
        clearCart();
        clearAdress();
      } catch (err) {
        console.error("Error placing order:", err);
        alert("Order failed. Please try again.");
      }
    } else {
      alert("Cart or address is missing.");
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
