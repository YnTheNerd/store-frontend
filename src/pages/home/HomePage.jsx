
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Header } from '../../components/Header.jsx';
//import { products } from '../../starting-code/ecommerce-project/data/products.js';
import { ProductCard } from './ProductCard.jsx';

import './HomePage.css';


function HomePage({cart,loadCart}) {
    const [products,setProducts] = useState([])
    
    const getProducts = async () => {
        const response = await axios.get('/api/products');
        setProducts(response.data);
    }

    useEffect(()=>{
       getProducts()

    },[])//empty dependency array so code only runs once, loading products on Homepage ONCE too

    return (
        <>
            <link rel="icon" type="image/svg+xml" href="images/favicon/home-favicon.png" />
            
            <Header cart={cart} />

            <div className="home-page">
                <div className="products-grid">

                    {products.map((product) => {
                        return (
                            <ProductCard key={product.id} product={product} loadCart={loadCart} />
                        );
                    }

                    )

                    }

                </div>
            </div>

        </>
    )
}


export default HomePage