import {  createContext, useContext, useState } from "react";
import { useProductContext } from "./ProductContext";

const SearchContext=createContext()

export const useSearchContext=useContext(SearchContext)

export const SearchProvider=({children})=>{
    const [searchTerm,setSearchTerm]=useState("")
    const{products}=useProductContext()

    const handleChange=(e)=>{
        setSearchTerm(e.target.value)
        const resultProduct=products.some((pro)=>pro.name===searchTerm)
        return resultProduct
    }
    

    return(
        <SearchContext.Provider value={{searchTerm,handleChange}}>
            {children}
        </SearchContext.Provider>
    )
}