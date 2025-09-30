import { NavLink } from 'react-router';
import logoWhite from '../assets/images/logo-white.png';
import mobileLogoWhite from '../assets/images/mobile-logo-white.png';


import './Header.css'
/**
 * 
 * @param {cart} param0 
 * takes a cart array as prop.
 * This array contains product objects
 * @returns 
 */
export function Header({cart}){
    let totalQuantity = 0;

    if (cart) {
        
        // each cart item has a quantity attribute
        cart.forEach(cartItem => {
            totalQuantity += cartItem.quantity

        });
    }
    
   

    return(
        <>
             <div className="header">
                <div className="left-section">
                    <NavLink to="/" className="header-link">
                        <img className="logo"
                            src={logoWhite} alt='white supersimpledev logo'
                             />
                        <img className="mobile-logo"
                            src={mobileLogoWhite}/>
                    </NavLink>
                </div>

                <div className="middle-section">
                    <input className="search-bar" type="text" placeholder="Search" />

                    <button className="search-button">
                        <img className="search-icon" src="images/icons/search-icon.png" />
                    </button>
                </div>

                <div className="right-section">
                    <NavLink className="orders-link header-link" to="/orders">

                        <span className="orders-text">Orders</span>
                    </NavLink>

                    <NavLink className="cart-link header-link" to="/checkout">
                        <img className="cart-icon" src="images/icons/cart-icon.png" />
                        <div className="cart-quantity">{totalQuantity===0 ? "YNaN" : totalQuantity }</div>
                        <div className="cart-text">Cart</div>
                    </NavLink>
                </div>
            </div>
  
        </>
    );
}