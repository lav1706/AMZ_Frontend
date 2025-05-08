import { createContext, useContext, useState } from "react";
import { useProductContext } from "./ProductContext";

const SearchContext = createContext();

export const useSearchContext = () => useContext(SearchContext);

export const SearchProvider = ({ children }) => {

  const [searchTerm, setSearchTerm] = useState("");
  const {products}=useProductContext()

  const handleChange = (e) => {
    const value=e.target.value
    setSearchTerm(value);
  
  };

  return (
    <SearchContext.Provider value={{ searchTerm, handleChange  }}>
      {children}
    </SearchContext.Provider>
  );
};
