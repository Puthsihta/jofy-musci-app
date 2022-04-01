import { NativeBaseProvider } from 'native-base';
import React, { useEffect } from 'react'
import { StatusBar, StyleSheet,} from 'react-native'
import RNBootSplash from "react-native-bootsplash";
import Route from './src/navigate/Routes';
import { baseBackgroundColor } from './src/styles';

const App = () => {
  useEffect(() => { 
      RNBootSplash.hide({ fade: true });
  }, []);

  return (
    <>
      <StatusBar backgroundColor={baseBackgroundColor} barStyle="light-content" />
      <NativeBaseProvider>
        <Route/>
      </NativeBaseProvider>
    </>
  )
}

export default App

const styles = StyleSheet.create({})
