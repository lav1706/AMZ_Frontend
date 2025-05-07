import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishListContext";

const Nav = () => {
  const {cart}=useCart()
  const {wishlist}=useWishlist()
    return (
      <div>
        <div className="navbar bg-body-tertiary px-4 py-2 justify-content-between sticky-top">
          <h1><Link to='/' className="text-decoration-none">Amz</Link></h1>
          <div className="d-flex gap-3 align-items-center">
           
            <div className="border border-bottom d-flex align-items-center px-2">
              <input
                type="text"
                name="search"
                placeholder="Search..."
                className="form-control border-0 shadow-none bg-transparent p-1"
              />
              <button className="btn p-0 shadow-none border-0 bg-transparent">
                <i className="bi bi-search"></i>
              </button>
            </div>
  
           
            <div className="d-flex gap-3">
              
              <Link to="/user/cart" className="position-relative">
                <i className="bi bi-cart fs-4"></i>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {cart.length}
                  <span className="visually-hidden">cart items</span>
                </span>
              </Link>
  
             
              <Link to="/user/wishlist" className="position-relative">
                <i className="bi bi-box2-heart fs-4"></i>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {wishlist.length}
                  <span className="visually-hidden">wishlist items</span>
                </span>
              </Link>
              <Link to="/user">
              <i className="bi bi-person fs-4"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Nav;
  