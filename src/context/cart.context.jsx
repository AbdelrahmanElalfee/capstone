import { createContext, useState, useEffect } from 'react';

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
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartItemCount, setCartItemCount] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);

    useEffect(() => {
        const count = cartItems.reduce(
            (total, cartItem) => total + cartItem.quantity,
            0
        );
        setCartItemCount(count);
    }, [cartItems]);

    useEffect(() => {
        const newCartTotal = cartItems.reduce(
            (total, cartItem) => total + cartItem.quantity * cartItem.price,
            0
        );
        setCartTotal(newCartTotal);
    }, [cartItems]);

    const addItemToCart = (product) =>
        setCartItems(addCartItem(cartItems, product));

    const removeItemFromCart = (product) =>
        setCartItems(removeCartItem(cartItems, product));

    const reduceItemQuantity = (product) =>
        setCartItems(reduceCartItem(cartItems, product));

    const emptyCart = () => setCartItems([]);

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