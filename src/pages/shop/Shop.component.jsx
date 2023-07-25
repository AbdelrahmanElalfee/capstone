import {Route, Routes} from "react-router-dom";
import Categories from "../categories/Categories.component.jsx";
import {Category} from "../category/Category.component.jsx";

const Shop = () => {
    return (
        <Routes>
            <Route index element={<Categories />} />
            <Route path=':category' element={<Category />} />
        </Routes>
    )
}

export default Shop