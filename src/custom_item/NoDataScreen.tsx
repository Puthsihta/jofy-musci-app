import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {style, width} from '../styles';
import LottieView from 'lottie-react-native';
import { useSelector } from 'react-redux';

const NoDataScreen = (props: any) => {
  const lang:any = useSelector((state: any) => state.lang)
  return (
    <ScrollView refreshControl={props.refreshControl}>
      <View
        style={[
          styles.icon,
          {
            ...props,
          },
        ]}>
        <View style={{width:width/2,height:width/2}}>
          <LottieView  source={require('../assets/nodata.json')} autoPlay />
        </View>
        <Text
          style={[
            style.p,
            {
              marginTop: 10,
              color:'#000'
            },
          ]}>
            {lang['no_data']}
        </Text>
      </View>
    </ScrollView>
  );
};

export default NoDataScreen;

const styles = StyleSheet.create({
  icon: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
});
