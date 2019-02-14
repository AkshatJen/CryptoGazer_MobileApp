import { combineReducers } from 'redux';
import CryptoReducer from './CryptoReducer';
import AuthReducer from './AuthReducer';
import SentimentReducer from './SentimentReducer';
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
    crypto: CryptoReducer,
    auth: AuthReducer,
    sentiment: SentimentReducer,
    form: formReducer
});