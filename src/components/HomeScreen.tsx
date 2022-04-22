import React from 'react';
import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Categories from '../contain/Categories';
import Head from '../contain/Head';
import NewRealese from '../contain/NewRealese';
import RecentlyPlay from '../contain/RecentlyPlay';
import BaseComponent from '../functions/BaseComponent';
import {FlatListScroll} from '../functions/PTFunction';
import {baseColor, style} from '../styles';

const HomeScreen = () => {
  return (
    <BaseComponent isMain title="Welcome to Jofy Music" rightIcon>
      <LinearGradient
        start={{x: 0.0, y: 0.1}}
        end={{x: 0.9, y: 1}}
        locations={[0.3, 0.6, 0.9]}
        colors={[baseColor, '#5F7A61', '#444941']}
        style={{flex: 1}}>
        <FlatListScroll>
          <NewRealese />
          <RecentlyPlay />
          <Categories />
        </FlatListScroll>
      </LinearGradient>
    </BaseComponent>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
