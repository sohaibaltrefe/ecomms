import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { QueryClient, QueryClientProvider } from 'react-query'
import UserContextprovider from './assets/components/wep/context/User.jsx'
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(

    <>  
        <UserContextprovider>

     <QueryClientProvider client={queryClient}>
          <ToastContainer />
        <App />

    </QueryClientProvider></UserContextprovider>
    </>
)







