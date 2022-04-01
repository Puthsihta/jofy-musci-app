import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { borderRadius, height } from 'styled-system'
import Entypo from 'react-native-vector-icons/Entypo'
import LottieView from 'lottie-react-native';

const Head = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>WELCOME TO JOFY MUSIC</Text>
            <TouchableOpacity>
                <LottieView style={styles.icon} source={require('../assets/top.json')} autoPlay loop/>
            </TouchableOpacity>
        </View>
    )
}

export default Head

const styles = StyleSheet.create({
    container:
    {
        backgroundColor: "#C4C4C4",
        borderRadius: 20,
        height: 43,
        marginHorizontal: 12,
        marginVertical: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    text:
    {
        fontFamily: 'Roboto',
        fontSize: 14,
        fontWeight:'bold',
        color: '#444941',
        marginLeft: 36,
        marginVertical: 12,
        opacity: 0.4,
    },
    icon:
    {
        marginRight: 12,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: 99,
        height: 99,
        marginTop: 6,
    }
})
