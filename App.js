import { StatusBar } from 'expo-status-bar';
import { useCallback } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    SafeAreaView,
    TouchableHighlight,
    Button,
    Alert,
} from 'react-native';

export default function App() {

    const handlePressLink = useCallback(() => {
        console.log('There is some function to be done::');
    }, []);

    const handleImageTapped = useCallback(() => {
        console.log('Image Tapped::');
    }, []);

    return (
        <SafeAreaView style={styles.container} >
            <Text onPress={handlePressLink}>
                Hello People ! We will work on Thrift Era.
            </Text>
            <TouchableHighlight
                onPress={handleImageTapped}
            >
                <Image
                    fadeDuration={1000}
                    source={{
                        width: 300,
                        height: 200,
                        uri: "https://picsum.photos/200/300"
                    }}
                />
            </TouchableHighlight>
            <Button
                title="Check Basics"
                onPress={() =>
                    Alert.alert("Regarding Project", "Did you start with the basics ?", [
                        { text: "Yes", onPress: () => console.log("Yes") },
                        { text: "No", onPress: () => console.log("No") },
                    ])
                }
            />
            <StatusBar style="auto" />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#4bb389',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
