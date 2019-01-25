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

        let bodyFormData = new FormData();

        bodyFormData.set('email', email);
        bodyFormData.set('password', password);

        axios({
            method: 'post',
            url: `${apiBaseURL}/authAPI/registerNewUserAccount`,
            data: bodyFormData,
            config: { headers: {'Content-Type': 'multipart/form-data' }}
        })
        .then(() => {dispatch({type: REGISTER_USER_SUCCESS});})
        .catch((error) => {dispatch({type: REGISTER_USER_FAIL, errorMsg: error});});
    };
}