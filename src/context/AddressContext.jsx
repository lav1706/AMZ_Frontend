import React, { createContext, useContext, useState } from "react";

const AddressContext = createContext();

export const AddressProvider = ({ children }) => {
  const [addresses, setAddresses] = useState([]);
  const [selectedAddressId, setSelectedAddressId] = useState(null);

  const addAddress = () => {
    const newAddress = prompt("Enter new address:");
    const addressWithId = { add:newAddress, id: addresses.length+1 };
    setAddresses((prev) => [...prev, addressWithId]);
  };

  const editAddress = (addressToEdit) => {
    const updatedText = prompt("Enter Updated address:", addressToEdit.add);
    if (updatedText) {
      const updatedObj = { ...addressToEdit, add: updatedText };
      setAddresses((prev) =>
        prev.map((addr) => (addr.id === updatedObj.id ? updatedObj : addr))
      );
    }
  };
  

  const deleteAddress = (id) => {
    const deleteText = window.confirm("Are you sure to delete address?");
    if(deleteText){
        setAddresses((prev) => prev.filter((addr) => addr.id !== id));
    if (selectedAddressId === id) {
      setSelectedAddressId(null);
    }
    }
    
  };

  const selectAddress = (id) => {
    setSelectedAddressId(id);
  };

  const selectedAddress = addresses.find((a) => a.id === selectedAddressId) || null;
const clearAdress=()=>{
  setSelectedAddressId(null)
}
  return (
    <AddressContext.Provider
      value={{
        addresses,
        selectedAddress,
        addAddress,
        editAddress,
        deleteAddress,
        selectedAddressId,
        selectAddress,
        clearAdress
      }}
    >
      {children}
    </AddressContext.Provider>
  );
};

export const useAddress = () => useContext(AddressContext);
