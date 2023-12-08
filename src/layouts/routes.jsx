import Layout from "./Layout.jsx";
import Regiester from "./../assets/components/wep/regiester/Regiester.jsx";
import Login from "./../assets/components/wep/login/Login.jsx";
import Home from "./../assets/components/wep/home/Home.jsx";
import Categories from "./../assets/components/wep/categories/Categories.jsx";
import DashboardLayout from "./DashboardLayout.jsx";
import HomeDashboard from './../assets/components/dashboard/home/Home.jsx';
import CategoriesDashboard from './../assets/components/dashboard/categories/Categories.jsx';
import CategoriesDetails from "./../assets/components/wep/categories/CategoriesDetails.jsx";
import { createBrowserRouter } from "react-router-dom";
import Product from "./../assets/components/wep/products/Product.jsx";
import Cart from "./../assets/components/wep/cart/Cart.jsx";
import ProtectedRoute from "../assets/components/wep/protectedRoute/ProtectedRoute.Jsx";

   export const router = createBrowserRouter([
    {
      path:'/',
      element:<Layout/>,
      children:[
          {
            path:'register',
            element:<Regiester />
            
          },
          {
            path:'login',
           
            element: <Login  />
          },
          {
            // path:'/',
            index:true,
            element:<Home />
          },
          {
            path:'cart',
            element:
            <ProtectedRoute >     
                  <Cart />
            </ProtectedRoute>
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