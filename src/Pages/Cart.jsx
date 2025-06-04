import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishListContext";
import { useAddress } from "../context/AddressContext";
import { Link } from "react-router-dom";
import { useUserContext } from "../context/UserContext";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();
  const { addToWishlist } = useWishlist();
  const { addresses, selectedAddressId, selectAddress } = useAddress();
  const { handleClick } = useUserContext();

  const totalPrice = cart?.reduce((sum, item) => {
    const price = item.productId?.price || 0;
    const quantity = item.quantity || 0;
    return sum + price * quantity;
  }, 0);
  console.log(cart);
  console.log(typeof cart);

  const handleAddressChange = (e) => {
    const addressId = e.target.value;
    selectAddress(addressId);
  };

  if (!cart) return <p>Loading cart...</p>;

  return (
    <div className="container mt-4">
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="row">
          <div className="col-md-8">
            {cart.map((item) => (
              <div key={item._id} className="card mb-3">
                <div className="card-body d-flex">
                  <img
                    className="object-fit-cover"
                    src={item.productId.image}
                    width="200"
                    alt={item.productId.name}
                    style={{ height: "200px" }}
                  />
                  <div className="ms-3">
                    <h5>{item.productId.name}</h5>
                    <p>
                      ${item.productId.price} × {item.quantity}
                    </p>
                    <div>
                      <button
                        onClick={() => updateQuantity(item._id, -1)}
                        className="btn btn-primary"
                      >
                        -
                      </button>
                      <span className="mx-2">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item._id, 1)}
                        className="btn btn-primary"
                      >
                        +
                      </button>
                    </div>
                    <div className="mt-2">
                      <button
                        onClick={() => removeFromCart(item._id)}
                        className="btn btn-danger btn-sm"
                      >
                        Remove
                      </button>
                      <button
                        onClick={() => addToWishlist(item.productId)}
                        className="btn btn-outline-secondary btn-sm ms-2"
                      >
                        Add to Wishlist
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="col-md-4">
            <div className="card p-3">
              <h5>Price Details</h5>
              <p>Total Items: {cart.length}</p>
              <p>Total Price: ${totalPrice}</p>
              <button className="btn btn-success" onClick={() => handleClick()}>
                Checkout
              </button>
            </div>

            <div className="card mt-3 p-3">
              <h5>Delivery Address</h5>
              {addresses.length === 0 ? (
                <div>
                  <p>No addresses available. Please add one.</p>
                  <Link to="/user">Add Address</Link>
                </div>
              ) : (
                <div>
                  <label htmlFor="addressDropdown">Select Address:</label>
                  <select
                    id="addressDropdown"
                    className="form-select"
                    value={selectedAddressId || ""}
                    onChange={handleAddressChange}
                  >
                    <option value="" disabled>
                      Select an address
                    </option>
                    {addresses.map((address) => (
                      <option key={address._id} value={address._id}>
                        {address.city}, {address.state}, {address.pincode}
                      </option>
                    ))}
                  </select>
                  <Link to="/user">Add Address</Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
