import React, { useState } from "react";
import {
    View,
    Image,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from "../../components/CustomButton";

const SignInScreen = (props) => {

    const { navigation } = props;

    //const { height: windowHeight } = useWindowDimensions();
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    

    const onSignInPressed = () => {
        console.warn('Clicked signed in::>>');
    };

    const signInWithGoogle = () => {
        console.warn('Sign In with Google::>>');
    };

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View>
                <Text style={styles.heading}>
                    Please Sign In
                </Text>
                <Text style={styles.subHeading}>
                    Enter your account details for the personalised
                    {'\n'}
                    experience of thrift shopping
                </Text>
                <View style={styles.formFields}>
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
                <View style={styles.formFields}>
                    <Text style={styles.forgotPassword}>
                        Forgot Password ?
                    </Text>
                    <CustomButton
                        text="Sign In"
                        type="primary"
                        onPress={onSignInPressed}
                    />
                <View style = {styles.line1}>
                <View style = {styles.line2}></View>
                <Text stye={{fontSize:14,}}>Or Sign up With</Text>
                <View style ={{flex:1,height:1,backgroundColor:'grey',marginHorizontal:10}}></View>
               </View>
                <View style={{flexDirection:'row',justifyContent:'center'}}>
                <TouchableOpacity onPress={()=>console.log('Pressed')}
                style={styles.logo}>
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
                    
                    
                    <View style={styles.inlineQuestion}>
                        <Text style={styles.alternateSignInText}>
                            Don't Have an account? {''}
                        </Text>
                        <Text
                            style={styles.questionLink}
                            onPress={() => navigation.navigate('Register')}
                        >
                            Sign Up
                        </Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
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
    forgotPassword: {
        padding: 10,
        fontSize: 14,
        fontWeight: 'bold',
        color: '#4D7E3D',
        alignSelf: 'flex-end',
    },
    signInWith: {
        padding: 20,
        fontSize: 14,
        color: '#7E969E',
        alignSelf: 'center',
    },
    inlineQuestion: {
        padding: 10,
        flexDirection: 'row',
        alignSelf: 'center',
    },
      questionLink: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#4D7E3D',
        alignSelf: 'flex-end',
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
    logo:{
       flex:1,
       alignItems:'center',
       justifyContent:'center',
       flexDirection:'row',
       height:52,
       borderWidth:1,
       borderColor:'grey',
       marginRight:4,
       borderRadius:10
    }
   
});

export default SignInScreen;