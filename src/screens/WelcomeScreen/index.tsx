import React from "react";
import {
    View,
    Text,
    Image,
    StyleSheet,
    //useWindowDimensions,
    ScrollView,
} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from "../../components/CustomButton";

const WelcomeScreen = (props) => {

    const { navigation } = props;

    //const { height: windowHeight } = useWindowDimensions();

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <View>
                    <Image
                        style={styles.tinyLogo}
                        source={require('../../../assets/images/thriftEra.png')}
                    />
                </View>
                <Text style={styles.slogan}>
                    ────── Step towards sustainability ──────
                </Text>
                <View style={styles.buttonGroup}>
                    <CustomButton
                        text="Sign In"
                        type="tertiary"
                        onPress={() => navigation.navigate('SignIn')}
                    />
                    <CustomButton
                        text="Get Started"
                        type="primary"
                        onPress={() => navigation.navigate('Register')}
                    />
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    root: {
        padding: 10,
    },
    slogan: {
        padding: 20,
        fontSize: 14,
        color: '#7E969E',
        alignSelf: 'center',
    },
    tinyLogo: {
        alignSelf: 'center',
        width: 300,
        height: 300,
    },
    buttonGroup: {
        alignItems: 'stretch',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    }
});

export default WelcomeScreen;