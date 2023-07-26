import CategoryContainer from "../category-container/CategoryContainer.component.jsx";
import './CategoriesContainer.style.scss';
import {categories} from "../../../constants.js";

const CategoriesContainer = () => {

    return (
        <div className="categories-container">
            {categories.map((category) => (
                <CategoryContainer key={category.id} category={category}/>
            ))}
        </div>
    )
}

export default CategoriesContainer;