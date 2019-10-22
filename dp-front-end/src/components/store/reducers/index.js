import { FETCHING_MESSAGE_SUCCESS } from '../actions/index.js';

const iniialState = {
    'smurfs': [
        {
            firstname: "Amber",
            lastname: "Sorensen",
            username: "a-soren",
            password: "password",
            id: 0
        }
    ]};

export const reducer = (state = iniialState, action) =>{
    switch(action.type) {
        case FETCHING_MESSAGE_SUCCESS:
            return{
                ...state, 
                parent:action.payload
            }
            default:
                return state;
    }
}  