import {
    RETRIEVE_USER_COIN_NOTIFICATION_PRICES,
    RETRIEVE_USER_COIN_NOTIFICATION_PRICES_SUCCESS,
    RETRIEVE_USER_COIN_NOTIFICATION_PRICES_FAIL
} from './../Utils/ActionTypes';
import {apiBaseURL} from "../Utils/Constants";

export default function RetrieveUserCoinNotificationPrices(username){

    return dispatch => {
        dispatch({type: RETRIEVE_USER_COIN_NOTIFICATION_PRICES});

        axios.get(`${apiBaseURL}/authAPI/returnUserCoinNotificationPrices`, {username: username})
            .then(jsn => {
                return dispatch({type: RETRIEVE_USER_COIN_NOTIFICATION_PRICES_SUCCESS, userNotificationPrices: jsn});
            })
            .catch(() => {
                return dispatch({type: RETRIEVE_USER_COIN_NOTIFICATION_PRICES_FAIL, errorMsg:"Failed to retrieve notification prices"});
            });
    };

}