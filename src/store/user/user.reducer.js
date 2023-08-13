import {USER_ACTION_TYPES, USER_INITIAL_STATE} from "../../../constants.js";

export const userReducer = (state = USER_INITIAL_STATE, action) => {
    const { type, payload } = action;

    switch (type) {
        case USER_ACTION_TYPES.SET_CURRENT_USER:
            return { ...state, currentUser: payload };
        default:
            return state;
    }
};