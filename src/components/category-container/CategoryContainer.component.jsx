import './CategoryContainer.style.scss'
import { useNavigate } from "react-router-dom";

const CategoryContainer = ({category}) => {
    const {img, title, route} = category
    const navigate = useNavigate();

    const onNavigateHandler = () => navigate(route);

    return (
        <div className="category-container" onClick={onNavigateHandler}>
            <div className="background-image" style={{
                backgroundImage: `url(${img})`,
            }}>
            </div>
            <div className="category-body-container">
                    <h2>{title}</h2>
                    <p>Shop now.</p>
            </div>
        </div>
    )
}

export default CategoryContainer;