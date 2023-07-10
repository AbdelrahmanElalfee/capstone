import './CategoryContainer.style.scss'
const CategoryContainer = ({title, img}) => {
    return (
        <div className="category-container">
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