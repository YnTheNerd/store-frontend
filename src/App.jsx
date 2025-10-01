import { Routes, Route } from 'react-router';
import { useEffect, useState } from 'react';

import './App.css'

import HomePage from './pages/home/HomePage';
import CheckoutPage from './pages/checkout/CheckoutPage';
import { OrdersPage } from './pages/orders/OrdersPage';
import { TrackingPage } from './pages/TrackingPage';
import { ErrorPage } from './pages/ErrorPage';
import axios from 'axios';

function App() {
  const [cart, setCart] = useState([])
  
    useEffect(() => {

        const fetchAppData = async()=>{
            const response = await axios.get('/api/cart-items?expand=products')
            
            setCart(response.data);
        }
        
        fetchAppData();
    },[]);


  return(
    <>
      <Routes>
        
        <Route index element={<HomePage cart={cart} setCart={setCart}/>}/>
        <Route path="checkout" element={<CheckoutPage cart={cart}/>}/>
        <Route path="orders" element={<OrdersPage cart={cart} />}/>
        <Route path="tracking" element={<TrackingPage cart={cart} />}/>
        <Route path="*" element={<ErrorPage cart={cart} />}/>

      </Routes>
     
    </>
  );
}

export default App
