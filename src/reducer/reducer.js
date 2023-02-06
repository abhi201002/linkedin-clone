import { SET_USER } from "../action/actionType";

const initialstate = {
    user: null,
};

const reducer = (state = initialstate,action) =>{
    switch(action.type) {
        case SET_USER:
            return{
                ...state,
                user: action.user,
            };
        case "Sign_Out":
            return{
                ...state,
                user: null,
            }
        default:
            return state;
    }
}

export {reducer}