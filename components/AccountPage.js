import React, {Component} from 'react';
import {Platform,
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableHighlight} from 'react-native';
import connect from "react-redux/es/connect/connect";
import RegisterUser from "./../Actions/RegisterUser";
import RegularSignIn from "./../Actions/RegularSignIn";
import SignUserOut from "./../Actions/SignUserOut";
import Spinner from "react-native-loading-spinner-overlay";
import LoginForm from "./../components/LoginForm";

class AccountPage extends Component<Props> {

    constructor(props){
        super(props)
    }

    handleLoginSubmit = (values) => {
        this.props.RegularSignIn(values.email, values.password);
    };

    handleRegisterSubmit = (values) => {
        this.props.RegisterUser(values.email, values.password);
    };

    signUserOut(){
        this.props.SignUserOut();
    }

    renderSpinner(message){
        return (
            <View>
                <Spinner
                    visible={true}
                    textContent={`${message}...`}
                    textStyle={{color: '#262A4A'}}
                    animation="fade"
                />
            </View>
        )
    }

    render() {

        const { auth } = this.props;

        if(auth.isSigningIn){
            this.renderSpinner("Signing In");
        }
        else if(auth.isRegistering){
            this.renderSpinner("Registering");
        }
        else if(auth.isSigningOut){
            this.renderSpinner("Signing Out");
        }
        return (
            <View style={styles.container}>

                {auth.hasError && auth.errorMessage != null &&
                    <View>
                        <Text>ERROR: {auth.errorMessage} ~{"\n"}</Text>
                    </View>
                }

                {auth.userCredentials != null &&
                    <View>
                        <Text style={styles.loggedInUserText}>{auth.userCredentials.user.email} is Logged In ~{"\n"}</Text>
                    </View>
                }

                <LoginForm
                    handleFormLoginSubmit={this.handleLoginSubmit}
                    handleFormRegisterSubmit={this.handleRegisterSubmit}
                />

                {auth.userCredentials &&
                <TouchableHighlight style={[styles.buttonContainer, styles.signupButton]} onPress={() => this.signUserOut()}>
                    <Text style={styles.signUpText}>Logout</Text>
                </TouchableHighlight>
                }
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps, { RegisterUser, RegularSignIn, SignUserOut })(AccountPage)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#546e7a',
    },
    container2: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#FFFFFF',
        borderRadius:30,
        borderBottomWidth: 1,
        width:250,
        height:45,
        marginBottom:20,
        flexDirection: 'row',
        alignItems:'center'
    },
    inputs:{
        width: 35,
        height:45,
        marginLeft:16,
        borderBottomColor: '#FFFFFF',
        flex:1,
    },
    icons:{
        width:30,
        height:30,
        marginLeft:15,
        justifyContent: 'center'
    },
    buttonContainer: {
        height:45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:20,
        width:250,
        borderRadius:30,
    },
    signupButton: {
        backgroundColor: "#666",
    },
    signUpText: {
        color: 'white',
    },
    loggedInUserText: {
        color: 'white'
    }
});
