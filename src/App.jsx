import { Routes, Route } from 'react-router';
import { useEffect, useState } from 'react';

import './App.css'

import HomePage from './pages/home/HomePage';
import CheckoutPage from './pages/checkout/CheckoutPage';
import { OrdersPage } from './pages/orders/OrdersPage';
import { TrackingPage } from './pages/tracking/TrackingPage';
import { ErrorPage } from './pages/error/ErrorPage';
import axios from 'axios';

function App() {
  const [cart, setCart] = useState([])
  
   const loadCart = async() => {
        const response = await axios.get('api/cart-items?expand=product')
        setCart(response.data)
    }

    
    useEffect(() => {

        loadCart();
        
    },[]);


  return(
    <>
      <Routes>
        
        <Route index element={<HomePage cart={cart} loadCart={loadCart}/>}/>
        <Route path="checkout" element={<CheckoutPage cart={cart}/>}/>
        <Route path="orders" element={<OrdersPage cart={cart} />}/>
        <Route path="tracking/:orderId/:productId" element={<TrackingPage cart={cart} />} />
        <Route path="*" element={<ErrorPage cart={cart} />} />

      </Routes>
     
    </>
  );
}

export default App
