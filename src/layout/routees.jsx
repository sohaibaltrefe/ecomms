import React from 'react'
import {
    createBrowserRouter,
   
  } from "react-router-dom";
  
  import Categories from '../assets/components/wep/categories/Categories.jsx';
  import Home from '../assets/components/wep/home/Home.jsx';
  import DashboardLayout from './DashboardLayout.jsx';
  import Homes from '../assets/components/dashboard/home/Home.jsx';
  import Categoriess from '../assets/components/dashboard/categories/Categories.jsx';
import Regiester from '../assets/components/wep/regiester/Regiester.jsx';
import Layout from './Layout.jsx';
  export const router = createBrowserRouter([
    {
      path: '/',
      element:<Layout/>,
      children:[
        {
            path:'register',
            element:<Regiester/>   
          },
        {
          path:'home',
          element:<Home/>   
        },
        {
          path:'categories',
          element:<Categories/>
        },
        {
          path:'*',
          element :<h2>hello 404 page not found wep </h2>
  
        }
        
      ]
    },
    {
      path: '/dashboard',
      element:<DashboardLayout/>,
  
      children:[
        {
          path:'home',
          element:<Homes/>
        },
        {
          path:'categories',
          element:<Categoriess/>
        },
        {
          path:'*',
          element :<h2>hello 404 page not found dashboard </h2>
  
        }
        
      ]
    }
  
    
  ]);
