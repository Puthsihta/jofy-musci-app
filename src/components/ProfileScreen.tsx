import {
  Button,
  Center,
  HStack,
  Icon,
  Input,
  Link,
  Toast,
  useToast,
} from 'native-base';
import React, {useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import BaseComponent from '../functions/BaseComponent';
import {
  active_opacity,
  backgroundLoginColor,
  backgroundSecondColor,
  baseBackgroundColor,
  deviceWidth,
  secondaryColor,
  style,
  whiteColor,
} from '../styles';
import LottieView from 'lottie-react-native';
import {navigate} from '../navigate/MainStack';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
const ProfileScreen = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  return (
    <BaseComponent isMain title="Welcome to Jofy Music" rightIcon>
      <View style={style.container}>
        <ScrollView>
          <Center style={{marginTop: 24}}>
            <Image
              source={require('../assets/logo.png')}
              resizeMethod="resize"
              resizeMode="cover"
              style={styles.image}
            />
            <Text
              style={[
                style.pBold,
                {
                  textTransform: 'uppercase',
                  marginVertical: 18,
                  fontSize: 24,
                  color: '#eee',
                },
              ]}>
              login
            </Text>
            <View style={styles.input}>
              <Input
                borderColor={secondaryColor}
                placeholder="username here"
                placeholderTextColor="#888"
                variant="rounded"
                _focus={{borderColor: '#eee'}}
                InputLeftElement={
                  <Icon
                    as={<AntDesign name="user" />}
                    size={6}
                    marginLeft="3"
                    color="#999"
                  />
                }
              />
            </View>
            <View style={styles.input}>
              <Input
                borderColor={secondaryColor}
                type={show ? 'text' : 'password'}
                overflow="visible"
                _focus={{borderColor: '#eee'}}
                placeholderTextColor="#888"
                InputRightElement={
                  <TouchableOpacity
                    activeOpacity={active_opacity}
                    onPress={handleClick}>
                    <Icon
                      as={
                        show ? (
                          <MaterialCommunityIcons name="eye" size={9} />
                        ) : (
                          <MaterialCommunityIcons
                            name="eye-off"
                            color="black"
                            size={9}
                          />
                        )
                      }
                      mr={3}
                      color="#666"
                    />
                  </TouchableOpacity>
                }
                secureTextEntry={show}
                placeholder="password here"
                variant="rounded"
                InputLeftElement={
                  <Icon
                    as={<Ionicons name="key-outline" />}
                    size={6}
                    marginLeft="3"
                    color="#999"
                  />
                }
              />
            </View>
            <TouchableOpacity>
              <LinearGradient
                colors={[
                  backgroundSecondColor,
                  baseBackgroundColor,
                  backgroundLoginColor,
                ]}
                style={{
                  height: 39,
                  width: 99,
                  borderRadius: 9,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text style={[style.p, {color: whiteColor}]}>Login</Text>
              </LinearGradient>
            </TouchableOpacity>
            <Text style={styles.singIn}>or Sign in with</Text>
            <HStack style={styles.wrap} justifyContent="space-around">
              <TouchableOpacity>
                <LinearGradient
                  colors={['#4c669f', '#3b5998', '#192f9a']}
                  style={[styles.socialButton]}>
                  <Link href="https://web.facebook.com/?_rdc=1&_rdr">
                    <LottieView
                      source={require('../assets/facebook.json')}
                      autoPlay
                      loop
                      style={{width: 30, height: 30}}
                      autoSize
                      speed={2}
                    />
                    <Text style={{marginTop: 5, color: '#ffffff'}}>
                      Facebook
                    </Text>
                  </Link>
                </LinearGradient>
              </TouchableOpacity>
              <TouchableOpacity>
                <LinearGradient
                  colors={['#FF6B6B', '#F05454', '#B33030']}
                  style={[styles.socialButton]}>
                  <Link href="https://accounts.google.com/signin/v2/identifier?flowName=GlifWebSignIn&flowEntry=ServiceLogin">
                    <LottieView
                      source={require('../assets/google.json')}
                      autoPlay
                      loop
                      style={{width: 30, height: 30}}
                      autoSize
                      speed={2}
                    />
                    <Text style={{marginTop: 5, color: '#ffffff'}}>Goggle</Text>
                  </Link>
                </LinearGradient>
              </TouchableOpacity>
            </HStack>
            <TouchableOpacity
              onPress={() => {
                // navigate('SignIn');
              }}>
              <Text style={styles.account}>Creat an Account</Text>
            </TouchableOpacity>
          </Center>
        </ScrollView>
      </View>
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
});
