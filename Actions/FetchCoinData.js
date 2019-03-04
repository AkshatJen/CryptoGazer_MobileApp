import axios from 'axios';
import { apiBaseURL } from './../Utils/Constants';
import {
    FETCHING_COIN_DATA,
    FETCHING_COIN_DATA_SUCCESS,
    FETCHING_COIN_DATA_FAIL,
} from './../Utils/ActionTypes';


export default function FetchCoinData() {
    return dispatch => {
        dispatch({ type: FETCHING_COIN_DATA })

        axios.get(`${apiBaseURL}/coinAPI/coins`)
            .then(jsn => {
                return dispatch({ type: FETCHING_COIN_DATA_SUCCESS, payload: jsn.data });
            })
            .catch(() => {
                return dispatch({ type: FETCHING_COIN_DATA_FAIL, errorMessage: "Failed to fetch coin data" });
            });
    }
}