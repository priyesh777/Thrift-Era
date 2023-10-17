import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from "../../components/CustomButton";

const RegisterScreen = (props) => {

    const { navigation } = props;

    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signUpPressed = () => {
        console.warn('Registration in progress::>>');
    };

    const signInWithGoogle = () => {
        console.warn('Sign In with Google::>>');
    };

    return (
        <View style={styles.root}>
            <Text style={styles.heading}>
                Let's Get Started
            </Text>
            <Text style={styles.subHeading}>
                Create an account to continue.
            </Text>
            <View style={styles.formFields}>
                <CustomInput
                    placeholder="User Name"
                    value={userName}
                    setValue={setUserName}
                />
                <CustomInput
                    placeholder="Email"
                    value={email}
                    setValue={setEmail}
                />
                <CustomInput
                    placeholder="Password"
                    value={password}
                    setValue={setPassword}
                    secureTextEntry={true}
                />
                <CustomButton
                    text="Register"
                    type="primary"
                    onPress={signUpPressed}
                />
                <Text style={styles.registerWith}>
                    ────────  Or Continue with  ────────
                </Text>
                <CustomButton
                    text="Continue With Google"
                    type="tertiary"
                    onPress={signInWithGoogle}
                />
            </View>
            <View style={styles.inlineQuestion}>
                <Text style={styles.alternateSignInText}>
                    Already have an account? {''}
                </Text>
                <Text
                    style={styles.questionLink}
                    onPress={() => navigation.navigate('SignIn')}
                >
                    Sign In
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    root: {
        padding: 10,
    },
    heading: {
        padding: 10,
        paddingBottom: 2,
        marginTop: 5,
        fontSize: 24,
        fontWeight: 'bold',
        alignSelf: 'flex-start',
    },
    subHeading: {
        fontSize: 14,
        color: '#7E969E',
        padding: 10,
        alignSelf: 'flex-start',
    },
    formFields: {
        padding: 10,
    },
    registerWith: {
        padding: 20,
        fontSize: 14,
        color: '#7E969E',
        alignSelf: 'center',
    },
    inlineQuestion: {
        padding: 10,
        flexDirection: 'row',
        alignSelf: 'center',
    },
    alternateSignInText: {
        fontSize: 14,
        color: '#7E969E',
        alignSelf: 'center',
    },
    questionLink: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#4D7E3D',
        alignSelf: 'flex-end',
    },
});

export default RegisterScreen;