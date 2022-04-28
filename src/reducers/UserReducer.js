import {ACTION_TYPE} from '../actions/global'

const initalState = {
    USER: null,
} 


export default function globalReducer(state = initalState, action) {
    switch (action.type) {
        case ACTION_TYPE.SAVE_USER_DATA:
            console.log(action.payload);
            return {
                ...state,
                USER: action.payload
            }
        default:
            return state;
    }
}