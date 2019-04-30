import { combineReducers } from 'redux';
import CryptoReducer from './CryptoReducer';
import SentimentReducer from './SentimentReducer';

export default combineReducers({
    crypto: CryptoReducer,
    sentiment: SentimentReducer,
});