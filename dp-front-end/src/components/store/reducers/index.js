import { FETCHING_MESSAGE_SUCCESS, LOGIN_USER_SUCCESS, LOGIN_USER_START, LOGIN_USER_FAILURE } from '../actions/index.js';

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
    currentUser: {},
    isLoggingIn: false,
    loggingInErr: "",
    isFetching: false,
    error: ""
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_USER_START:
            return {
                ...state,
                isLoggingIn: true
            }
        case LOGIN_USER_SUCCESS:
            console.log(action.payload);
            return {
                ...state,
                isLoggingIn: false,
                currentUser: action.payload
            }
        case LOGIN_USER_FAILURE:
            return {
                ...state,
                isLoggingIn: false,
                loggingInErr: action.payload
            }



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