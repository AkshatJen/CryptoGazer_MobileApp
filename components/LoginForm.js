import React, {Component} from 'react';
import {Platform,
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableHighlight} from 'react-native';
import { Field, reduxForm } from 'redux-form';

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

        const { handleFormSubmit, handleSubmit } = this.props;

        return (
            <View>
                <View style={styles.container2}>
                    <Field name="email" component={this.renderEmailInput}/>
                </View>

                <View style={styles.container2}>
                    <Field name="password" component={this.renderPasswordInput}/>
                </View>

                <TouchableHighlight style={[styles.buttonContainer, styles.signInButton]} onPress={handleSubmit(handleFormSubmit)}>
                    <Text style={styles.signInText}>Sign in</Text>
                </TouchableHighlight>
            </View>
        )
    }
}

// Decorate the form component
LoginForm = reduxForm({
    form: 'login' // a unique name for this form
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
    }
});