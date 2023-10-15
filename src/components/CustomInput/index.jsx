import React from "react";
import {
    View,
    StyleSheet,
    TextInput,
} from 'react-native';

const CustomInput = (props) => {
    const {
        value,
        setValue,
        placeholder,
        secureTextEntry,
    } = props;

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                secureTextEntry={secureTextEntry}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: '100%',
        borderColor: '#e8e8e8',
        borderWidth: 2,
        borderRadius: 5,
        padding: 10,
        marginVertical: 5,
    },
    input: {

    },
});

export default CustomInput;