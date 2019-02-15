import axios from 'axios';
import { apiBaseURL } from './../Utils/Constants';
import {
    FETCHING_SENTIMENT_DATA,
    FETCHING_SENTIMENT_DATA_SUCCESS,
    FETCHING_SENTIMENT_DATA_FAIL,
} from './../Utils/ActionTypes';

export default function FetchSentimentData() {
    return dispatch => {
        dispatch({type: FETCHING_SENTIMENT_DATA});

        axios.get(`${apiBaseURL}/sentimentAPI/sentiments`)
        .then(jsn => {
            return dispatch({type: FETCHING_SENTIMENT_DATA_SUCCESS, coinSentiments: jsn});
        })
        .catch(err => {
            return dispatch({type: FETCHING_SENTIMENT_DATA_FAIL, errorMessage: err});
        });
    }
}