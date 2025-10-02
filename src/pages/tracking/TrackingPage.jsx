import axios from 'axios';
import dayjs from 'dayjs';
import { Header } from '../../components/Header';
import { Link, useParams } from 'react-router';
import './TrackingPage.css'
import { useEffect, useState } from 'react';

export function TrackingPage({cart}) {
    const  {orderId,productId} = useParams();
 
    const [order,setOrder] = useState(null)

    const getTrackingData = async()=>{
        let response = await axios.get(`api/orders/${orderId}?expand=products`)
        setOrder(response.data)
    }
    

    useEffect(()=>{

        getTrackingData()
        
    },[orderId])

    if(!order){return null} // return nothing if no order found in early/first render

    /**
     * order: current order
     * order.products: array of all products in current order
     * product: current product, the product we looking for
     * productItem: current productItem, the productItem we looking for
     * 
     */
    let product = order.products.find(productItem => {
        //productItem.productId === productId
        return productItem.productId === productId // productId from url param
    }
    )
    
    const totalDeliveryTimeMs = product.estimatedDeliveryTimeMs - order.orderTimeMs
    const timePassedMs = dayjs().valueOf() - order.orderTimeMs
    //const deliveryPercent = (timePassedMs / totalDeliveryTimeMs) * 100
    

    return (
        <>
            <title>Tracking</title>

             <Header cart={cart}/>
             <link rel="icon" type="image/svg+xml" href="images/favicon/tracking-favicon.png" />

            <div className="tracking-page">
                <div className="order-tracking">
                    <Link className="back-to-orders-link link-primary" to="/orders">
                        View all orders 
                    </Link>

                    <div className="delivery-date">
                        Arriving on {dayjs(product.estimatedDeliveryTimeMs).format('dddd, MMMM D ')}
                                                                            
                        
                    </div>

                    <div className="product-info">
                        
                        {product.product.name || "No product found"}
                    </div>

                    <div className="product-info">
                        Quantity: {product.quantity}
                    </div>

                    <img className="product-image" src={product.product.image} loading="lazy" />

                    <div className="progress-labels-container">
                        <div className="progress-label">
                            Preparing
                        </div>
                        <div className="progress-label current-status">
                            Shipped
                        </div>
                        <div className="progress-label">
                            Delivered
                        </div>
                    </div>

                    <div className="progress-bar-container">
                        <div className="progress-bar" style={{width: `${ (timePassedMs / totalDeliveryTimeMs) * 100}%`}}></div>
                    </div>
                </div>
            </div>


        </>
    );

}