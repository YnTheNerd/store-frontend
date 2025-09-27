import './CheckoutHeader.css'
import { Link } from 'react-router';

import mobileLogo from '../../assets/images/mobile-logo.png';
import logo from '../../assets/images/logo.png';

export function CheckoutHeader({totalQuantity}) {


    return (
        <>
            <div className="checkout-header">
                <div className="header-content">
                    <div className="checkout-header-left-section">
                        <Link to="/">
                            <img className="logo" src={logo}/>
                            <img className="mobile-logo" src={mobileLogo}/>
                        </Link>
                    </div>

                    <div className="checkout-header-middle-section">
                        Checkout (<Link className="return-to-home-link"
                            to="/">{totalQuantity} items</Link>)
                    </div>

                    <div className="checkout-header-right-section">
                        <img src="images/icons/checkout-lock-icon.png" />
                    </div>
                </div>
            </div>
        </>
    );
}