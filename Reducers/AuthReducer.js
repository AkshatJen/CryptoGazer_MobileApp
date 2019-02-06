import {
    REGULAR_SIGNIN,
    REGULAR_SIGNIN_SUCCESS,
    REGULAR_SIGNIN_FAIL,
    REGISTER_USER,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAIL,
    FACEBOOK_SIGNIN,
    FACEBOOK_SIGNIN_SUCCESS,
    FACEBOOK_SIGNIN_FAIL
} from './../Utils/ActionTypes'

const initialState = {
    isRegistering: false,
    isSigningIn: false,
    userCredentials: null,
    hasError: false,
    errorMessage: null
};

export default function (state = initialState, action) {

    switch(action.type){

        case REGISTER_USER:
            return Object.assign({}, state, {
                isRegistering: true,
                isSigningIn: false,
                userCredentials: null,
                hasError: false,
                errorMessage: null
            });

        case REGISTER_USER_SUCCESS:
            return Object.assign({}, state, {
                isRegistering: false,
                isSigningIn: false,
                userCredentials: null,
                hasError: false,
                errorMessage: null
            });

        case REGISTER_USER_FAIL:
            return Object.assign({}, state, {
                isRegistering: false,
                isSigningIn: false,
                userCredentials: null,
                hasError: true,
                errorMessage: action.errorMsg
            });

        case REGULAR_SIGNIN:
            return Object.assign({}, state, {
                isRegistering: false,
                isSigningIn: true,
                userCredentials: null,
                hasError: false,
                errorMessage: null
            });

        case REGULAR_SIGNIN_SUCCESS:
            return Object.assign({}, state, {
                isRegistering: false,
                isSigningIn: false,
                userCredentials: action.userCredentials,
                hasError: false,
                errorMessage: null
            });

        case REGULAR_SIGNIN_FAIL:
            return Object.assign({}, state, {
                isRegistering: false,
                isSigningIn: false,
                userCredentials: null,
                hasError: true,
                errorMessage: action.errorMsg
            });

        case FACEBOOK_SIGNIN:
            return Object.assign({}, state, {

            });

        case FACEBOOK_SIGNIN_SUCCESS:
            return Object.assign({}, state, {

            });

        case FACEBOOK_SIGNIN_FAIL:
            return Object.assign({}, state, {

            });

        default:
            return state;
    }
}