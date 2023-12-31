import { createContext, useState, useEffect } from 'react';

import { getCollectionAndDocument } from "../utils/firebase/firebase.utils.js";
// import {SHOP_DATA} from '../shop-data.js';

export const CategoriesContext = createContext({
    categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {

    const [categoriesMap, setCategoriesMap] = useState({});

    useEffect(()=> {
        const getCategoriesMap = async () => {
            const categoriesMap = await getCollectionAndDocument();
            setCategoriesMap(categoriesMap);
        }
        getCategoriesMap();
    }, [])

    const value = { categoriesMap };

    return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
};