import {createContext, useState, useEffect, useReducer} from 'react';

export const addCartItem = (cartItems, productToAdd) => {
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === productToAdd.id
    );

    if (existingCartItem) {
        return cartItems.map((cartItem) =>
            cartItem.id === productToAdd.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        );
    }

    return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const reduceCartItem = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === cartItemToRemove.id
    );

    if (existingCartItem.quantity === 1) {
        return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
    }

    return cartItems.map((cartItem) =>
        cartItem.id === cartItemToRemove.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
    );
};

export const removeCartItem = (cartItems, productToRemove) => {
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === productToRemove.id
    );

    if (existingCartItem) {
        return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id);
    }

    return cartItems;
}

const INITIAL_VALUES = {
    isCartOpen: false,
    cartItems: [],
    cartItemCount: 0,
    cartTotal: 0
}

const ACTION_TYPES = {
    'SET_CART_ITEMS': 'SET_CART_ITEMS',
    'SET_IS_CART_OPEN': 'SET_IS_CART_OPEN'
}

const cartReducer = (state, action) => {
    const {type, payload} = action;

    switch (type) {
        case ACTION_TYPES.SET_CART_ITEMS:
            return {
                ...state,
                ...payload
            }
        case ACTION_TYPES.SET_IS_CART_OPEN:
            return {
                ...state,
                isCartOpen: payload
            }
        default:
            throw new Error(`Unhandled type: ${type}`);
    }
}

export const CartContext = createContext({
    isCartOpen: false,
    setIsOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    cartItemCount: 0,
    removeItemFromCart: () => {},
    reduceItemQuantity: () => {},
    cartTotal: 0,
    emptyCart: () => {},
});

export const CartProvider = ({ children }) => {
    const [{ cartItems, cartItemCount, cartTotal, isCartOpen }, dispatch] = useReducer(cartReducer, INITIAL_VALUES);

    const updateCartItemsReducer = (newCartItems) => {
        const count = newCartItems.reduce(
            (total, cartItem) => total + cartItem.quantity,
            0
        );

        const newCartTotal = newCartItems.reduce(
            (total, cartItem) => total + cartItem.quantity * cartItem.price,
            0
        );

        dispatch({type: ACTION_TYPES.SET_CART_ITEMS, payload: {cartItems: newCartItems, cartTotal: newCartTotal, cartItemCount: count}});
    }

    const addItemToCart = (product) => {
        const newCartItems = addCartItem(cartItems, product);
        updateCartItemsReducer(newCartItems);
    }

    const removeItemFromCart = (product) => {
        const newCartItems = removeCartItem(cartItems, product);
        updateCartItemsReducer(newCartItems);
    }
    const reduceItemQuantity = (product) => {
        const newCartItems = reduceCartItem(cartItems, product);
        updateCartItemsReducer(newCartItems);
    }

    const emptyCart = () => {
        updateCartItemsReducer([]);
    }

    const setIsCartOpen = (bool) => {
        dispatch({type: ACTION_TYPES.SET_IS_CART_OPEN, payload: bool})
    }

    const value = {
        isCartOpen,
        setIsCartOpen,
        cartItems,
        addItemToCart,
        cartItemCount,
        removeItemFromCart,
        reduceItemQuantity,
        cartTotal,
        emptyCart,
    };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};