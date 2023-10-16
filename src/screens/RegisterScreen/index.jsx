import React from "react";
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from "../../components/CustomButton";

const RegisterScreen = () => {

    return (
        <View>
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
        </View>
    )
}

const style = StyleSheet.create({
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
});

export default RegisterScreen;