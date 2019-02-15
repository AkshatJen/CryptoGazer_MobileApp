import firebase from 'react-native-firebase';
import {
    REGULAR_SIGNIN,
    REGULAR_SIGNIN_FAIL,
    REGULAR_SIGNIN_SUCCESS
} from '../Utils/ActionTypes';

export default function RegularSignIn(email, password){
    return dispatch => {
        dispatch({type: REGULAR_SIGNIN});

        firebase.auth()
            .signInWithEmailAndPassword(email, password)
            .then(userCred => {return dispatch({type: REGULAR_SIGNIN_SUCCESS, userCredentials: userCred})})
            .catch(errCode => {return dispatch({type: REGULAR_SIGNIN_FAIL, errorMsg: "Sorry, try your credential's again"})});
    };
}