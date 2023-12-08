import { RouterProvider} from "react-router-dom";

import { CartContextProvider } from "./assets/components/wep/context/Cartfu.jsx";
import {router} from "./layouts/routes.jsx"
import { useContext, useEffect } from "react";
import { UserContext } from "./assets/components/wep/context/User.jsx";
export default function App() {
let {setUserToken}=useContext(UserContext);
useEffect(()=>{
  if(localStorage.getItem("userToken") != null){
    setUserToken(localStorage.getItem("userToken"));
  }
},[])
  return (
      <CartContextProvider>
      <RouterProvider router={router} />
      </CartContextProvider>
    
  )
}


