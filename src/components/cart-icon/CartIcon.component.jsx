import './CartIcon.style.scss';
import ShoppingBag from "../../assets/shopping-bag.svg";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context.jsx";

const CartIcon = () => {

    const { isCartOpen, setIsCartOpen, cartItemCount } = useContext(CartContext);

    const clickHandle = () => {
       setIsCartOpen(!isCartOpen);
    }

    return (
        <div className='cart-icon-container' onClick={clickHandle}>
            <img src={ShoppingBag} alt='shopping-bag-icon' className='shopping-icon' />
            <span className='item-count'>{cartItemCount}</span>
        </div>
    )
}

export default CartIcon;