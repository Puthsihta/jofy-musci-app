import React from 'react';
import { Image, StatusBar, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {active_opacity, baseBackgroundColor, baseColor, deviceWidth, style, whiteColor} from '../styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Center, HStack } from 'native-base';
import Feather from 'react-native-vector-icons/Feather';
import { goBack, navigate } from '../navigate/MainStack';
import LottieView from 'lottie-react-native';

const MainHeader = ({
  title, 
  rightIcon, 
  isMain,
  RightIcon,
  backgroundColor,
  textSearch
}: any) => {

  return (
    <View style={[styles.container,{backgroundColor: backgroundColor ? backgroundColor : baseBackgroundColor,}]}>
            <TouchableOpacity
            onPress={() => {isMain ?
                {}
                : goBack()}}
              activeOpacity={active_opacity}
            >
                {isMain ? 
                  <LottieView style={styles.icon} source={require('../assets/top.json')} autoPlay loop/>
                  :
                  <AntDesign name="arrowleft" size={25} color={'#fff'}/>
                }
            </TouchableOpacity>
            <View style={styles.backgroundColor}>
              {title && <Text style={[style.pBold ,styles.text]}>{title}</Text>}
            </View>
              {
                RightIcon ? (RightIcon) : rightIcon ? (
                    <TouchableOpacity 
                      // onPress={()=> navigate('Search')}
                      activeOpacity={active_opacity}
                    >
                        <LottieView style={styles.icon} source={require('../assets/top.json')} autoPlay loop/>
                    </TouchableOpacity>
                  ):null
              }
    </View>
  );
};

export default React.memo(MainHeader);

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: '100%',
    paddingHorizontal: 18,
    flexDirection: 'row',
    // justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    width: '70%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchBox:{
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: baseBackgroundColor,
    paddingHorizontal: 12,
    borderRadius: 3,
    height: 40
  },
    text:
    {
        fontSize: 15,
        color: '#444941',
        opacity: 0.4,
        textAlign: 'center',
        textTransform: 'uppercase',
    },
    icon:
    {
        width: 36,
        height: 36,
    },
    backgroundColor:
    {
      backgroundColor: "#C4C4C4",
      borderRadius: 18,
      width: 240,
      height: 36,
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'center',
      marginHorizontal: 9
    }
});
