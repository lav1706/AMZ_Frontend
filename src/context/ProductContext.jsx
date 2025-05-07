import { createContext, useContext } from "react";

 const ProductContext= createContext()
 export const useProductContext = () => useContext(ProductContext);

const products = [
    {
      id: 1,
      name: "Men's T-shirt",
      category: "Men",
      price: 25,
      image: "https://images.unsplash.com/photo-1584745640473-b937dfed863b?w=600&fit=crop&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Comfortable cotton T-shirt for daily wear.",
    },
    {
      id: 2,
      name: "Men's Jeans",
      category: "Men",
      price: 40,
      image: "https://images.unsplash.com/photo-1570210217921-1b3b10db72f7?w=600&fit=crop&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Slim fit denim jeans for men.",
    },
    {
      id: 3,
      name: "Men's Jacket",
      category: "Men",
      price: 100,
      image: "https://images.unsplash.com/photo-1594954099997-2de9892e6061?w=600&fit=crop&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Stylish winter jacket for men.",
    },
    {
      id: 4,
      name: "Men's Sneakers",
      category: "Men",
      price: 60,
      image: "https://images.unsplash.com/photo-1570217889265-6dce15c9d3b4?w=600&fit=crop&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Comfortable sneakers for casual wear.",
    },
    {
      id: 5,
      name: "Men's Hoodie",
      category: "Men",
      price: 45,
      image: "https://images.unsplash.com/photo-1560430468-f44b5f3cbf0f?w=600&fit=crop&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Cozy hoodie perfect for chilly days.",
    },
    {
      id: 6,
      name: "Women's Dress",
      category: "Women",
      price: 80,
      image: "https://images.unsplash.com/photo-1510224111347-94d98b0b29de?w=600&fit=crop&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Elegant dress for formal occasions.",
    },
    {
      id: 7,
      name: "Women's Blouse",
      category: "Women",
      price: 30,
      image: "https://images.unsplash.com/photo-1550303374-9036077f264f?w=600&fit=crop&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Chic blouse for casual and office wear.",
    },
    {
      id: 8,
      name: "Women's Skirt",
      category: "Women",
      price: 35,
      image: "https://images.unsplash.com/photo-1595436013409-c2bb9830895d?w=600&fit=crop&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Floral skirt for spring and summer.",
    },
    {
      id: 9,
      name: "Women's Shoes",
      category: "Women",
      price: 50,
      image: "https://images.unsplash.com/photo-1562197508-1558392b5d82?w=600&fit=crop&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Comfortable shoes for daily use.",
    },
    {
      id: 10,
      name: "Women's Cardigan",
      category: "Women",
      price: 55,
      image: "https://images.unsplash.com/photo-1530731148982-e7f9a01b5e5e?w=600&fit=crop&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Warm and stylish cardigan for cooler weather.",
    },
  ];
  export const ProductWrapper=({children})=>{
    return(
      <>
    
       <ProductContext.Provider value={{products}}>
      {children}
       </ProductContext.Provider>
      
     </>
    )
  }