import axios from 'axios';
//import { apiBaseURL } from './../Utils/Constants';
import {
    FETCHING_SENTIMENT_DATA,
    FETCHING_SENTIMENT_DATA_SUCCESS,
    FETCHING_SENTIMENT_DATA_FAIL,
} from './../Utils/ActionTypes';


apiBaseURL = 'https://immense-tundra-52040.herokuapp.com';

export default function FetchSentimentData(coinName) {
    return dispatch => {
        dispatch({type: FETCHING_SENTIMENT_DATA});

        axios.get(`${apiBaseURL}/sentimentAPI/coinSentiments/${coinName}`)
        .then(jsn => {
            return dispatch({type: FETCHING_SENTIMENT_DATA_SUCCESS, coinSentiments: jsn});
        })
        .catch(() => {
            return dispatch({type: FETCHING_SENTIMENT_DATA_FAIL, errorMessage: "Failed to fetch Sentiment Data"});
        });
    }
}