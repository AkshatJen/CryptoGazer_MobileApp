import {
    UPDATE_USER_COIN_NOTIFICATION_PRICES,
    UPDATE_USER_COIN_NOTIFICATION_PRICES_FAIL,
    UPDATE_USER_COIN_NOTIFICATION_PRICES_SUCCESS
} from "../Utils/ActionTypes";
import {apiBaseURL} from "../Utils/Constants";


export default function UpdateUserCoinNotificationPrices(username, coinName, newPrice){

    return dispatch => {
        dispatch({type: UPDATE_USER_COIN_NOTIFICATION_PRICES});

        axios.post(`${apiBaseURL}/authAPI/updateUserCoinNotificationPrices`, {username: username, coinName: coinName, newPrice: newPrice})
            .then(() => {
                return dispatch({type: UPDATE_USER_COIN_NOTIFICATION_PRICES_SUCCESS});
            })
            .catch(() => {
                return dispatch({type: UPDATE_USER_COIN_NOTIFICATION_PRICES_FAIL, errorMsg: "Failed to update coin notification prices"});
            });
    };
}