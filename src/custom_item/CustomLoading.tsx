import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {height, style, width } from '../styles'
import LottieView from 'lottie-react-native';

const CustomLoading = (props:any) => {
  return props.visible?(
        <View style={[styles.container]}>
            <View style={{width:100,height:80,justifyContent:'center',alignItems:'center',backgroundColor:'#eee',borderRadius:10}}>
                <View style={{width:70,height:50}}>
                  <LottieView  source={require('../assets/loading.json')} autoPlay />
                </View>
                <Text style={[style.p,{color:'#000',fontSize:15}]}>សូមរង់ចាំ</Text> 
            </View>
        </View> 
  ):null
}
export default React.memo(CustomLoading)
const styles = StyleSheet.create({
    container:{
        backgroundColor:'rgba(0,0,0,0.5)',
        justifyContent:'center',
        alignItems:'center',
        position:'absolute',
        width:width,
        height:height
    }
})