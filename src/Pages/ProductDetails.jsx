import { useParams, Link } from "react-router-dom";
import { useProductContext } from "../context/ProductContext";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishListContext";

const ProductDetails = () => {
  const { products } = useProductContext();
  const { addToWishlist } = useWishlist();
  const { addToCart } = useCart();
  const { _id } = useParams();
  const productId = _id;
  const selectedProduct = products.find((pro) => pro.id === productId);

  if (!selectedProduct) {
    return <h2 className="text-center mt-4">Product Not Found</h2>;
  }

  return (
    <div className="container mt-4">
      <Link className="btn btn-primary m-4" to="/product">
        Go Back
      </Link>
      <div className="row m-4">
        <div className="col-md-5">
          <img
            src={selectedProduct.image}
            alt={selectedProduct.name}
            className="img-fluid rounded shadow"
          />
        </div>

        <div className="col-md-7">
          <h2>{selectedProduct.name}</h2>
          <p className="text-muted">{selectedProduct.category}</p>
          <h4>${selectedProduct.price}</h4>
          <p>{selectedProduct.description}</p>

          <button
            className="btn btn-primary me-2"
            onClick={() => addToCart(selectedProduct)}
          >
            Add to Cart
          </button>
          <button
            className="btn btn-outline-danger"
            onClick={() => addToWishlist(selectedProduct)}
          >
            Add to Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
