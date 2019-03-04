import { combineReducers } from 'redux';
import CryptoReducer from './CryptoReducer';
import AuthReducer from './AuthReducer';
import SentimentReducer from './SentimentReducer';
import { reducer as formReducer } from 'redux-form';
import { REGULAR_SIGNIN_SUCCESS, REGISTER_USER_SUCCESS } from './../Utils/ActionTypes';

export default combineReducers({
    crypto: CryptoReducer,
    auth: AuthReducer,
    sentiment: SentimentReducer,
    form: formReducer.plugin({
        login: (state, action) => {
            switch(action.type) {
                case REGULAR_SIGNIN_SUCCESS:
                    return undefined;
                case REGISTER_USER_SUCCESS:
                    return undefined;
                default:
                    return state;
            }
        }
    })
});