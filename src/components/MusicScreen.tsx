import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { HStack, Button, } from 'native-base'
import React from 'react'
import {  StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { backgroundColor, borderRadius, padding } from 'styled-system';
import Album from '../contain/Album';
import Artist from '../contain/Artist';
import Playlist from '../contain/Playlist';
const Tab = createMaterialTopTabNavigator();
const MusicScreen = () => {
    return (
        <Tab.Navigator
        tabBarPosition = 'top'
        keyboardDismissMode = 'auto'
        backBehavior = 'history'
        screenOptions={{
            tabBarActiveTintColor: '#444941',
            tabBarInactiveTintColor: '#8A8F87',
            tabBarLabelStyle: { fontSize: 13, fontWeight: 'bold', fontFamily: 'Roboto',  borderRadius: 9, backgroundColor: "#C4C4C4", padding: 12,},
            // tabBarItemStyle: { marginHorizontal: 9, },
            tabBarStyle: { backgroundColor: "#7FC8A9",},
            tabBarContentContainerStyle: {backgroundColor: '#7FC8A9'}
        }}
        >
            <Tab.Screen name = "Playlist" component= {Playlist}/>
            <Tab.Screen name = "Artist" component= {Artist}/>
            <Tab.Screen name = "Album" component= {Album}/>
        </Tab.Navigator>
    )
}

export default MusicScreen

const styles = StyleSheet.create({
    nav:
    {
        marginHorizontal: 12,
        marginTop: 12,
    },
    item:
    {
        backgroundColor: '#C4C4C4',
    },
    text:
    {
        fontWeight: 'bold',
        color: '#444941',
        fontFamily: 'Roboto'
    }
})
