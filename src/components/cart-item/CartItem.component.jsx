import './CartItem.style.scss';
import {useContext} from "react";
import {CartContext} from "../../context/cart.context.jsx";
import {CiCircleRemove} from 'react-icons/ci';

const CartItem = ({cartItem}) => {

    const {imageUrl, name, quantity, price} = cartItem;
    const {removeItemFromCart} = useContext(CartContext);

    const clickHandler = () => removeItemFromCart(cartItem);

    return (
        <div className='cart-item-container'>
            <img src={imageUrl} alt={`${name}`}/>
            <div className='item-details'>
                <span className='name'>{name}</span>
                <span className='price'>
                    {quantity} x ${price}
                </span>
            </div>
            <span onClick={clickHandler}><CiCircleRemove className='remove-from-cart'/></span>
        </div>
    )
}

export default CartItem;