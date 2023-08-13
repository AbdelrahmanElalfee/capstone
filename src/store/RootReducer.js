import { combineReducers } from "redux";
import {userReducer} from "./user/user.reducer.js";

export const RootReducer = combineReducers({
    user: userReducer,
});