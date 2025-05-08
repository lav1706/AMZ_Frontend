import React, { useState } from "react";
import {Link} from "react-router-dom"
import {useProductContext} from "./../context/ProductContext"
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishListContext";
import { useSearchContext } from "../context/SearchContext";
const ProductListing = () => {
  const [sortOption, setSortOption] = useState(""); 
  const [selectedCategory, setSelectedCategory] = useState("All"); 
const {products}=useProductContext()
const { addToCart}=useCart()
const {addToWishlist}=useWishlist()
const {searchTerm}=useSearchContext()
 

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };
const filterProduct= searchTerm? products.filter((item) =>
  item.name.toLowerCase().includes(searchTerm.toLowerCase())
) : products
  const sortedProducts = filterProduct
    .filter((product) => {
      return selectedCategory==="All" ? products: selectedCategory===product.category
    })
    .sort((a, b) => {
      if (sortOption === "lowToHigh") {
        return a.price - b.price; 
      }
      if (sortOption === "highToLow") {
        return b.price - a.price; 
      }
      return 0;
    });

  const clearFilters = () => {
    setSortOption("");
    setSelectedCategory("All"); 
  };

  return (
    <div>
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-3">
            <div className="card">
              <div className="card-header">
                <h3>Filter</h3>
              </div>
              <div className="card-body">
                
                

                <div className="mb-3">
                  <h6>Filter by Category</h6>
                  <div>
                  <label>
                      <input
                        type="radio"
                        name="category"
                        value="All"
                        onChange={handleCategoryChange}
                        checked={selectedCategory === "All"}
                      />
                      All
                    </label>
                    <br />
                    <label>
                      <input
                        type="radio"
                        name="category"
                        value="Men"
                        onChange={handleCategoryChange}
                      />
                      Men
                    </label>
                    <br />
                    <label>
                      <input
                        type="radio"
                        name="category"
                        value="Women"
                        onChange={handleCategoryChange}
                      />
                      Women
                    </label>
                  </div>
                </div>
                <div className="mb-3">
                  <h6>Sort by Price</h6>
                  <div>
                    <label>
                      <input
                        type="radio"
                        name="sort"
                        value="lowToHigh"
                        onChange={handleSortChange}
                      />
                      Low to High
                    </label>
                    <br />
                    <label>
                      <input
                        type="radio"
                        name="sort"
                        value="highToLow"
                        onChange={handleSortChange}
                      />
                      High to Low
                    </label>
                  </div>

                <button className="btn btn-secondary" onClick={clearFilters}>
                  Clear Filters
                </button>
              </div>
              </div>
            </div>
          </div>

          <div className="col-md-9">
            <div className="row">
              {sortedProducts.map((product) => (
                <div key={product.id} className="col-md-4 col-sm-6 mb-4">
                  <div className="card" style={{ height: "100%" }}>
                    <img
                      src={product.image}
                      className="card-img-top"
                      alt={product.name}
                    />
                    <div className="card-body">
                      <h5 className="card-title"><Link to={`/product/${product.id}`}>{product.name}</Link></h5>
                      <p className="card-text">{product.description}</p>
                      <p className="card-text">
                        <strong>Category: </strong>
                        {product.category}
                      </p>
                      <p className="card-text">
                        <strong>Price: </strong>
                        ${product.price}
                      </p>
                      <div className="d-flex justify-content-between">
                        <button className="btn btn-primary" onClick={()=>addToCart(product)}>Add to Cart</button>
                        <button className="btn btn-outline-secondary" onClick={()=>addToWishlist(product)}>
                          Add to Wishlist
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductListing;
