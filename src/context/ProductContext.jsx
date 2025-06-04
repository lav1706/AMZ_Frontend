import { createContext, useContext, useEffect, useState } from "react";

const ProductContext = createContext();
export const useProductContext = () => useContext(ProductContext);

export const ProductWrapper = ({ children }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://amz-backend-1.onrender.com/product");
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);
  return (
    <>
      <ProductContext.Provider value={{ products }}>
        {children}
      </ProductContext.Provider>
    </>
  );
};
