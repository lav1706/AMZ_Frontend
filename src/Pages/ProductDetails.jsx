import { useParams,Link } from "react-router-dom";
import { useProductContext } from "../context/ProductContext";
import { useCart } from "../context/CartContext";

const ProductDetails = () => {
   const {products}=useProductContext()
   const {addToCart}=useCart()

  const { proId } = useParams();
  const productId = parseInt(proId); 
  const selectedProduct = products.find((pro) => pro.id === productId);

  if (!selectedProduct) {
    return <h2 className="text-center mt-4">Product Not Found</h2>;
  }

  return (
    <div className="container mt-4">
       <Link className="btn btn-primary" to="/product">Go Back</Link>
      <div className="row">
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
            onClick={() => alert("Added to Wishlist")}
          >
            Add to Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
