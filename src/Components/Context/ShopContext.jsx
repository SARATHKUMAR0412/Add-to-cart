 import React, { createContext, useState } from "react";
import all_product from "../Assets/all_product";

export const ShopContext = createContext(null);

 const getDefaultCart = () => {
   let cart = {};
   for (let index = 0; index < all_product.length+1; index++) {
     cart[index] = 0;
   }    
   return cart;
 };

const ShopContextProvider = (props) => {

    const [cartItems,setCarItems] = useState(getDefaultCart());
    
    const addToCart = (itemId) => {
        setCarItems((prev) => ({...prev,[itemId]:prev[itemId]+1}))
        console.log(cartItems);
    }
    const removeFromCart = (itemId) => {
        setCarItems((prev) => ({...prev,[itemId]:prev[itemId]-1}))
    }
    const ContextValue = {all_product,cartItems,addToCart,removeFromCart};
    return (
        <ShopContext.Provider value={ContextValue}>
            {props.children}
        </ShopContext.Provider>
    )

}

export default ShopContextProvider;