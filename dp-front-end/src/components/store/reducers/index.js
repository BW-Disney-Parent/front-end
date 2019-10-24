import { LOGIN_USER_SUCCESS, LOGIN_USER_START, LOGIN_USER_FAILURE, FETCHING_MESSAGE_SUCCESS, FETCHING_MESSAGE_FAILURE, FETCHING_MESSAGE_START, EDIT_SUCCESS, UPDATE_COMPLETE, DELETE_SUCCESS, DELETE_FAILURE } from '../actions/index.js';

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
    error: "",
    currentRequest: {},
    isEditingRequest: false
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

        case FETCHING_MESSAGE_START:
            return {
                ...state,
                isFetching: true,
                error: '',
            }
        case FETCHING_MESSAGE_SUCCESS:
            return {
                ...state,
                isFetching: false,
                error: '',
                parent: action.payload
            }
        case FETCHING_MESSAGE_FAILURE:
            return {
                ...state,
                error: action.payload,
                isFetching: false
            }
        case EDIT_SUCCESS:
            return {
                ...state,
                isEditingRequest: true
            }
        case UPDATE_COMPLETE:
            return {
                ...state,
                isEditingRequest: false
            }
        case DELETE_SUCCESS:
            return {
                ...state
            }
        default:
            return state;
    }
};

export default reducer;