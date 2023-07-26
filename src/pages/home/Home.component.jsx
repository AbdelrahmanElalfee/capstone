import { Outlet} from "react-router-dom";

import CategoriesContainer from "../../components/categories-container/CategoriesContainer.component.jsx";
import React from "react";
import Categories from "../categories/Categories.component.jsx";

const Home = () => {

    return (
        <div>
            <Outlet />
            <CategoriesContainer />
        </div>
    )
}

export default Home;

