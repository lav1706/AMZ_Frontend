import { createContext, useContext, useState } from "react";
import { useCart } from "./CartContext";
import { useAddress } from "./AddressContext";

const UserContext = createContext();

export const useUserContext = () => useContext(UserContext); 

export const UserWrapper = ({ children }) => {
  const { cart,clearCart } = useCart();
  const { selectedAddress,clearAdress } = useAddress();
  const [orderHistory, setOrderHistory] = useState([]);

  const handleClick = () => {
  
    if (cart.length > 0 && selectedAddress) {
      setOrderHistory((prev) => [
        ...prev,
        {
          id: orderHistory.length + 1,
          name: cart.map(item => item.name).join(", "), 
          address: selectedAddress.add,
          total: cart.reduce((total,item)=>item.quantity*item.price+total,0),
          date: new Date().toLocaleDateString()
        },
      ])
      alert("Product will Delivered Soon...")
      clearCart();  
      clearAdress();  
    } else {
      alert("Cart or address is missing.");
    }
    
  };
  return (
    <UserContext.Provider value={{ handleClick, orderHistory }}>
      {children}
    </UserContext.Provider>
  );
};
