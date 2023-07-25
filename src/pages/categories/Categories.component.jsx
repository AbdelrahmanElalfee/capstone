import { useContext } from 'react';
import { CategoriesContext } from "../../context/categories.context.jsx";
import { CategoryPreview } from "../../components/categories-preview/CategoryPreview.component.jsx";
import './Categories.style.scss';


const Categories = () => {
    const { categoriesMap } = useContext(CategoriesContext);
    return (
        <div className='shop-container'>
            {Object.keys(categoriesMap).map((key) => {
                const products = categoriesMap[key];
                return <CategoryPreview key={key} title={key} products={products} />;
            })}
        </div>
    )
}

export default Categories
