import {
    FETCHING_SENTIMENT_DATA,
    FETCHING_SENTIMENT_DATA_SUCCESS,
    FETCHING_SENTIMENT_DATA_FAIL,
} from './../Utils/ActionTypes';

const initialState = {
    isFetching: false,
    coinSentiments: [],
    hasError: false,
    errorMessage: null
}

export default function(state = initialState, action) {
    switch(action.type){

        case FETCHING_SENTIMENT_DATA:
            return Object.assign({}, state, {
                isFetching: true,
                coinSentiments: [],
                hasError: false,
                errorMessage: null
            });

        case FETCHING_SENTIMENT_DATA_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                coinSentiments: action.coinSentiments,
                hasError: false,
                errorMessage: null
            });

        case FETCHING_SENTIMENT_DATA_FAIL:
            return Object.assign({}, state, {
                isFetching: true,
                coinSentiments: [],
                hasError: true,
                errorMessage: action.errorMessage
            });
    }
}