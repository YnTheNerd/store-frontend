
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Header } from '../components/Header';
//import { products } from '../../starting-code/ecommerce-project/data/products.js';
import { ProductCard } from '../components/ProductCard.jsx';

import './HomePage.css';


function HomePage({cart}) {
    const [products,setProducts] = useState([])
    

    

    useEffect(()=>{
        axios
            .get('/api/products')
            .then((response) => {
                setProducts(response.data);
                // console.log(response.data.slice(0,3));
            })

    },[])//empty dependency array so code only runs once, loading products on Homepage ONCE too


    
   


    return (
        <>
            <link rel="icon" type="image/svg+xml" href="images/favicon/home-favicon.png" />
            
            <Header cart={cart} />

            <div className="home-page">
                <div className="products-grid">

                    {products.map((product) => {
                        return (
                            <ProductCard key={product.id} product={product} />
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