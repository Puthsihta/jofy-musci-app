import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import DropShadow from 'react-native-drop-shadow';
import {backgroundSecondColor, style} from '../styles';
import {Battambang} from '../custom_fonts/customFont';
const CustomDropShadow = ({text}: any) => {
  return (
    <>
      <DropShadow
        style={{
          shadowColor: backgroundSecondColor,
          shadowOffset: {
            width: 0,
            height: 0,
          },
          shadowOpacity: 1,
          shadowRadius: 1,
        }}>
        <Text style={style.homePageTitle}>{text}</Text>
      </DropShadow>
    </>
  );
};

export default CustomDropShadow;

const styles = StyleSheet.create({
  homePageTitle: {
    fontSize: 33,
    color: '#fff',
    marginLeft: 18,
    ...Battambang,
  },
});
