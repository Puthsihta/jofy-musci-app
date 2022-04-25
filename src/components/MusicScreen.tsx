import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {HStack, Button} from 'native-base';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Album from '../contain/Album';
import Artist from '../contain/Artist';
import Playlist from '../contain/Playlist';
import {baseBackgroundColor, baseColor, secondaryColor} from '../styles';
const Tab = createMaterialTopTabNavigator();
const MusicScreen = () => {
  return (
    <Tab.Navigator
      tabBarPosition="top"
      keyboardDismissMode="auto"
      backBehavior="history"
      screenOptions={{
        tabBarActiveTintColor: secondaryColor,
        tabBarInactiveTintColor: '#8A8F87',
        tabBarLabelStyle: {
          fontSize: 13,
          fontWeight: 'bold',
          fontFamily: 'Roboto',
          borderRadius: 15,
          backgroundColor: '#C4C4C4',
          paddingHorizontal: 12,
          paddingVertical: 9,
          width: 99,
          height: 36,
          alignSelf: 'center',
        },
        // tabBarItemStyle: { marginHorizontal: 9, },
        tabBarStyle: {backgroundColor: '#7FC8A9'},
        tabBarContentContainerStyle: {backgroundColor: baseBackgroundColor},
      }}>
      <Tab.Screen name="Playlist" component={Playlist} />
      <Tab.Screen name="Artist" component={Artist} />
      <Tab.Screen name="Album" component={Album} />
    </Tab.Navigator>
  );
};

export default MusicScreen;

const styles = StyleSheet.create({
  nav: {
    marginHorizontal: 12,
    marginTop: 12,
  },
  item: {
    backgroundColor: '#C4C4C4',
  },
  text: {
    fontWeight: 'bold',
    color: '#444941',
    fontFamily: 'Roboto',
  },
});
