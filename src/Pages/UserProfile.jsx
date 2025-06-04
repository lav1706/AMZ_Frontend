import { useState } from "react";
import { useAddress } from "../context/AddressContext";
import { useUserContext } from "../context/UserContext";

const UserProfile = () => {
  const { addresses, addAddress, editAddress, deleteAddress } = useAddress();
  const { user } = useUserContext();

  const [formData, setFormData] = useState({
    city: "",
    pincode: "",
    state: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editingAddressId, setEditingAddressId] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  console.log(user?.data?.order);
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isEditing) {
      await editAddress({ ...formData, _id: editingAddressId });
    } else {
      await addAddress(formData);
    }

    setFormData({ city: "", pincode: "", state: "" });
    setIsEditing(false);
    setEditingAddressId(null);
    setShowForm(false);
  };

  const handleEdit = (addr) => {
    setFormData({ city: addr.city, pincode: addr.pincode, state: addr.state });
    setIsEditing(true);
    setEditingAddressId(addr._id);
    setShowForm(true);
  };

  const handleAdd = () => {
    setFormData({ city: "", pincode: "", state: "" });
    setIsEditing(false);
    setEditingAddressId(null);
    setShowForm(true);
  };

  return (
    <div className="container mt-4">
      <h2>User Profile</h2>
      <hr />

      <div className="mb-3">
        {user ? (
          <>
            <strong>Name:</strong> {user?.data?.name}
            <br />
            <strong>Email:</strong> {user?.data?.email}
            <br />
          </>
        ) : (
          <p>Loading user info...</p>
        )}
      </div>
      <div className="mb-4">
        <h4>Saved Addresses</h4>
        <ul>
          {addresses.map((add) => (
            <div key={add._id} className="mb-3">
              <li>
                {add.city}, {add.pincode}, {add.state}
              </li>
              <button
                className="btn btn-primary mx-2"
                onClick={() => handleEdit(add)}
              >
                Edit
              </button>
              <button
                className="btn btn-danger"
                onClick={() => deleteAddress(add._id)}
              >
                Delete
              </button>
            </div>
          ))}
        </ul>

        <button className="btn btn-success mt-3" onClick={handleAdd}>
          Add New Address
        </button>

        {showForm && (
          <form className="mt-4" onSubmit={handleSubmit}>
            <h5>{isEditing ? "Edit Address" : "Add New Address"}</h5>
            <div className="mb-2">
              <label>City</label>
              <input
                type="text"
                name="city"
                className="form-control"
                value={formData.city}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-2">
              <label>Pincode</label>
              <input
                type="text"
                name="pincode"
                className="form-control"
                value={formData.pincode}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-2">
              <label>State</label>
              <input
                type="text"
                name="state"
                className="form-control"
                value={formData.state}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">
              {isEditing ? "Update Address" : "Save Address"}
            </button>
            <button
              type="button"
              className="btn btn-secondary mx-2"
              onClick={() => {
                setShowForm(false);
                setFormData({ city: "", pincode: "", state: "" });
                setIsEditing(false);
              }}
            >
              Cancel
            </button>
          </form>
        )}
      </div>
      <div>
        <h4>Order History</h4>

        {user?.data?.order && user.data.order.length > 0 ? (
          user.data.order.map((order, index) => (
            <div key={order._id} className="card mb-3 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Order #{index + 1}</h5>

                <p className="card-text">
                  <strong>Products:</strong>{" "}
                  {order.cart.map((item, i) => (
                    <span key={i}>
                      {item.productId} (Qty: {item.quantity}){" "}
                    </span>
                  ))}
                </p>

                {order.address ? (
                  <p className="card-text">
                    <strong>Address:</strong> {order.address.city},{" "}
                    {order.address.pincode}, {order.address.state}
                  </p>
                ) : (
                  <p className="text-danger">No address found for this order</p>
                )}
              </div>
            </div>
          ))
        ) : (
          <p>No orders found.</p>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
