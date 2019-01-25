import { combineReducers } from 'redux';
import CryptoReducer from './CryptoReducer';
import AuthReducer from './AuthReducer';

export default combineReducers({
    crypto: CryptoReducer,
    auth: AuthReducer
});