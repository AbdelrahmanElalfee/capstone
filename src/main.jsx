import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./context/user.context.jsx";
import { CategoriesProvider } from "./context/categories.context.jsx";
import { CartProvider } from "./context/cart.context.jsx";
import {Provider} from "react-redux";
import {Store} from "./store/store.js";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={Store}>
            <BrowserRouter>
                <CategoriesProvider>
                    <CartProvider>
                        <App/>
                    </CartProvider>
                </CategoriesProvider>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
)
