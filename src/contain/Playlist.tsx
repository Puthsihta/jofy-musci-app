import {HStack, ScrollView, VStack} from 'native-base';
import React, {createRef, useCallback} from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import {navigate} from '../navigate/MainStack';
import {PlaylistData} from '../temp/PlaylistData';
import ActionSheet from 'react-native-actions-sheet';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {
  active_opacity,
  baseBackgroundColor,
  baseColor,
  borderColor,
  style,
} from '../styles';
import LinearGradient from 'react-native-linear-gradient';
import DropShadow from 'react-native-drop-shadow';
import Ripple from 'react-native-material-ripple';

const actionSheetRef: any = createRef();

const Playlist = () => {
  const onPlay = (item: any) => {
    navigate('RecentlyPlay', {
      data: item,
    });
  };
  const keyExtrator = useCallback((_, index) => {
    return index.toString();
  }, []);
  const renderItems = ({item, index}: any) => {
    return (
      <ScrollView style={{marginHorizontal: 12}}>
        <TouchableOpacity
          activeOpacity={active_opacity}
          onPress={() => {
            // navigate('CategoriesDetail')
          }}>
          <LinearGradient
            start={{x: 0.1, y: 1}}
            end={{x: 0.5, y: 1}}
            locations={[0, 0.5, 0.1]}
            colors={['transparent', baseColor, 'transparent']}
            style={[styles.itemsRow, {borderRadius: 15}]}>
            <Image
              source={item.image}
              resizeMethod="resize"
              resizeMode="cover"
              style={styles.image}
            />
            <VStack style={styles.itemColum}>
              <Text style={[style.pBold, styles.title]}>{item.title}</Text>
              <Text style={styles.numberSong}>{item.songNumber} songs</Text>
            </VStack>
            <TouchableOpacity
              onPress={() => {
                actionSheetRef.current?.setModalVisible();
              }}>
              <DropShadow
                style={{
                  shadowColor: '#ccc',
                  shadowOffset: {
                    width: 0,
                    height: 0,
                  },
                  shadowOpacity: 1,
                  shadowRadius: 3,
                }}>
                <Entypo
                  style={styles.icon}
                  name="dots-three-vertical"
                  size={24}
                  color="#444941"
                />
              </DropShadow>
            </TouchableOpacity>
          </LinearGradient>
        </TouchableOpacity>
      </ScrollView>
    );
  };
  return (
    <ImageBackground
      source={require('../assets/img_bg.png')}
      style={styles.container}
      resizeMode="stretch">
      <Text style={[style.pt, styles.header]}>PlayList</Text>
      <FlatList
        data={PlaylistData}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        renderItem={renderItems}
        keyExtractor={keyExtrator}
      />
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
                name="add"
                size={24}
                color="#000"
              />
              <Text style={{color: '#000'}}>Add Song</Text>
            </HStack>
          </TouchableOpacity>
          <TouchableOpacity style={{marginVertical: 24}}>
            <HStack
              style={{
                justifyContent: 'flex-start',
                alignItems: 'center',
                marginHorizontal: 24,
              }}>
              <MaterialIcons
                style={{marginRight: 24}}
                name="delete-outline"
                size={24}
                color="#000"
              />
              <Text style={{color: '#000'}}>Delete PlayList</Text>
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
              <Text style={{color: '#000'}}>
                Download song from this Playlist
              </Text>
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
                name="share-social-outline"
                size={24}
                color="#000"
              />
              <Text style={{color: '#000'}}>Share this Playlist</Text>
            </HStack>
          </TouchableOpacity>
        </View>
      </ActionSheet>
    </ImageBackground>
  );
};

export default Playlist;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: baseBackgroundColor,
    width: '100%',
    height: '100%',
  },
  header: {
    fontSize: 36,
    color: '#fff',
    marginHorizontal: 12,
    marginVertical: 12,
  },
  image: {
    borderRadius: 99,
    width: 67,
    height: 67,
  },
  itemsRow: {
    paddingHorizontal: 9,
    paddingVertical: 12,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 9,
    flexDirection: 'row',
    borderWidth: 0.3,
    borderColor: borderColor,
  },
  itemColum: {
    marginHorizontal: 21,
    marginVertical: 9,
    alignItems: 'center',
  },
  icon: {
    marginHorizontal: 12,
  },
  title: {
    color: '#eee',
    fontSize: 15,
  },
  numberSong: {
    color: '#ccc',
    fontFamily: 'Roboto',
    fontSize: 12,
    fontWeight: 'bold',
  },
});
