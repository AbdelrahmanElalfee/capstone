export const USER_ACTION_TYPES = {SET_CURRENT_USER: 'SET_CURRENT_USER'};

export const USER_INITIAL_STATE = {
    currentUser: null,
};

export const CART_ACTION_TYPES = {
    SET_CART_ITEMS: 'SET_CART_ITEMS',
    SET_IS_CART_OPEN: 'SET_IS_CART_OPEN'
};

export const CART_INITIAL_STATE = {
    isCartOpen: false,
    cartItems: [],
    cartItemCount: 0,
    cartTotal: 0
}


export const categories = [
    {
        id: 1,
        title: "Hats",
        img: "https://i.ibb.co/cvpntL1/hats.png",
        route: "shop/hats"
    },
    {
        id: 2,
        title: "Jackets",
        img: "https://i.ibb.co/px2tCc3/jackets.png",
        route: "shop/jackets"
    },
    {
        id: 3,
        title: "Sneakers",
        img: "https://i.ibb.co/0jqHpnp/sneakers.png",
        route: "shop/sneakers"
    },
    {
        id: 4,
        title: "Women",
        img: "https://i.ibb.co/GCCdy8t/womens.png",
        route: "shop/women"
    },
    {
        id: 5,
        title: "Mens",
        img: "https://i.ibb.co/R70vBrQ/men.png",
        route: "shop/mens"
    },
];