import React from 'react';
import {
  FlatList,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Categories from '../contain/Categories';
import Head from '../contain/Head';
import NewRealese from '../contain/NewRealese';
import RecentlyPlay from '../contain/RecentlyPlay';
import BaseComponent from '../functions/BaseComponent';
import {FlatListScroll} from '../functions/PTFunction';
import {baseBackgroundColor, baseColor, style} from '../styles';

const HomeScreen = () => {
  return (
    <BaseComponent isMain title="Welcome to Jofy Music" rightIcon>
      <FlatListScroll>
        <ImageBackground
          source={require('../assets/img_bg.png')}
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: baseBackgroundColor,
          }}
          resizeMode="stretch">
          <NewRealese />
          <RecentlyPlay />
          <Categories />
        </ImageBackground>
      </FlatListScroll>
    </BaseComponent>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
