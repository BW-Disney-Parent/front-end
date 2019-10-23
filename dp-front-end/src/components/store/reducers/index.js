import { FETCHING_MESSAGE_SUCCESS } from '../actions/index.js';

const initialState = {
    'Parents': [
        {
            firstname: "Amber",
            lastname: "Sorensen",
            username: "a-soren",
            password: "password",
            requesterUserID: 0
        }

    ],
    'currentUser': {}
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHING_MESSAGE_SUCCESS:
            return {
                ...state,
                parent: action.payload
            }
        default:
            return state;
    }
}

export default reducer;