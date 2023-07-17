import {useContext} from "react";
import {CartContext} from "../../context/cart.context.jsx";
import './ProductCard.style.scss';

import Button from "../button/Button.component.jsx";
const ProductCard = ({ product }) => {
    const { name, price, imageUrl } = product;
    const { addItemToCart } = useContext(CartContext);

    const clickHandle = () => addItemToCart(product);

    return (
        <div className='product-card-container'>
            <img src={imageUrl} alt={`${name}`} />
            <div className='footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price} EGP</span>
            </div>
            <Button buttonType='inverted' onClick={clickHandle}>Add to card</Button>
        </div>
    )
}

export default ProductCard