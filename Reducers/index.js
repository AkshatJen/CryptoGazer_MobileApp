import { combineReducers } from 'redux';
import CryptoReducer from './CryptoReducer';
import AuthReducer from './AuthReducer';
import SentimentReducer from './SentimentReducer';

export default combineReducers({
    crypto: CryptoReducer,
    auth: AuthReducer,
    sentiment: SentimentReducer
});