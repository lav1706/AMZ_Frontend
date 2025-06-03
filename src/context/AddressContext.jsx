import React, { createContext, useContext, useEffect, useState } from "react";

const AddressContext = createContext();
export const useAddress = () => useContext(AddressContext);

export const AddressProvider = ({ children }) => {
  const [addresses, setAddresses] = useState([]);
  const [selectedAddressId, setSelectedAddressId] = useState(null);
  const userId = "68263903bff831935e17c3c7";
  const api = `https://amz-backend-1.onrender.com/add/${userId}`;

  useEffect(() => {
    const fetchAddresses = async () => {
      try {
        const res = await fetch(api);
        const data = await res.json();
        if (res.ok) {
          setAddresses(data?.addressBook);
        } else {
          console.error(data.message);
        }
      } catch (error) {
        console.error("Error fetching addresses:", error);
      }
    };

    fetchAddresses();
  }, []);

  const addAddress = async (addressObj) => {
    try {
      const res = await fetch(api, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(addressObj),
      });
      const data = await res.json();
      if (res.ok) {
        setAddresses(data.addressBook);
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error("Error adding address:", error);
    }
  };

  const editAddress = async (updatedObj) => {
    try {
      const res = await fetch(api, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedObj),
      });
      const data = await res.json();
      if (res.ok) {
        setAddresses(data.addressBook);
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error("Error editing address:", error);
    }
  };

  const deleteAddress = async (addressId) => {
    const confirmDelete = window.confirm(
      "Are you sure to delete this address?"
    );
    if (!confirmDelete) return;

    try {
      const res = await fetch(`${api}/${addressId}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (res.ok) {
        setAddresses(data.addressBook);
        if (selectedAddressId === addressId) {
          setSelectedAddressId(null);
        }
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error("Error deleting address:", error);
    }
  };

  const selectAddress = (addressId) => {
    setSelectedAddressId(addressId);
  };

  const clearAddress = () => {
    setSelectedAddressId(null);
  };

  const selectedAddress =
    addresses.find((addr) => addr._id === selectedAddressId) || null;

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
        clearAddress,
      }}
    >
      {children}
    </AddressContext.Provider>
  );
};
