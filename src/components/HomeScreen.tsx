import React from 'react'
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import Categories from '../contain/Categories'
import Head from '../contain/Head'
import NewRealese from '../contain/NewRealese'
import RecentlyPlay from '../contain/RecentlyPlay'
import BaseComponent from '../functions/BaseComponent'
import { FlatListScroll } from '../functions/PTFunction'
import { style } from '../styles'

const HomeScreen = () => {
    return (
        <BaseComponent isMain title="Welcome to Jofy Music" rightIcon>
            <View style={style.container}>
                <FlatListScroll>
                    <NewRealese />
                    <RecentlyPlay />
                    <Categories />
                </FlatListScroll>
            </View>
        </BaseComponent>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
})
