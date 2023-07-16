import { useContext } from 'react';

import { ProductsContext } from "../../context/products.context.jsx";

import ProductCard from "../../components/product-card/ProductCard.component.jsx";

import './Shop.style.scss';

const Shop = () => {
    const { products } = useContext(ProductsContext);
    return (
        <div className='products-container'>
            {products.map(({id, name, imageUrl, price}) => (
                <ProductCard key={id} name={name} imageUrl={imageUrl} price={price}/>
            ))}
        </div>
    )
}

export default Shop