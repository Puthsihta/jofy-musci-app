import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const CategoriesDetail = (props:any) => {
    
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{props.name}</Text>
        </View>
    )
}

export default CategoriesDetail

const styles = StyleSheet.create({
    container:
    {
        flex: 1,
        backgroundColor: '#7FC8A9'
    },
    text:
    {
        color: '#444941',
        fontFamily: 'Roboto',
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 27,
    },
})
