import { useNavigation } from '@react-navigation/core'
import { HStack, Input } from 'native-base'
import React, { useState, useEffect } from 'react'
import { ActivityIndicator, Alert, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { auth } from '../../Firebase'
import AsyncStorage from '@react-native-async-storage/async-storage';
import MainTab from '../navigate/MainTab'

const LoginScreen = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [isLogin, setIsLogin] = useState<any>(null)
    async function login()
    {
        let is_login = await AsyncStorage.getItem('@is_login');
        return is_login;
    }
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
            <Text style={styles.header}>JOFY</Text>
            <Text style={styles.text}>please Login your account here</Text>
            <HStack style={styles.search}>
                <Text style={{color: '#fff'}}>
                username :
                </Text>
                <Input onChangeText={text => setEmail(text)} value={email} style={styles.input} variant= 'rounded' background = "#919191"/>
            </HStack>
            <HStack style={styles.search}>
                <Text style={{color: '#fff'}}>
                password : 
                </Text>
                <Input onChangeText={text => setPassword(text)} value={password} secureTextEntry style={styles.input} variant= 'rounded' background = "#919191"/>
            </HStack>
            <TouchableOpacity style={styles.buttom} onPress ={() => {navigates.navigate("Onboarding"), AsyncStorage.setItem("@is_login","1")}}>
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
        fontWeight: 'bold',
        fontFamily: 'Roboto',
        color: '#fff',
        fontSize: 72,
        textAlign: 'center',
        marginTop: 69,
    },
    text:
    {
        color: '#fff',
        fontFamily: 'Roboto',
        fontSize: 18,
        textAlign: 'center',
        marginVertical: 21,
        marginBottom: 42,
    },
    search:
    {
        marginHorizontal: 24,
        justifyContent: 'space-between',
        marginBottom: 15,
    },
    input:
    {
        marginLeft: 9,
        width: 200,
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
