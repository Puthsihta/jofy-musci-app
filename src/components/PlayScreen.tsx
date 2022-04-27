import {Alert, HStack, VStack} from 'native-base';
import React, {useEffect, useState, createRef} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  PermissionsAndroid,
  Platform,
  ImageBackground,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import Head from '../contain/Head';
import Slider from '@react-native-community/slider';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import TrackPlayer, {
  Capability,
  Event,
  RepeatMode,
  State,
  usePlaybackState,
  useProgress,
  useTrackPlayerEvents,
} from 'react-native-track-player';
import {Track} from '../temp/Track';
import ActionSheet from 'react-native-actions-sheet';
import Share from 'react-native-share';
import BaseComponent from '../functions/BaseComponent';
import {
  backgroundSecondColor,
  baseBackgroundColor,
  deviceHeight,
  secondaryColor,
  style,
} from '../styles';
import {convertHMS} from '../functions/PTFunction';
import Swiper from 'react-native-swiper';
import DropShadow from 'react-native-drop-shadow';
const actionSheetRef: any = createRef();

TrackPlayer.updateOptions({
  stopWithApp: true,
  capabilities: [
    Capability.Play,
    Capability.Pause,
    Capability.SkipToNext,
    Capability.SkipToPrevious,
    Capability.Stop,
    Capability.SeekTo,
  ],
  compactCapabilities: [Capability.Play, Capability.Pause],
});
icon: require('../assets/logo.png');

const Play = (props: any) => {
  const {data} = props.route.params;

  const trackPlayerInit = async () => {
    await TrackPlayer.setupPlayer();
    await TrackPlayer.add(data.track ? data.track : Track);
  };

  const [show1, setShow1] = useState(true);
  const handleClick1 = () => setShow1(!show1);
  const [show2, setShow2] = useState(true);
  const handleClick2 = () => setShow2(!show2);

  const shareSong = async () => {
    const shareOption = {
      message: 'Sharing',
    };
    try {
      const shareResponse = await Share.open(shareOption);
    } catch (e) {
      console.log(e);
    }
  };

  const [isTrackPlayerInit, setIsTrackPlayerInit] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const startPlayer = async () => {
      let isInit: any = await trackPlayerInit();
      setIsTrackPlayerInit(isInit);
    };
    startPlayer();
  }, []);

  const isPlayPuase = () => {
    if (!isPlaying) {
      TrackPlayer.play();
      setIsPlaying(true);
    } else {
      TrackPlayer.pause();
      setIsPlaying(false);
    }
  };

  const [sliderValue, setSliderValue]: any = useState(0);
  const [isSeeking, setIsSeeking] = useState(false);
  const {position, duration} = useProgress(250);
  const progress = useProgress();

  useEffect(() => {
    if (!isSeeking && position && duration) {
      setSliderValue(position / duration);
    }
  }, [position, duration]);
  const slidingStarted = () => {
    setIsSeeking(true);
  };
  const slidingCompleted = async (Value: any) => {
    await TrackPlayer.seekTo(Value * duration);
    setSliderValue(Value);
    setIsSeeking(false);
  };
  const [index, setIndex] = useState(1);

  return (
    <BaseComponent title="Welcome to Jofy Music" rightIcon>
      <ImageBackground
        source={require('../assets/img_bg.png')}
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: baseBackgroundColor,
        }}
        resizeMode="stretch">
        <Swiper
          loop={false}
          showsButtons={false}
          autoplay={false}
          // index={index}
          showsPagination={false}
          style={{height: deviceHeight / 2.5 + 18}}
          onIndexChanged={() => {}}>
          {data.image?.map((e: any) => (
            <Image
              style={[styles.image, {}]}
              source={e.url}
              resizeMethod="resize"
              resizeMode="cover"
            />
          ))}
        </Swiper>
        <View style={{top: -54}}>
          <HStack
            style={{
              justifyContent: 'space-between',
              alignItems: 'center',
              marginHorizontal: 24,
            }}>
            <VStack>
              <Text style={[style.pt, styles.title]}>{data.title}</Text>
              <Text style={styles.artist}>{data.artist}</Text>
            </VStack>
            <TouchableOpacity
              onPress={() => {
                actionSheetRef.current?.setModalVisible();
              }}>
              <Entypo name="dots-three-vertical" size={24} color="#cecece" />
            </TouchableOpacity>
          </HStack>
          <HStack style={styles.optionPlay}>
            <TouchableOpacity onPress={handleClick1}>
              {show1 ? (
                <Ionicons name="heart-outline" size={24} color="#fff" />
              ) : (
                <Ionicons name="heart" size={24} color="#fff" />
              )}
            </TouchableOpacity>
            <TouchableOpacity onPress={handleClick2}>
              {show2 ? (
                <MaterialCommunityIcons name="repeat" size={27} color="#fff" />
              ) : (
                <MaterialCommunityIcons
                  name="repeat-once"
                  size={27}
                  color="#fff"
                />
              )}
            </TouchableOpacity>
          </HStack>
          <Slider
            value={progress.position}
            minimumValue={0}
            maximumValue={progress.duration}
            thumbTintColor="#C4C4C4"
            minimumTrackTintColor="#5F7A61"
            maximumTrackTintColor="#fff"
            onSlidingStart={slidingStarted}
            onSlidingComplete={async value => {
              await TrackPlayer.seekTo(value);
            }}
            style={styles.slider}
          />
          <HStack
            style={[
              ,
              {
                justifyContent: 'space-between',
                alignItems: 'center',
                marginHorizontal: 24,
              },
            ]}>
            <Text style={{color: '#656556'}}>
              {convertHMS(progress.position)}
            </Text>
            <Text style={{color: '#656556'}}>
              {convertHMS(progress.duration)}
            </Text>
          </HStack>
          <DropShadow
            style={{
              shadowColor: '#333',
              shadowOffset: {
                width: 1,
                height: 6,
              },
              shadowOpacity: 0.6,
              shadowRadius: 1,
            }}>
            <HStack style={styles.playControl}>
              <TouchableOpacity
                onPress={() => {
                  TrackPlayer.skipToPrevious().catch(() => {
                    console.log('No Previous Track');
                    setIndex(index - 1);
                  });
                }}>
                <Image
                  source={require('../assets/tool/btn_play_back.png')}
                  style={{
                    width: 42,
                    height: 42,
                    alignSelf: 'center',
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={isPlayPuase}>
                {isPlaying ? (
                  <Image
                    source={require('../assets/tool/btn_play.png')}
                    style={{
                      width: 69,
                      height: 69,
                      alignSelf: 'center',
                      marginTop: 6,
                    }}
                  />
                ) : (
                  <Image
                    source={require('../assets/tool/btn_pause.png')}
                    style={{
                      width: 69,
                      height: 69,
                      alignSelf: 'center',
                      marginTop: 6,
                    }}
                  />
                )}
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  TrackPlayer.skipToNext().catch(() => {
                    console.log('No Next Track');
                    setIndex(index + 1);
                  });
                }}>
                <Image
                  source={require('../assets/tool/btn_play_next.png')}
                  style={{
                    width: 42,
                    height: 42,
                    alignSelf: 'center',
                  }}
                />
              </TouchableOpacity>
            </HStack>
          </DropShadow>
        </View>
        <ActionSheet ref={actionSheetRef}>
          <View style={{borderTopLeftRadius: 39, borderTopRightRadius: 39}}>
            <TouchableOpacity style={{marginVertical: 24}}>
              <HStack
                style={{
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                  marginHorizontal: 24,
                }}>
                <Ionicons
                  style={{marginRight: 24}}
                  name="person-outline"
                  size={24}
                  color="#000"
                />
                <Text style={{color: '#000'}}>Artist: {data.artist}</Text>
              </HStack>
            </TouchableOpacity>
            <TouchableOpacity style={{marginVertical: 24}}>
              <HStack
                style={{
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                  marginHorizontal: 24,
                }}>
                <Ionicons
                  style={{marginRight: 24}}
                  name="disc-outline"
                  size={24}
                  color="#000"
                />
                <Text style={{color: '#000'}}>Album: {data.title}</Text>
              </HStack>
            </TouchableOpacity>
            <TouchableOpacity style={{marginVertical: 24}}>
              <HStack
                style={{
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                  marginHorizontal: 24,
                }}>
                <Ionicons
                  style={{marginRight: 24}}
                  name="download-outline"
                  size={24}
                  color="#000"
                />
                <Text style={{color: '#000'}}>Download this song</Text>
              </HStack>
            </TouchableOpacity>
            <TouchableOpacity style={{marginVertical: 24}} onPress={shareSong}>
              <HStack
                style={{
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                  marginHorizontal: 24,
                }}>
                <Ionicons
                  style={{marginRight: 24}}
                  name="share-social-outline"
                  size={24}
                  color="#000"
                />
                <Text style={{color: '#000'}}>Share this song</Text>
              </HStack>
            </TouchableOpacity>
          </View>
        </ActionSheet>
      </ImageBackground>
    </BaseComponent>
  );
};

export default Play;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7FC8A9',
  },
  image: {
    width: 315,
    height: 288,
    borderRadius: 30,
    marginVertical: 18,
    marginHorizontal: 24,
  },
  title: {
    color: '#fff',
    fontSize: 21,
  },
  artist: {
    color: '#eee',
    fontSize: 18,
    marginVertical: 6,
  },
  slider: {
    width: 350,
    height: 40,
    marginTop: 12,
    flexDirection: 'row',
  },
  playControl: {
    marginHorizontal: 27,
    marginVertical: 27,
    backgroundColor: secondaryColor,
    paddingVertical: 7,
    paddingHorizontal: 45,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 39,
  },
  optionPlay: {
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 15,
    marginHorizontal: 39,
  },
});
