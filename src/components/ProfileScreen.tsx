import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const ProfileScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={{color: '#000'}}>Coming Soon</Text>
        </View>
    )
}

export default ProfileScreen

const styles = StyleSheet.create({
    container:
    {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#7FC8A9"
    }
})
