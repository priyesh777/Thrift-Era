import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    useWindowDimensions,
} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from "../../components/CustomButton";

const SignInScreen = () => {
    const { height: windowHeight } = useWindowDimensions();
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const onSignInPressed = () => {
        console.warn('Clicked signed in::>>');
    }

    return (
        <View>
            <Text style={styles.heading}>
                Please Sign In
            </Text>
            <Text style={styles.subHeading}>
                Enter your account details for the personalised
                {'\n'}
                experience of thrift shopping
            </Text>
            <View style={styles.root}>
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
            <View style={styles.root}>
                <Text style={styles.forgotPassword}>
                    Forgot Password ?
                </Text>
                <CustomButton
                    text="Sign In"
                    type="primary"
                    onPress={onSignInPressed}
                />
                <CustomButton
                    text="Sign In With Google"
                    type="tertiary"
                    onPress={onSignInPressed}
                />
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
    forgotPassword: {
        padding: 10,
        fontSize: 14,
        fontWeight: 'bold',
        color: '#4D7E3D',
        alignSelf: 'flex-end',
    },
});

export default SignInScreen;