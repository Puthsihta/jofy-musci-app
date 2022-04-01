import { useNavigation } from '@react-navigation/core'
import { HStack, Input } from 'native-base'
import React, { useState, useEffect } from 'react'
import { ActivityIndicator, Alert, ImageBackground, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { auth } from '../../Firebase'
import AsyncStorage from '@react-native-async-storage/async-storage';
import MainTab from '../navigate/MainTab'
import { active_opacity, backgroundLoginColor, deviceWidth, style } from '../styles'

const LoginScreen = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [isLogin, setIsLogin] = useState<any>(null)
    async function login()
    {
        let is_login = await AsyncStorage.getItem('@is_login');
        return is_login;
    }
    console.log(isLogin);
    
    useEffect(() => {
        login().then((result)=> {
            if(result === null)
            {
                setIsLogin(true)
            }else
            {
                setIsLogin(false)
            }
        })
    }, [])
    const handleSignUp = () => {
        auth
        .createUserWithEmailAndPassword(email, password)
        .then(((userCredentials: { user: any }) => {
            const user = userCredentials.user
            console.log(user.email);
        })
        )
    }
    const navigates:any = useNavigation()
    return isLogin === null ?(
        <View style={{
            flex:1,
            justifyContent:'center',
            alignItems:'center'
        }}>
            <ActivityIndicator size="large"/>
        </View>
    ): isLogin ? (

            <ImageBackground style={styles.container}  source = {require('../assets/logo.png')} resizeMode="cover" resizeMethod= 'resize'>
            <StatusBar backgroundColor={backgroundLoginColor} barStyle="light-content" />
            <Text style={[style.pt, styles.header]}>jofy</Text>
            <Text style={[style.p, styles.text]}/>
            <HStack style={styles.search}>
                <Text style={[style.p, {color: '#fff', textTransform: 'uppercase'}]}>
                username
                </Text>
                <TextInput 
                    onChangeText={text => setEmail(text)} 
                    value={email} 
                    style={[
                        style.p,
                        {
                        marginLeft: 12,
                        color: '#C3C3C3',
                        width: deviceWidth/1.5,
                        backgroundColor: '#919191',
                        borderRadius: 12,
                        paddingLeft: 12,
                        height: 45
                        },
                    ]}
                    placeholder = 'your username'
                    placeholderTextColor="#C3C3C3"
                />
            </HStack>
            <HStack style={styles.search}>
                <Text style={[style.p, {color: '#fff', textTransform: 'uppercase'}]}>
                password
                </Text>
                <TextInput 
                    onChangeText={text => setPassword(text)} 
                    value={password} 
                    secureTextEntry 
                    style={[
                        style.p,
                        {
                        marginLeft: 12,
                        color: '#C3C3C3',
                        width: deviceWidth/1.5,
                        backgroundColor: '#919191',
                        borderRadius: 12,
                        paddingLeft: 12,
                        height: 45
                        },
                    ]}
                    placeholder = 'your password'
                    placeholderTextColor="#C3C3C3"
                />
            </HStack>
            <TouchableOpacity activeOpacity={active_opacity} style={styles.buttom} onPress ={() => {navigates.navigate("Onboarding"), AsyncStorage.setItem("@is_login","1")}}>
                <Text style={{color: '#5F7A61',fontFamily: 'Roboto', fontSize: 24, fontWeight: 'bold', textAlign: 'center'}}>Sing In</Text>
            </TouchableOpacity>
            </ImageBackground>
        
    ):<MainTab/>
}

export default LoginScreen

const styles = StyleSheet.create({
    container:
    {
        flex: 1,
        backgroundColor: '#444941',
    },
    header:
    {
        color: '#fff',
        fontSize: 72,
        textAlign: 'center',
        marginTop: 69,
        textTransform: 'uppercase',
    },
    text:
    {
        color: '#fff',
        fontSize: 18,
        textAlign: 'center',
        marginTop: 21,
        marginBottom: 42,
    },
    search:
    {
        marginHorizontal: 12,
        justifyContent: 'space-between',
        marginBottom: 15,
        alignItems: 'center',
    },
    input:
    {
        marginLeft: 9,
        width: deviceWidth-50,
        height: 33,
    },
    buttom:
    {
        backgroundColor: '#C4C4C4',
        paddingVertical: 11,
        paddingHorizontal: 63,
        marginHorizontal: 54,
        borderRadius: 42,
        marginTop: 75,
    }
})
