import { createContext, useContext } from "react";

export const CartContext=createContext({
    CartItems: [],
    Click_add_to_cart:()=>{},
    Click_remove_from_cart:()=>{}
})

export const useCart=()=>{
    return useContext(CartContext)
}

export const CartProvider=CartContext.Provider