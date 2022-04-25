import {Button, HStack} from 'native-base';
import React, {useState} from 'react';
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Ripple from 'react-native-material-ripple';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import BaseComponent from '../functions/BaseComponent';
import {
  active_opacity,
  backgroundLoginColor,
  backgroundSecondColor,
  baseBackgroundColor,
  baseColor,
  borderColor,
  deviceHeight,
  deviceWidth,
  secondaryColor,
  style,
  whiteColor,
} from '../styles';
const ProfileScreen = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  return (
    <BaseComponent isMain title="Welcome to Jofy Music" rightIcon>
      <ImageBackground
        source={require('../assets/img_bg.png')}
        resizeMode="stretch"
        style={{
          flex: 1,
          width: '100%',
          height: '100%',
          backgroundColor: baseBackgroundColor,
        }}>
        <ScrollView>
          <LinearGradient
            colors={['transparent', 'transparent', baseColor]}
            style={{
              width: deviceWidth / 1.2,
              height: deviceHeight / 1.6,
              alignItems: 'center',
              alignSelf: 'center',
              marginTop: deviceHeight / 6,
              borderRadius: 15,
              borderLeftWidth: 1,
              borderRightWidth: 1,
              borderBottomWidth: 1,
              borderColor: '#eee',
            }}>
            <View style={{top: -123, alignItems: 'center'}}>
              <Image
                source={require('../assets/avarta.png')}
                resizeMode="contain"
                style={{
                  height: 234,
                  width: 234,
                }}
              />
              <Text
                style={[
                  style.pBold,
                  {color: whiteColor, fontSize: 21, marginVertical: 6},
                ]}>
                Puthsitha Moeurn
              </Text>
              <HStack
                style={{alignItems: 'center', justifyContent: 'space-between'}}>
                <Ripple
                  rippleDuration={600}
                  rippleOpacity={0.1}
                  onPress={() => {
                    // navigate('CategoriesDetail')
                  }}>
                  <LinearGradient
                    start={{x: 1, y: 0}}
                    end={{x: 0, y: 0.9}}
                    locations={[0, 0.5, 1]}
                    colors={[baseColor, 'transparent', 'transparent']}
                    style={styles.button}>
                    <Text style={[style.p, {color: '#eeee'}]}>
                      Edit Profile
                    </Text>
                  </LinearGradient>
                </Ripple>
                <Ripple
                  rippleDuration={600}
                  rippleOpacity={0.1}
                  onPress={() => {
                    // navigate('CategoriesDetail')
                  }}>
                  <LinearGradient
                    start={{x: 0.0, y: 1}}
                    end={{x: 0.9, y: 1}}
                    locations={[0, 0.5, 1]}
                    colors={[baseColor, 'transparent', 'transparent']}
                    style={[styles.button, {marginLeft: 18}]}>
                    <Text style={[style.p, {color: '#eeee'}]}>
                      Change Password
                    </Text>
                  </LinearGradient>
                </Ripple>
              </HStack>
              <LinearGradient
                colors={[secondaryColor, 'transparent', 'transparent']}
                style={{
                  marginVertical: 12,
                  width: deviceWidth / 1.4,
                  height: deviceHeight / 3.3,
                  borderRadius: 12,
                  borderLeftWidth: 0.3,
                  borderRightWidth: 0.3,
                  borderBottomWidth: 0.3,
                  borderColor: borderColor,
                }}>
                <Ripple
                  rippleDuration={600}
                  rippleOpacity={0.1}
                  onPress={() => {
                    // navigate('CategoriesDetail')
                  }}>
                  <ImageBackground
                    source={require('../assets/landscape_bg.png')}
                    resizeMode="stretch"
                    imageStyle={{borderRadius: 9}}
                    style={{
                      width: 234,
                      height: 45,
                      alignSelf: 'center',
                      marginVertical: 6,
                      justifyContent: 'center',
                      borderBottomWidth: 0.3,
                      borderRadius: 9,
                      borderColor: borderColor,
                    }}>
                    <View
                      style={{
                        alignItems: 'center',
                        flexDirection: 'row',
                        paddingLeft: 72,
                        paddingRight: 9,
                      }}>
                      <Ionicons name="heart" size={24} color="#eee" />
                      <Text
                        style={[
                          style.p,
                          {
                            color: '#fff',
                            textAlign: 'right',
                            marginLeft: 12,
                          },
                        ]}>
                        your favorite song
                      </Text>
                    </View>
                  </ImageBackground>
                </Ripple>
                <Ripple
                  rippleDuration={600}
                  rippleOpacity={0.1}
                  onPress={() => {
                    // navigate('CategoriesDetail')
                  }}>
                  <ImageBackground
                    source={require('../assets/landscape_bg.png')}
                    resizeMode="stretch"
                    imageStyle={{borderRadius: 9}}
                    style={{
                      width: 234,
                      height: 45,
                      alignSelf: 'center',
                      marginVertical: 6,
                      justifyContent: 'center',
                      borderBottomWidth: 0.3,
                      borderColor: borderColor,
                      borderRadius: 9,
                    }}>
                    <View
                      style={{
                        alignItems: 'center',
                        flexDirection: 'row',
                        paddingLeft: 72,
                        paddingRight: 9,
                      }}>
                      <MaterialIcons name="album" size={24} color="#eee" />
                      <Text
                        style={[
                          style.p,
                          {
                            color: '#fff',
                            textAlign: 'right',
                            marginLeft: 12,
                          },
                        ]}>
                        your album
                      </Text>
                    </View>
                  </ImageBackground>
                </Ripple>
                <Ripple
                  rippleDuration={600}
                  rippleOpacity={0.1}
                  onPress={() => {
                    // navigate('CategoriesDetail')
                  }}>
                  <ImageBackground
                    source={require('../assets/landscape_bg.png')}
                    resizeMode="stretch"
                    imageStyle={{borderRadius: 9}}
                    style={{
                      width: 234,
                      height: 45,
                      alignSelf: 'center',
                      marginVertical: 6,
                      justifyContent: 'center',
                      borderBottomWidth: 0.3,
                      borderColor: borderColor,
                      borderRadius: 9,
                    }}>
                    <View
                      style={{
                        alignItems: 'center',
                        flexDirection: 'row',
                        paddingLeft: 72,
                        paddingRight: 9,
                      }}>
                      <MaterialCommunityIcons
                        name="music-circle"
                        size={24}
                        color="#eee"
                      />
                      <Text
                        style={[
                          style.p,
                          {
                            color: '#fff',
                            textAlign: 'right',
                            marginLeft: 12,
                          },
                        ]}>
                        most listening song
                      </Text>
                    </View>
                  </ImageBackground>
                </Ripple>
                <Ripple
                  rippleDuration={600}
                  rippleOpacity={0.1}
                  onPress={() => {
                    // navigate('CategoriesDetail')
                  }}>
                  <ImageBackground
                    source={require('../assets/landscape_bg.png')}
                    resizeMode="stretch"
                    imageStyle={{borderRadius: 9}}
                    style={{
                      width: 234,
                      height: 45,
                      alignSelf: 'center',
                      marginVertical: 6,
                      justifyContent: 'center',
                    }}>
                    <View
                      style={{
                        alignItems: 'center',
                        flexDirection: 'row',
                        paddingLeft: 72,
                        paddingRight: 9,
                      }}>
                      <MaterialCommunityIcons
                        name="logout"
                        size={24}
                        color="#eee"
                      />
                      <Text
                        style={[
                          style.p,
                          {
                            color: '#fff',
                            textAlign: 'right',
                            marginLeft: 12,
                          },
                        ]}>
                        Logout
                      </Text>
                    </View>
                  </ImageBackground>
                </Ripple>
              </LinearGradient>
            </View>
          </LinearGradient>
        </ScrollView>
      </ImageBackground>
    </BaseComponent>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  image: {
    width: 127,
    height: 246,
  },
  input: {
    width: deviceWidth - 40,
    borderRadius: 18,
    marginVertical: 9,
  },
  bottom: {
    width: deviceWidth - 99,
    padding: 24,
    borderRadius: 33,
    backgroundColor: backgroundLoginColor,
    marginTop: 9,
  },
  socialButton: {
    borderRadius: 33,
    paddingHorizontal: 24,
    paddingVertical: 3,
    alignItems: 'center',
    marginHorizontal: 24,
    flexDirection: 'row',
  },
  singIn: {
    color: 'black',
    marginVertical: 9,
    textAlign: 'center',
  },
  wrap: {
    marginHorizontal: 30,
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 12,
    marginLeft: 12,
  },
  account: {
    marginVertical: 12,
    fontSize: 12,
    color: secondaryColor,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 9,
    width: 123,
    height: 54,
    borderTopRightRadius: 9,
    borderBottomRightRadius: 9,
    borderColor: borderColor,
    marginVertical: 3,
    borderRightWidth: 0.3,
    borderLeftWidth: 0.3,
  },
});
