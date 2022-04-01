import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { StyleSheet,} from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import MainStack, { navigateRef } from './MainStack'

const Route = () => {
    return (
        <SafeAreaProvider>
            <NavigationContainer ref ={navigateRef}>
                <MainStack/>
            </NavigationContainer>
        </SafeAreaProvider>
    )
}

export default Route

const styles = StyleSheet.create({})
