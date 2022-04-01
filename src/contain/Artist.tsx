import React, { useCallback } from 'react'
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { active_opacity, style } from '../styles'
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
                <TouchableOpacity 
                activeOpacity={active_opacity}
                onPress ={() => {}}
                >
                    <Image
                    source={item.image}
                    resizeMode = 'cover'
                    resizeMethod = 'resize'
                    style={styles.image}
                    />
                    <Text style={[style.pE, styles.text]}>
                        {item.name}
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <Text style={[style.pt ,styles.header]}>Artist</Text>
            <FlatList
                numColumns={2}
                data={ArtistData}
                showsHorizontalScrollIndicator = {false}
                renderItem ={renderItems}
                contentContainerStyle={{marginHorizontal: 12,}}
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
        color: '#fff',
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
        width: 159,
        height: 164,
        borderRadius: 12,
        marginRight: 12,
        marginBottom: 12,
    },
    text:
    {
        color: '#fff',
        fontSize: 15,
        textAlign: 'center',
        marginTop: 9,
    }
})
