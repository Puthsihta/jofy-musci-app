import React, { useCallback } from 'react'
import { Image, StyleSheet, Text, View, TouchableOpacity, FlatList} from 'react-native'
import { navigate } from '../navigate/MainStack'
import { active_opacity, style } from '../styles'
import { Release } from '../temp/Release'

const NewRealese = () => {
    const keyExtrator = useCallback(
        (_, index) => {
            return index.toString()
        },
        [],
    )
    const renderItems = ({item, index}: any) => {
        return(
            <TouchableOpacity
            activeOpacity={active_opacity}
            onPress ={() => {
                navigate('Play', {data: item})
            }}>
                <Image
                source = {item.image[0].url}
                resizeMethod = 'resize'
                resizeMode = 'cover'
                style={styles.image}
                />
            </TouchableOpacity>
        )
    }
    return (
        <>
            <Text style={[style.homePageTitle, ]}>New Releases</Text>
            <FlatList
                showsHorizontalScrollIndicator = {false}
                horizontal
                data={Release} 
                renderItem={renderItems}
                keyExtractor={keyExtrator}
            />
        </>
    )
}

export default NewRealese

const styles = StyleSheet.create({
    image:
    {
        width: 234,
        height: 169,
        borderRadius: 20,
        marginHorizontal: 12,
        marginVertical: 12
    }
})
