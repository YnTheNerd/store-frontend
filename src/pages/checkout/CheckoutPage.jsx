import axios from 'axios';
import { useState, useEffect } from 'react';
import './CheckoutPage.css'
import './CheckoutHeader.jsx'
import { CheckoutHeader } from './CheckoutHeader.jsx';
import { OrderSummary } from './OrderSummary.jsx';
import { PaymentSummary } from './PaymentSummary.jsx';
//import { useState } from 'react';



function CheckoutPage({cart}) {
 
    const [deliveryOptions, setDeliveryOptions]=useState([]);
    const [paymentSummary,setPaymentSummary] = useState(null)
    
    /**
     * Recuperer le resumé de la commande
     */
    const fetchCheckoutData = async () => {
        const response = await axios.get('/api/delivery-options?expand=estimatedDeliveryTime')
        setDeliveryOptions(response.data)
    }

    /**
     * Pour recuperer le resumé de ce qu'il faut payer avec taxe et bla bla
     */
    const fetchPaymentSummary = async () => {
        const response = await axios.get('/api/payment-summary')
        setPaymentSummary(response.data)
    }

    useEffect(() => {

        fetchCheckoutData() 

        fetchPaymentSummary()  

    }, []);

    return (
        <>
            <link rel="icon" type="image/svg+xml" href="images/favicon/cart-favicon.png" />
            <title>YN checkout</title>

            <CheckoutHeader/>

            <div className="checkout-page">
                <div className="page-title">Review your order</div>

                <div className="checkout-grid">

                    <OrderSummary deliveryOptions={deliveryOptions} cart={cart}/>

                    <PaymentSummary paymentSummary={paymentSummary}/>
                </div>
            </div>

        </>

    );
}


export default CheckoutPage;