import React, {Component} from 'react';
import {Platform,
    StyleSheet,
    Text,
    View,
    Image,
    Button,
    TextInput,
    TouchableHighlight} from 'react-native';
import connect from "react-redux/es/connect/connect";
import RegisterUser from "./../Actions/RegisterUser";
import RegularSignIn from "./../Actions/RegularSignIn";
import Store from "../Store";
import Provider from "react-redux/es/components/Provider";

class LoginForm extends Component<Props> {

    constructor(props){
        super(props)
    }

    componentWillMount(){
        this.props.RegisterUser("meeeeeh@bleh.com", "testingout");
    }

    render() {

        const { auth } = this.props;

        return (
            <View style={styles.container}>

                {auth.userCredentials != null &&
                    <View>
                        <Text>User is Logged In</Text>
                    </View>
                }

                <View style={styles.container2}>
                    <TextInput style={styles.inputs}
                               placeholder="Email"
                               keyboardType="email-address"
                               underlineColorAndroid='transparent'
                               />
                </View>

                <View style={styles.container2}>
                    <TextInput style={styles.inputs}
                               placeholder="Password"
                               secureTextEntry={true}
                               underlineColorAndroid='transparent'
                               />
                </View>

                <TouchableHighlight style={[styles.buttonContainer, styles.signupButton]} onPress={() => this.onClickListener('sign_up')}>
                    <Text style={styles.signUpText}>Sign in</Text>
                </TouchableHighlight>
                <TouchableHighlight style={[styles.buttonContainer, styles.signupButton]} onPress={() => this.onClickListener('sign_up')}>
                    <Text style={styles.signUpText}>Register</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps, { RegisterUser, RegularSignIn })(LoginForm)

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
    }
});
