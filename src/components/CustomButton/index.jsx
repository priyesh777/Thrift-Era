import React from "react";
import {
    Pressable,
    StyleSheet,
    Text,
} from 'react-native';

const CustomButton = (props) => {
    const {
        onPress,
        text,
        type = "primary"
    } = props;

    return (
        <Pressable
            style={[styles.container, styles[`container_${type}`]]}
            onPress={onPress}
        >
            <Text
                style={[styles.text, styles[`text_${type}`]]}
            >
                {text}
            </Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#4D7E3D',
        alignItems: 'center',
        padding: 15,
        marginVertical: 5,
        borderWidth: 2,
        borderColor: '#4D7E3D',
        borderRadius: 7,
    },
    container_primary: {
        backgroundColor: '#4D7E3D',
        alignItems: 'center',
        padding: 15,
        marginVertical: 5,
        borderWidth: 2,
        borderColor: '#4D7E3D',
        borderRadius: 7,
    },
    container_tertiary: {
        backgroundColor: '#f6f6f6',
        borderColor: '#4D7E3D',
        alignItems: 'center',
        padding: 15,
        marginVertical: 5,
        borderWidth: 2,
        borderRadius: 7,
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
    text_primary: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
    text_tertiary: {
        color: '#4D7E3D',
        fontWeight: 'bold',
        fontSize: 16,
    },
});

export default CustomButton;