import React, {createRef} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {active_opacity, baseBackgroundColor, style} from '../styles';

const Album = () => {
  return (
    <ImageBackground
      source={require('../assets/img_bg.png')}
      resizeMode="stretch"
      style={styles.container}>
      <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
        <TouchableOpacity activeOpacity={active_opacity} onPress={() => {}}>
          <AntDesign
            style={styles.icon}
            name="pluscircle"
            size={234}
            color="#000"
          />
        </TouchableOpacity>
        <Text style={[style.pBold, styles.text]}>creat your album here</Text>
      </View>
    </ImageBackground>
  );
};

export default Album;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: baseBackgroundColor,
    width: '100%',
    height: '100%',
  },
  text: {
    color: '#444941',
    fontSize: 24,
    marginVertical: 27,
  },
  icon: {
    opacity: 0.1,
  },
});
