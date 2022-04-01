import React, { createRef } from 'react'
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { active_opacity } from '../styles';


const Album = () => {
    return (
        <View style={styles.container}>
            <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
                <TouchableOpacity
                activeOpacity={active_opacity}
                onPress ={() => 
                {
                    
                }}
                >
                    <AntDesign style={styles.icon} name = "pluscircle" size={234} color ="#000"/>
                </TouchableOpacity>
                <Text style={styles.text}>creat your album here</Text>
            </View>
        </View>
    )
}

export default Album

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
    icon:
    {
        opacity : 0.1
    }
})
