import React from "react";
import {
    View,
    Text,
} from 'react-native';

const RegisterScreen = () => {

    const handleImageTapped = useCallback(() => {
        console.log('Image Tapped::');
    }, []);

    return (
        <View>
            <Text>Register Screen is UP !!</Text>
        </View>
    )
}

export default RegisterScreen;