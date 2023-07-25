import './Category.style.scss';
import { useParams } from "react-router-dom";
import {useContext, useState, useEffect, Fragment} from "react";
import { CategoriesContext } from "../../context/categories.context.jsx";
import ProductCard from "../../components/product-card/ProductCard.component.jsx";

export const Category = () => {
    const { category } = useParams();
    const { categoriesMap } = useContext(CategoriesContext);
    const [ products, setProducts ] = useState(categoriesMap[category]);

    useEffect(() => {
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap])

    return (
        <Fragment>
            <h2 className='category-page-title'>{category.toUpperCase()}</h2>
            <div className='category-page-container'>
                {products &&
                    products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
            </div>
        </Fragment>
    )
}
