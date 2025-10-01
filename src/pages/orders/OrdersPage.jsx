import axios from 'axios';
import './OrdersPage.css'
import { Header } from '../../components/Header.jsx';
import { useEffect, useState } from 'react';
import { OrdersGrid } from './OrdersGrid.jsx';


export function OrdersPage({cart}) {
    const [orders,setOrders] = useState([]);

    useEffect(() => {
        axios
            .get('/api/orders?expand=products')
            .then(response => {
            setOrders(response.data);
        })
    },[]);

    return (
        <>
            <title>YN Orders</title>
            <link rel="icon" type="image/svg+xml" href="images/favicon/orders-favicon.png" />

            <Header cart = {cart}/>

            <div className="orders-page">
                <div className="page-title">Your Orders</div>

                <OrdersGrid orders={orders}/>
            </div>


        </>
    );
}