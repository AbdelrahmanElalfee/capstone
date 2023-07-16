import Button from "../button/Button.component.jsx";
import './CartDropdown.style.scss';
const CartDropdown = () => {

    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'></div>
            <Button buttonType='inverted'>Checkout</Button>
        </div>
    )
}

export default CartDropdown