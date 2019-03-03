import {
    REGULAR_SIGNIN,
    REGULAR_SIGNIN_SUCCESS,
    REGULAR_SIGNIN_FAIL,
    REGISTER_USER,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAIL,
    FACEBOOK_SIGNIN,
    FACEBOOK_SIGNIN_SUCCESS,
    FACEBOOK_SIGNIN_FAIL,
    SIGN_USER_OUT,
    SIGN_USER_OUT_FAILURE,
    SIGN_USER_OUT_SUCCESS,
    RETRIEVE_USER_WATCHLIST,
    RETRIEVE_USER_WATCHLIST_SUCCESS,
    RETRIEVE_USER_WATCHLIST_FAIL,
    UPDATE_USER_WATCHLIST,
    UPDATE_USER_WATCHLIST_SUCCESS,
    UPDATE_USER_WATCHLIST_FAIL
} from './../Utils/ActionTypes'

const initialState = {
    isRegistering: false,
    isSigningOut: false,
    isSigningIn: false,
    isRetrievingWatchlist: false,
    isUpdatingWatchlist: false,
    userCredentials: null,
    userWatchlist: null,
    hasError: false,
    errorMessage: null
};

export default function (state = initialState, action) {

    switch(action.type){

        case REGISTER_USER:
            return Object.assign({}, state, {
                isRegistering: true,
                isSigningOut: false,
                isSigningIn: false,
                userCredentials: null,
                hasError: false,
                errorMessage: null
            });

        case REGISTER_USER_SUCCESS:
            return Object.assign({}, state, {
                isRegistering: false,
                isSigningOut: false,
                isSigningIn: false,
                userCredentials: null,
                hasError: false,
                errorMessage: null
            });

        case REGISTER_USER_FAIL:
            return Object.assign({}, state, {
                isRegistering: false,
                isSigningOut: false,
                isSigningIn: false,
                userCredentials: null,
                hasError: true,
                errorMessage: action.errorMsg
            });

        case REGULAR_SIGNIN:
            return Object.assign({}, state, {
                isRegistering: false,
                isSigningOut: false,
                isSigningIn: true,
                userCredentials: null,
                hasError: false,
                errorMessage: null
            });

        case REGULAR_SIGNIN_SUCCESS:
            return Object.assign({}, state, {
                isRegistering: false,
                isSigningOut: false,
                isSigningIn: false,
                userCredentials: action.userCredentials,
                hasError: false,
                errorMessage: null
            });

        case REGULAR_SIGNIN_FAIL:
            return Object.assign({}, state, {
                isRegistering: false,
                isSigningOut: false,
                isSigningIn: false,
                userCredentials: null,
                hasError: true,
                errorMessage: action.errorMsg
            });

        /*
        / TODO - Update these dispatches when integrating a FB Login
         */
        case FACEBOOK_SIGNIN:
            return Object.assign({}, state, {

            });

        case FACEBOOK_SIGNIN_SUCCESS:
            return Object.assign({}, state, {

            });

        case FACEBOOK_SIGNIN_FAIL:
            return Object.assign({}, state, {

            });

        case SIGN_USER_OUT:
            return Object.assign({}, state, {
                isRegistering: false,
                isSigningOut: true,
                isSigningIn: false,
                userCredentials: null,
                hasError: false,
                errorMessage: null
            });

        case SIGN_USER_OUT_SUCCESS:
            return Object.assign({}, state, {
                isRegistering: false,
                isSigningIn: false,
                userCredentials: null,
                hasError: false,
                errorMessage: null
            });

        case SIGN_USER_OUT_FAILURE:
            return Object.assign({}, state, {
                isRegistering: false,
                isSigningIn: false,
                userCredentials: null,
                hasError: true,
                errorMessage: action.errorMessage
            });

        case RETRIEVE_USER_WATCHLIST:
            return Object.assign({}, state, {
                isRetrievingWatchlist: true,
                userWatchlist: null,
                hasError: false,
                errorMessage: null
            });

        case RETRIEVE_USER_WATCHLIST_SUCCESS:
            return Object.assign({}, state, {
                isRetrievingWatchlist: false,
                userWatchlist: action.userWatchlist,
                hasError: false,
                errorMessage: null
            });

        case RETRIEVE_USER_WATCHLIST_FAIL:
            return Object.assign({}, state, {
                isRetrievingWatchlist: false,
                userWatchlist: null,
                hasError: true,
                errorMessage: action.errorMsg
            });

        case UPDATE_USER_WATCHLIST:
            return Object.assign({}, state, {
                isUpdatingWatchlist: true,
                hasError: false,
                errorMessage: null
            });

        case UPDATE_USER_WATCHLIST_SUCCESS:
            return Object.assign({}, state, {
                isUpdatingWatchlist: false,
                hasError: false,
                errorMessage: null
            });

        case UPDATE_USER_WATCHLIST_FAIL:
            return Object.assign({}, state, {
                isUpdatingWatchlist: false,
                hasError: true,
                errorMessage: action.errorMsg
            });

        default:
            return state;
    }
}