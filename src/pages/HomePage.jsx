
import { Header } from '../components/Header';
import { products } from '../../starting-code/ecommerce-project/data/products.js';
import { ProductCard } from '../components/ProductCard.jsx';
import './HomePage.css';


function HomePage() {
    fetch('http://localhost:3000/api/products')

        .then((response) => {

            return response.json()
        }).then((data) => {
            console.log(data)
        })
    

    return (
        <>
            <link rel="icon" type="image/svg+xml" href="images/favicon/home-favicon.png" />
            <Header />

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