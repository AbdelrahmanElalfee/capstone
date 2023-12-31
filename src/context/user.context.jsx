import { createContext, useReducer } from 'react';
import {
    OnAuthStateChangedListener,
    createUserDocumentFromAuth,
} from '../utils/firebase/firebase.utils';
import {USER_ACTION_TYPES} from "../../constants.js";

export const UserContext = createContext({
    setCurrentUser: () => null,
    currentUser: null,
});

const ACTION_TYPES = {
    SET_CURRENT_USER: 'SET_CURRENT_USER',
};

const INITIAL_STATE = {
    currentUser: null,
};


const userReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case USER_ACTION_TYPES.SET_CURRENT_USER:
            return { ...state, currentUser: payload };
        default:
            throw new Error(`Unhandled type ${type}`);
    }
};

export const UserProvider = ({children}) => {
    const [ { currentUser }, dispatch ] = useReducer(userReducer, INITIAL_STATE);

    const setCurrentUser = (user) =>
        dispatch({type: USER_ACTION_TYPES.SET_CURRENT_USER, payload: user});



    const value = {currentUser, setCurrentUser};

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}