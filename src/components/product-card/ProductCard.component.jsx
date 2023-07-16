import './ProductCard.style.scss';

import Button from "../button/Button.component.jsx";
const ProductCard = ({name, imageUrl, price}) => {

    return (
        <div className='product-card-container'>
            <img src={imageUrl} alt={`${name}`} />
            <div className='footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price} EGP</span>
            </div>
            <Button buttonType='inverted'>Add to card</Button>
        </div>
    )
}

export default ProductCard