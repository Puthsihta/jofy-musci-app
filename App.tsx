import {NativeBaseProvider} from 'native-base';
import React, {useEffect} from 'react';
import {StatusBar, StyleSheet} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

import Route from './src/navigate/Routes';
import {baseBackgroundColor} from './src/styles';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <>
      <StatusBar
        backgroundColor={baseBackgroundColor}
        barStyle="light-content"
      />
      <NativeBaseProvider>
        <Route />
      </NativeBaseProvider>
    </>
  );
};

export default App;

const styles = StyleSheet.create({});
