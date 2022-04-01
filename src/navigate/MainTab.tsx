import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import { Animated, StyleSheet, Text, View } from 'react-native'
import HomeScreen from '../components/HomeScreen'
import MusicScreen from '../components/MusicScreen'
import ProfileScreen from '../components/ProfileScreen'
import SearchScreen from '../components/SearchScreen'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const Tab = createBottomTabNavigator()
const MainTab = () => {
    const renderIcon = (name: any, color: any) => {
        return (
          <FontAwesome name={name} color={color} size={22} />
        )
      }
    return (
        <Tab.Navigator
        backBehavior = 'initialRoute'   
        screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: '#7FC8A9',
            tabBarInactiveTintColor: '#7FC8A9',
            tabBarActiveBackgroundColor: '#5F7A61',
            tabBarInactiveBackgroundColor: '#444941',
            tabBarHideOnKeyboard: true,
            tabBarLabelStyle: {fontWeight: 'bold', fontSize: 12, marginVertical: 3,}
        }}
        >
            <Tab.Screen name="Home" component={HomeScreen} options={
          {
            tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => renderIcon('home', color)
          }}/>
            <Tab.Screen name="Search" component={SearchScreen} options={
          {
            tabBarLabel: 'Search',
            tabBarIcon: ({ color }) => renderIcon('search', color)
          }}/>
            <Tab.Screen name="Music" component={MusicScreen} options={
          {
            tabBarLabel: 'Music',
            tabBarIcon: ({ color }) => renderIcon('music', color)
          }}/>
            <Tab.Screen name="Profile" component={ProfileScreen} options={
          {
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color }) => renderIcon('user', color)
          }}/>
        </Tab.Navigator>
    )
}

export default MainTab

const styles = StyleSheet.create({})
