import firebase from 'react-native-firebase';
import {
    SIGN_USER_OUT,
    SIGN_USER_OUT_SUCCESS,
    SIGN_USER_OUT_FAILURE
} from '../Utils/ActionTypes';

export default function SignUserOut(){
    return dispatch => {
        dispatch({type: SIGN_USER_OUT});

        firebase.auth()
            .signOut()
            .then(() => {return dispatch({type: SIGN_USER_OUT_SUCCESS})})
            .catch(errCode => {return dispatch({type: SIGN_USER_OUT_FAILURE, errorMessage: errCode})});
    };
}