import { StatusBar } from 'expo-status-bar';
import {
    StyleSheet,
    SafeAreaView,
} from 'react-native';
import SignInScreen from './src/screens/SignInScreen';

export default function App() {

    console.log('The first page is loaded now::');
    return (
        <SafeAreaView style={styles.root}>
            <SignInScreen />
            <StatusBar style="auto" />
        </SafeAreaView>
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