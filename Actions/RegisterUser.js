import  axios from 'axios';
import { apiBaseURL } from './../Utils/Constants';
import {
    REGISTER_USER,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAIL,
} from './../Utils/ActionTypes';

export default function RegisterUser(email, password){

    return dispatch => {
        dispatch({type: REGISTER_USER});

        axios.post(`${apiBaseURL}/authAPI/registerNewUserAccount`,
            {
                email: email,
                password: password
            })
        .then(() => {dispatch({type: REGISTER_USER_SUCCESS});})
        .catch(() => {dispatch({type: REGISTER_USER_FAIL, errorMsg: "Failed to register user"});});
    };
}