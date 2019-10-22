import { FETCHING_MESSAGE_SUCCESS } from '../actions/index.js';

const iniialState = {
    'Parents': [
        {
            firstname: "Amber",
            lastname: "Sorensen",
            username: "a-soren",
            password: "password",
            id: 0
        }
    ]};

const reducer = (state = iniialState, action) =>{
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

export default reducer;