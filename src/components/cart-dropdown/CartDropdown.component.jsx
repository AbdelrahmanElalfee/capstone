import { useContext } from "react";
import { useNavigate } from 'react-router-dom';
import { CartContext } from "../../context/cart.context.jsx";
import Button from "../button/Button.component.jsx";
import './CartDropdown.style.scss';
import CartItem from "../cart-item/CartItem.component.jsx";
const CartDropdown = () => {

    const { cartItems, setIsCartOpen, isCartOpen } = useContext(CartContext);
    const navigate = useNavigate();

    const clickHandler = () => {
        setIsCartOpen(!isCartOpen);
        navigate('/checkout');
    }

    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {cartItems.length ? (
                    cartItems.map((cartItem) => (
                        <CartItem key={cartItem.id} cartItem={cartItem} />
                    ))
                ) : (
                    <span className='empty-message'>Your cart is empty</span>
                )}
            </div>
            <Button buttonType='inverted' onClick={clickHandler}>Checkout</Button>
        </div>
    )
}

export default CartDropdown