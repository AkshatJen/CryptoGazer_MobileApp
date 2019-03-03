import axios from 'axios';
import { apiBaseURL } from './../Utils/Constants';
import {
    UPDATE_USER_WATCHLIST,
    UPDATE_USER_WATCHLIST_SUCCESS,
    UPDATE_USER_WATCHLIST_FAIL,
} from './../Utils/ActionTypes';

export default function UpdateUserWatchlist(username, updatedCoinWatchlist){
    return dispatch => {
        dispatch({type: UPDATE_USER_WATCHLIST});

        axios.post(`${apiBaseURL}/authAPI/returnUserWatchlist`, {username: username, updatedCoinWatchlist: updatedCoinWatchlist})
            .then(() => {
                return dispatch({type: UPDATE_USER_WATCHLIST_SUCCESS});
            })
            .catch(() => {
                return dispatch({type: UPDATE_USER_WATCHLIST_FAIL, errorMsg: "Failed to update Watchlist"});
            });
    };
}