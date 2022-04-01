import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { active_opacity, style } from '../styles'

const OnboardingScreen = () => {
    const navigates:any = useNavigation()
    return (
        <ScrollView style={styles.container}>
            <StatusBar backgroundColor={'#7FC8A9'} barStyle="light-content" />
            <Text style={[style.pt ,styles.header]}>About this App</Text>
            <View>
                <Text style={styles.dis}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut 
                    labore et dolore magna aliqua.
                    Ut enim ad minim veniam
                    , quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non 
                    proident, sunt in culpa qui officia 
                    deserunt mollit anim id est laborum.
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </Text>
                <TouchableOpacity activeOpacity={active_opacity} onPress ={()=> navigates.navigate('Maintab')}>
                    <Text style={styles.bottom}>I accept all cookie and privacy</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default OnboardingScreen

const styles = StyleSheet.create({
    container:
    {
        flex: 1,
        backgroundColor: '#7FC8A9'
    },
    header:
    {
        fontSize: 33,
        color: '#5F7A61',
        marginHorizontal: 24,
        marginVertical: 30,
        textTransform: 'uppercase',
        textAlign: 'center'
    },
    dis:
    {
        fontSize: 21,
        color: '#5F7A61',
        backgroundColor: '#C4C4C4',
        borderRadius: 30,
        fontFamily: 'Roboto',
        padding: 18,
        lineHeight: 30,
        marginHorizontal: 12,
        textAlign: 'center'   
    },
    bottom:
    {
        fontSize: 18,
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        backgroundColor: "#5F7A61",
        color: '#7FC8A9',
        marginVertical: 24,
        marginHorizontal: 12,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 12,
        borderRadius: 30,
        textAlign: 'center'
    }
})
