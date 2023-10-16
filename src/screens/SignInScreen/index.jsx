import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    useWindowDimensions,
    ScrollView,
} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from "../../components/CustomButton";

const SignInScreen = () => {
    const { height: windowHeight } = useWindowDimensions();
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const onSignInPressed = () => {
        console.warn('Clicked signed in::>>');
    };

    const signInWithGoogle = () => {
        console.warn('Sign In with Google::>>');
    };

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View>
                <Text style={styles.heading}>
                    Please Sign In
                </Text>
                <Text style={styles.subHeading}>
                    Enter your account details for the personalised
                    {'\n'}
                    experience of thrift shopping
                </Text>
                <View style={styles.formFields}>
                    <CustomInput
                        placeholder="User Name or Email"
                        value={userName}
                        setValue={setUserName}
                    />
                    <CustomInput
                        placeholder="Password"
                        value={password}
                        setValue={setPassword}
                        secureTextEntry={true}
                    />
                </View>
                <View style={styles.formFields}>
                    <Text style={styles.forgotPassword}>
                        Forgot Password ?
                    </Text>
                    <CustomButton
                        text="Sign In"
                        type="primary"
                        onPress={onSignInPressed}
                    />
                    <Text style={styles.signInWith}>
                        ────────  Or Sign In with  ────────
                    </Text>
                    <CustomButton
                        text="Sign In With Google"
                        type="tertiary"
                        onPress={signInWithGoogle}
                    />
                    <View style={styles.inlineQuestion}>
                        <Text style={styles.alternateSignInText}>
                            Don't Have an account? {''}
                        </Text>
                        <Text style={styles.questionLink}>
                            Sign Up
                        </Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    heading: {
        padding: 10,
        paddingBottom: 2,
        marginTop: 40,
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
    forgotPassword: {
        padding: 10,
        fontSize: 14,
        fontWeight: 'bold',
        color: '#4D7E3D',
        alignSelf: 'flex-end',
    },
    signInWith: {
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

export default SignInScreen;