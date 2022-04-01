import React, { useCallback } from 'react'
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { height, textAlign } from 'styled-system'
import { ArtistData } from '../temp/Artist'

const Artist = () => {
    const keyExtrator = useCallback(
        (_, index) => {
            return index.toString()
        },
        [],
    )
    const renderItems = ({item}:any) => {
        return(
            <View style={styles.Items}>
                <TouchableOpacity activeOpacity={0.5}>
                    <Image
                    source={item.image}
                    resizeMode = 'cover'
                    resizeMethod = 'resize'
                    style={styles.image}
                    />
                    <Text style={styles.text}>
                        {item.name}
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Artist</Text>
            <FlatList
                numColumns={2}
                data={ArtistData}
                showsHorizontalScrollIndicator = {false}
                renderItem ={renderItems}
                keyExtractor={keyExtrator}
                
            />
        </View>
    )
}

export default Artist

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
        marginHorizontal: 12,
        marginVertical: 12,
    },
    image:
    {
        width: 120,
        height: 117,
        borderRadius: 99,
    },
    Items:
    {
        backgroundColor: '#6BB495',
        paddingVertical: 9,
        paddingHorizontal: 18,
        marginVertical: 12,
        marginHorizontal: 12,
        width: 159,
        height: 164,
        borderRadius: 12,
    },
    text:
    {
        fontWeight: 'bold',
        color: '#fff',
        fontSize: 15,
        fontFamily: 'Roboto',
        textAlign: 'center',
        marginTop: 9,
    }
})
