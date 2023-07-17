import './Checkout.style.scss';
import { useContext } from 'react';
import { CartContext } from "../../context/cart.context.jsx";
import CheckoutItem from "../../components/checkout-item/CheckoutItem.component.jsx";
import Button from "../../components/button/Button.component.jsx";

const Checkout = () => {

    const { cartItems, cartTotal, emptyCart } = useContext(CartContext);

    const clickHandler = () => emptyCart();

    return (
        <div className='checkout-container'>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>Description</span>
                </div>
                <div className='header-block'>
                    <span>Quantity</span>
                </div>
                <div className='header-block'>
                    <span>Price</span>
                </div>
                <div className='header-block'>
                    <span>Remove</span>
                </div>
            </div>
            {cartItems.map((cartItem) => (
                <CheckoutItem cartItem={cartItem} key={cartItem.id}/>
            ))}
            <div className='total'>TOTAL: ${cartTotal}</div>
            <div className='total'><Button buttonType='inverted' onClick={clickHandler}>Confirm</Button></div>
        </div>
    )
}

export default Checkout