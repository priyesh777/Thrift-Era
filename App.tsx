import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import {
    StyleSheet,
    SafeAreaView,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from './src/screens/SignInScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import WelcomeScreen from './src/screens/WelcomeScreen';

export default function App() {
    console.log('The first page is loaded now::');

    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <SafeAreaView style={styles.root}>
                <Stack.Navigator initialRouteName="Welcome">
                    <Stack.Screen name="SignIn" component={SignInScreen} />
                    <Stack.Screen name="Register" component={RegisterScreen} />
                    <Stack.Screen name="Welcome" component={WelcomeScreen} />
                    {/*<SignInScreen />*/}
                </Stack.Navigator>
                <StatusBar style="auto" />
            </SafeAreaView>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    root: {
        backgroundColor: '#f9fbfc',
        flex: 1,
        paddingLeft: 10,
        paddingRight: 10,
    },
});