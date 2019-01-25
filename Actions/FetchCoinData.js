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

        // return axios.get(`${apiBaseURL}/v1/ticker/?limit=25`)
        //     .then(jsn => {
        //         return dispatch({ type: FETCHING_COIN_DATA_SUCCESS, payload: jsn.data });
        //     })
        //     .catch(err => {
        //         return dispatch({ type: FETCHING_COIN_DATA_FAIL, payload: err });
        //     });

        return axios.get(`${apiBaseURL}/coinAPI/coins`)
            .then(jsn => {
                return dispatch({ type: FETCHING_COIN_DATA_SUCCESS, payload: jsn.data });
            })
            .catch(err => {
                return dispatch({ type: FETCHING_COIN_DATA_FAIL, payload: err });
            });
    }
}

