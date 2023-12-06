import { RouterProvider} from "react-router-dom";
import Layout from "./layouts/Layout.jsx";
import Regiester from "./assets/components/wep/regiester/Regiester.jsx";
import Login from "./assets/components/wep/login/Login.jsx";
import Home from "./assets/components/wep/home/Home.jsx";
import Categories from "./assets/components/wep/categories/Categories.jsx";
import DashboardLayout from "./layouts/DashboardLayout.jsx";
import HomeDashboard from './assets/components/dashboard/home/Home.jsx';
import CategoriesDashboard from './assets/components/dashboard/categories/Categories.jsx';
import CategoriesDetails from "./assets/components/wep/categories/CategoriesDetails.jsx";
import { createBrowserRouter } from "react-router-dom";
import { useEffect, useState } from "react";
import {jwtDecode} from 'jwt-decode';
import Product from "./assets/components/wep/products/Product.jsx";
import Cart from "./assets/components/wep/cart/Cart.jsx";
import { CartContextProvider } from "./assets/components/wep/context/Cartfu.jsx";
export default function App() {

  const [user,setUser] = useState(null);

  const saveCurrentUser = ()=>{
    const token = localStorage.getItem("userToken");
    const decoded = jwtDecode(token);
    setUser(decoded);
  }
  useEffect(()=>{
    if(localStorage.getItem("userToken")){
      saveCurrentUser();
    }
  },[])

  const router = createBrowserRouter([
    {
      path:'/',
      element:<Layout user={user} setUser={setUser} />,
      children:[
          {
            path:'register',

            element:    <Regiester />
            
          },
          {
            path:'login',
            element:<Login saveCurrentUser={saveCurrentUser} />
          },
          {
            // path:'/',

           index:true,
            element:<Home />
          },
          {
            path:'categories',
            element:<Categories />
          },
          {
            path:'products/category/:categoryId',
            element:<CategoriesDetails />
          },
          {
            path:'product/:productId',
            element:<Product />
          },
          {
            path:'cart',
            element:<Cart />
          },
          {
            path:'*',
            element:<h2>page not found --- web</h2>
          }
      ]
    },
    {
        path:'/dashboard',
        element:<DashboardLayout />,
        children:[{
        path:'home',
        element:<HomeDashboard />
      }
      ,{
        path:'categories',
        element:<CategoriesDashboard />
      },
      {
        path:'*',
        element:<h2>page not found --- dashboard</h2>
      }
    ]
 
    }
  ]);
  return (
    <CartContextProvider>

    <RouterProvider router={router} /></CartContextProvider>
  )
}


