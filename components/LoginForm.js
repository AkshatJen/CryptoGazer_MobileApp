import React, {Component} from 'react';
import {Platform,
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableHighlight} from 'react-native';
import { Field, reduxForm } from 'redux-form';

const required = value => value ? undefined : 'Required';

class LoginForm extends Component<Props> {

    constructor(props){
        super(props)
    }

    renderEmailInput ({ input: { onChange, ...restInput }}) {

        return (
            <TextInput style={styles.inputs}
                       placeholder="Email"
                       keyboardType="email-address"
                       underlineColorAndroid='transparent'
                       onChangeText={onChange} {...restInput}
            />
        )
    }

    renderPasswordInput ({ input: { onChange, ...restInput }}) {

        return (
            <TextInput style={styles.inputs}
                       placeholder="Password"
                       secureTextEntry={true}
                       underlineColorAndroid='transparent'
                       onChangeText={onChange} {...restInput}
            />
        )
    }

    render(){

        const { handleFormLoginSubmit, handleFormRegisterSubmit, handleSubmit } = this.props;

        return (
            <View>
                <View style={styles.container2}>
                    <Field name="email"
                           component={this.renderEmailInput}/>
                </View>

                <View style={styles.container2}>
                    <Field name="password"
                           component={this.renderPasswordInput}/>
                </View>

                <TouchableHighlight style={[styles.buttonContainer, styles.signInButton]} onPress={handleSubmit(handleFormLoginSubmit)}>
                    <Text style={styles.signInText}>Sign in</Text>
                </TouchableHighlight>
                <TouchableHighlight style={[styles.buttonContainer, styles.signUpButton]} onPress={handleSubmit(handleFormRegisterSubmit)}>
                    <Text style={styles.signUpText}>Register</Text>
                </TouchableHighlight>
            </View>
        )
    }
}

// Decorate the form component
LoginForm = reduxForm({
    form: 'login', // a unique name for this form
    validate: (values) => {
        const errors = {};
        errors.email = !values.email ? 'Email field is required' : undefined;
        errors.password = !values.password ? 'Password field is required' : undefined;
        return errors;
    }
})(LoginForm);

export default LoginForm;

const styles = StyleSheet.create({
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
    buttonContainer: {
        height:45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:20,
        width:250,
        borderRadius:30,
    },
    signInButton: {
        backgroundColor: "#666",
    },
    signInText: {
        color: 'white',
    },
    signUpButton: {
        backgroundColor: "#666",
    },
    signUpText: {
        color: 'white',
    }
});