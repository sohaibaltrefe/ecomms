import axios from 'axios';
import React, { createContext, useState } from 'react'
import { toast } from 'react-toastify';

export const CartContext= createContext(null);

export function CartContextProvider({children}){
const addToCartContext = async (productId)=>{
  try {

    const token=localStorage.getItem("userToken")
    console.log(token)
    const {data}=await axios.post(`${import.meta.env.VITE_API_URL}/cart`,
    {productId},
    {Headers:{Authorization:`Tariq__${token}`}}
    )
    if(data.message=="success"){
      toast.success('product added succefully', {
          position: "bottom-left",
          autoClose: false,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          });}
return data;
  } catch (error) {
    console.log(error);
  }
}
  return <CartContext.Provider value={{addToCartContext}}>
    {children}
  </CartContext.Provider>;
}
