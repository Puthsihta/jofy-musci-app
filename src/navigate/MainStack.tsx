import { CommonActions, createNavigationContainerRef, StackActions } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import LoginScreen from '../components/LoginScreen'
import OnboardingScreen from '../components/OnboardingScreen'
import PlayScreen from '../components/PlayScreen'
import RecentlyPlay1 from '../contain/RecentlyPlay1'
import CategoriesDetail from '../custome/CategoriesDetail'
import MainTab from './MainTab'

const Stack = createNativeStackNavigator()
export const navigateRef = createNavigationContainerRef()
export function navigate(name: string, params: any = {}) {
        if (navigateRef.isReady()) {
        navigateRef.dispatch(
            CommonActions.navigate({
            name,
            params
            })
        );
        }
    }
export function push(name: string, params: any = {}) {
    if (navigateRef.isReady()) {
        navigateRef.dispatch(StackActions.push(name, params));
    }
    }
    
    export function reset(name: string, params: any = {}) {
    if (navigateRef.isReady()) {
        navigateRef.dispatch(
        CommonActions.reset({
            index: 0,
            routes: [{name, params}],
        }),
        );
    }
    }
    
    export function replace(name: string, params: any = {}) {
    if (navigateRef.isReady()) {
        navigateRef.dispatch(StackActions.replace(name, params));
    }
    }
    export function goBack() {
    if (navigateRef.isReady()) {
        navigateRef.dispatch(CommonActions.goBack())
    }
    }


const MainStack = () => {
    return (
        <Stack.Navigator
        screenOptions={{headerShown : false, animation: 'slide_from_right', presentation: 'card',}}
        >
            {/* <Stack.Screen name = "Login" component ={LoginScreen}/> */}
            {/* <Stack.Screen name = "Onboarding" component={OnboardingScreen}/> */}
            <Stack.Screen name = "Maintab" component={MainTab}/>
            <Stack.Screen name = "Play" component = {PlayScreen}/>
            <Stack.Screen name = "RecentlyPlay"  component ={RecentlyPlay1}/>
            <Stack.Screen name = "CategoriesDetail" component={CategoriesDetail}/>
        </Stack.Navigator>
    )
}

export default MainStack

const styles = StyleSheet.create({})
