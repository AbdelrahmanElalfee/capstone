import CategoryContainer from "../category-container/CategoryContainer.component.jsx";
import './CategoriesContainer.style.scss';
const CategoriesContainer = ({categories}) => {
    return (
        <div className="categories-container">
            {categories.map(({title, img, id}) => (
                <CategoryContainer key={id} title={title} img={img}/>
            ))}
        </div>
    )
}

export default CategoriesContainer;