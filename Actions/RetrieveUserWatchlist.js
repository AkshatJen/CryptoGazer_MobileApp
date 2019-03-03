import axios from 'axios';
import { apiBaseURL } from './../Utils/Constants';
import {
    RETRIEVE_USER_WATCHLIST,
    RETRIEVE_USER_WATCHLIST_SUCCESS,
    RETRIEVE_USER_WATCHLIST_FAIL,
} from './../Utils/ActionTypes';

export default function RetrieveUserWatchlist(username){
    return dispatch => {
        dispatch({type: RETRIEVE_USER_WATCHLIST});

        axios.get(`${apiBaseURL}/authAPI/returnUserWatchlist`, {username: username})
            .then(jsn => {
                return dispatch({type: RETRIEVE_USER_WATCHLIST_SUCCESS, userWatchlist: jsn});
            })
            .catch(() => {
                return dispatch({type: RETRIEVE_USER_WATCHLIST_FAIL, errorMsg: "Failed to retrieve Watchlist"});
            });
    };
}