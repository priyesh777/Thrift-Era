import React, { useState } from "react";
import {
    Image,
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TouchableWithoutFeedback,
} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from "../../components/CustomButton";
import { Checkbox } from "react-native-paper";
import { Colors } from "react-native/Libraries/NewAppScreen";

const RegisterScreen = (props) => {

    const { navigation } = props;

    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSelected,setSelected] = useState('')

    const signUpPressed = () => {
        console.warn('Registration in progress::>>');
    };

    const signInWithGoogle = () => {
        console.warn('Sign In with Google::>>');
    };

    return (
        <TouchableWithoutFeedback>
        <View style={styles.root}>
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
                    value={email}
                    setValue={setEmail}
                />
                <CustomInput
                    placeholder="Password"
                    value={password}
                    setValue={setPassword}
                    secureTextEntry={true}
                />
                <View style={styles.checkboxContainer}>
                    <Checkbox.Android
                        status={isSelected ? 'checked' : 'unchecked'}
                        onPress={() => setSelected(!isSelected)}
                        color={Colors.primary}
                    />
                    <Text>I agree to the terms and conditions</Text>
                </View>
                <CustomButton
                    text="Register"
                    type="primary"
                    onPress={signUpPressed}
                />
               <View style = {styles.line1}>
                <View style = {styles.line2} ></View>
                <Text stye={{fontSize:14,}}>Or Sign up With</Text>
                <View style ={{flex:1,height:1,backgroundColor:'grey',marginHorizontal:10}}></View>
               </View>
                <View style = {styles.logo}>
                <TouchableOpacity onPress={()=>console.log('Pressed')}
                style={styles.signin}>
                 <Image
                 source={{
                    height:36,
                    width:36,
                    marginRight:8,
                    uri:'https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/image8-2.jpg?width=1190&height=800&name=image8-2.jpg'
                 }}
                 resizeMode='cover'></Image>
                 <Text>   Google</Text>
                </TouchableOpacity>
                </View>
            </View>
            <View style={styles.inlineQuestion}>
                <Text style={styles.alternateSignInText}>
                    Already have an account? {''}
                </Text>
                <Text
                    style={styles.questionLink}
                    onPress={() => navigation.navigate('SignIn')}>
                    Sign In
                </Text>
            </View>
        </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({

    root: {
        padding: 10,
    },
    heading: {
        padding: 10,
        paddingBottom: 2,
        marginTop: 5,
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
    inlineQuestion: {
        padding: 10,
        flexDirection: 'row',
        alignSelf: 'center',
    },
    line1:{
       flexDirection:'row',
       alignItems:'center',
       marginVertical:20
    },
    line2:{
        flex:1,
        height:1,
        backgroundColor:'grey',
        marginHorizontal:10
    },
    signin:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row',
        height:52,
        borderWidth:1,
        borderColor:'grey',
        marginRight:4,
        borderRadius:10
    },
    logo:{
       flexDirection:'row',
       justifyContent:'center'
    }
   
});

export default RegisterScreen;