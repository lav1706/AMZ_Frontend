import React from 'react';
import { useAddress } from '../context/AddressContext';
import { useUserContext } from '../context/UserContext';

const UserProfile = () => {
  const {addresses,addAddress,editAddress,deleteAddress}=useAddress()
  const user = {
    name: "Ravi Sharma",
    email: "ravi.sharma@example.com",
    phone: "+91-9876543210",
  };
  const {orderHistory}=useUserContext()
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
            <div key={add.id}><li key={add.id}>{add.add}</li>
            <button className='btn btn-primary mx-2' onClick={()=>editAddress(add)}>Edit</button>

            <button className='btn btn-danger' onClick={()=>deleteAddress(add.id)}>Delete</button>
            </div>
            
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
              <th>Address</th>
              <th>Amount</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            { orderHistory? orderHistory.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.name}</td>
                <td>{order.address}</td>
                <td>{order.total}</td>
                <td>{order.date}</td>
              </tr>
            )): <p>No order History</p> }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserProfile;
