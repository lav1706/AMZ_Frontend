import React, { useState } from 'react';
import { useAddress } from '../context/AddressContext';

const UserProfile = () => {
  const {addresses,addAddress,editAddress,deleteAddress}=useAddress()
  const user = {
    name: "Ravi Sharma",
    email: "ravi.sharma@example.com",
    phone: "+91-9876543210",
  };

  

  const [orderHistory] = useState([
    { id: 101, item: "Men's T-shirt", date: "2024-12-10", amount: "$25" },
    { id: 102, item: "Women's Dress", date: "2025-01-15", amount: "$80" },
    { id: 103, item: "Men's Jacket", date: "2025-03-05", amount: "$100" }
  ]);

  

  return (
    <div className="container mt-4">
      <h2>User Profile</h2>
      <hr />
      <div className="mb-3">
        <strong>Name:</strong> {user.name}<br />
        <strong>Email:</strong> {user.email}<br />
        <strong>Phone:</strong> {user.phone}
      </div>

      <div className="mb-4">
        <h4>Saved Addresses</h4>
        <ul>
          {addresses.map((add) => (
            <><li key={add.id}>{add.add}</li>
            <button className='btn btn-primary mx-2' onClick={()=>editAddress(add)}>Edit</button>

            <button className='btn btn-danger' onClick={()=>deleteAddress(add.id)}>Delete</button>
            </>
            
          ))}
        </ul>
        <button className="btn btn-primary" onClick={()=>addAddress()}>Add New Address</button>
      </div>

      <div>
        <h4>Order History</h4>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Item</th>
              <th>Date</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {orderHistory.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.item}</td>
                <td>{order.date}</td>
                <td>{order.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserProfile;
