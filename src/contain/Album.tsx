import React, { createRef } from 'react'
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import ActionSheet from "react-native-actions-sheet";
import { Input } from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';

const actionSheetRef: any = createRef();

const Album = () => {
    return (
        <View style={styles.container}>
            <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
                <TouchableOpacity
                activeOpacity={0.6}
                onPress ={() => 
                {
                    actionSheetRef.current?.setModalVisible();
                }}
                >
                    <AntDesign style={styles.icon} name = "pluscircle" size={234} color ="#000"/>
                </TouchableOpacity>
                <Text style={styles.text}>creat your album here</Text>
            </View>
            <ActionSheet ref={actionSheetRef} indicatorColor = '#green'>
                <View style={{ borderTopLeftRadius: 39, borderTopRightRadius: 39, }}>
                    <Input
                    variant = 'rounded'
                    style={{justifyContent: 'center', alignItems: 'center', marginHorizontal: 24, marginTop: 24,}}
                    placeholder = "Wanna create an Album?"
                    />
                </View>
                <TouchableOpacity style={{justifyContent: 'center', alignItems: 'center', }}>
                    <Ionicons  name = 'checkmark-circle-outline' size = {99} color = "green"/>
                </TouchableOpacity>
            </ActionSheet>
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
