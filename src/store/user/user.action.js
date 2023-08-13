import {createAction} from "../../utils/reducers/reducer.js";
import {USER_ACTION_TYPES} from "../../../constants.js";


export const setCurrentUser = (user) => {
    return {type: USER_ACTION_TYPES.SET_CURRENT_USER, payload: user}
};
