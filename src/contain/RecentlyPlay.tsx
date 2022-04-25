import {useNavigation} from '@react-navigation/core';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {
  Image,
  Animated,
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import DropShadow from 'react-native-drop-shadow';
import CustomDropShadow from '../custom_item/CustomDropShadow';
import {navigate} from '../navigate/MainStack';
import {active_opacity, style} from '../styles';
import {Recently} from '../temp/Recently';

const RecentlyPlay = () => {
  const keyExtractor = useCallback((_, index) => {
    return index.toString();
  }, []);

  const renderItems = ({item, index}: any) => {
    return (
      <TouchableOpacity
        activeOpacity={active_opacity}
        onPress={() => {
          navigate('Play', {
            data: item,
          });
        }}>
        <DropShadow
          style={{
            shadowColor: '#333',
            shadowOffset: {
              width: 9,
              height: 9,
            },
            shadowOpacity: 0.6,
            shadowRadius: 1,
          }}>
          <Image
            source={item.image[0].url}
            resizeMode="cover"
            resizeMethod="resize"
            style={styles.image}
          />
        </DropShadow>
      </TouchableOpacity>
    );
  };
  return (
    <>
      <CustomDropShadow text="Recently Play" />
      <FlatList
        data={Recently}
        keyExtractor={keyExtractor}
        renderItem={renderItems}
        showsHorizontalScrollIndicator={false}
        horizontal
      />
    </>
  );
};

export default RecentlyPlay;

const styles = StyleSheet.create({
  container: {
    marginLeft: 12,
  },
  header: {
    fontSize: 36,
    fontFamily: 'Roboto',
    color: '#fff',
    fontWeight: 'bold',
  },
  image: {
    width: 123,
    height: 123,
    borderRadius: 15,
    marginHorizontal: 12,
    marginVertical: 12,
  },
});
