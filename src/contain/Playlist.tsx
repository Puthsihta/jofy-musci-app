import { HStack, ScrollView, VStack } from 'native-base'
import React, { createRef, useCallback } from 'react'
import { FlatList, Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo'
import { navigate } from '../navigate/MainStack'
import { PlaylistData } from '../temp/PlaylistData'
import ActionSheet from "react-native-actions-sheet";
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { active_opacity, style } from '../styles'

const actionSheetRef: any = createRef();

const Playlist = () => {
    const onPlay = (item: any) =>
    {
        navigate('RecentlyPlay', {
            data: item
        })
    }
    const keyExtrator = useCallback(
        (_, index) => {
            return index.toString()
        },
        [],
    )
    const renderItems = ({item, index}: any) => {
        return(
            <ScrollView style={{marginHorizontal: 12,}}>
                <TouchableOpacity
                activeOpacity={active_opacity}
                onPress ={() => {
                    
                }}
                >
                    <HStack style={styles.itemsRow}>
                            <Image
                            source = {item.image}
                            resizeMethod = 'resize'
                            resizeMode = 'cover'
                            style={styles.image}
                            />
                        <VStack style={styles.itemColum}>
                            <Text style={styles.title}>
                                {item.title}
                            </Text>
                            <Text style={styles.numberSong}>
                                {item.songNumber} songs
                            </Text>
                        </VStack>
                        <TouchableOpacity onPress ={() => {
                            actionSheetRef.current?.setModalVisible();
                        }}>
                            <Entypo style={styles.icon} name = "dots-three-vertical" size = {24} color="#444941"/>
                        </TouchableOpacity>
                    </HStack>
                </TouchableOpacity>
            </ScrollView>
        )
    }
    return (
        <View style={styles.container}>
            <Text style={[style.pt, styles.header]}>PlayList</Text>
            <FlatList
            data={PlaylistData}
            showsHorizontalScrollIndicator = {false}
            renderItem={renderItems}
            keyExtractor={keyExtrator}
            />
            <ActionSheet ref={actionSheetRef}>
                <View style={{ borderTopLeftRadius: 39, borderTopRightRadius: 39,}}>
                    <TouchableOpacity style={{marginVertical: 24,}}>
                        <HStack style={{justifyContent:'flex-start', alignItems: 'center', marginHorizontal: 24,}}>
                                <Ionicons style={{marginRight: 24,}} name = "add" size = {24} color = "#000"/>
                                <Text style={{color : "#000"}}>Add Song</Text>
                        </HStack>
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginVertical: 24,}}>
                        <HStack style={{justifyContent:'flex-start', alignItems: 'center', marginHorizontal: 24,}}>
                                <MaterialIcons style={{marginRight: 24,}} name = "delete-outline" size = {24} color = "#000"/>
                                <Text style={{color : "#000"}}>Delete PlayList</Text>
                        </HStack>
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginVertical: 24,}}>
                        <HStack style={{justifyContent:'flex-start', alignItems: 'center', marginHorizontal: 24,}}>
                                <Ionicons style={{marginRight: 24,}} name = "download-outline" size = {24} color = "#000"/>
                                <Text style={{color : "#000"}}>Download song from this Playlist</Text>
                        </HStack>
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginVertical: 24,}}>
                        <HStack style={{justifyContent:'flex-start', alignItems: 'center', marginHorizontal: 24,}}>
                                <Ionicons style={{marginRight: 24,}} name = "share-social-outline" size = {24} color = "#000"/>
                                <Text style={{color : "#000"}}>Share this Playlist</Text>
                        </HStack>
                    </TouchableOpacity>
                </View>
            </ActionSheet>
        </View>
    )
}

export default Playlist

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
        borderRadius: 99,
        width: 67,
        height: 67,
    },
    itemsRow:
    {
        backgroundColor: '#6BB495',
        paddingHorizontal: 9,
        paddingVertical: 12,
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 15,
        marginVertical: 9
    },
    itemColum:
    {
        marginHorizontal: 21,
        marginVertical: 9,
        alignItems:'center',
    },
    icon:
    {
        marginHorizontal: 12,
    },
    title:
    {
        color : "#444941",
        fontFamily: 'Roboto',
        fontSize: 12,
        fontWeight: 'bold',
    },
    numberSong:
    {
        color : "#444941",
        fontFamily: 'Roboto',
        fontSize: 9,
        fontWeight: 'bold',
    }
})
