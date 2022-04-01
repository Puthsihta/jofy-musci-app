import { useNavigation } from '@react-navigation/core'
import React, {useCallback, useEffect, useRef, useState } from 'react'
import { Image, Animated, StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native'
import { navigate } from '../navigate/MainStack'
import { Recently } from '../temp/Recently'

const RecentlyPlay1 = () => {
    const onPlay = (item: any) =>
    {
        navigate('Play', {
            data: item
        })
    }
    
    const keyExtractor = useCallback(
        (_, index) => {
            return index.toString()
        },
        [],
    )

    const renderItems = ({item, index}: any) => {
        return(
            <TouchableOpacity
            onPress ={() => {
                if(index === 0)
                {
                    onPlay(item)
                }
            }} style={{marginLeft: 12, marginTop: 9}}
            >
                <Image
                    source = {item.image}
                    resizeMode= 'cover'
                    resizeMethod = 'resize'
                    style={styles.image}
                />
            </TouchableOpacity>
        )
    }
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Recently Play</Text>
            <FlatList
                numColumns = {2}
                data={Recently}
                keyExtractor={keyExtractor}
                renderItem={renderItems}
                showsHorizontalScrollIndicator = {false}
            />
        </View>
    )
}

export default RecentlyPlay1

const styles = StyleSheet.create({
    container:
    {
        
        flex: 1,
        backgroundColor: '#7FC8A9'
    },
    header:
    {
        fontSize: 36,
        fontFamily: 'Roboto',
        color: '#fff',
        fontWeight: 'bold',
        marginHorizontal: 24,
        marginTop: 24,
    },
    image:
    {
        width: 143,
        height: 123,
        borderRadius: 15,
        marginHorizontal: 12,
        marginVertical: 12
    }
})
