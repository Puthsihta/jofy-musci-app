import React, {useCallback} from 'react';
import {
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Ripple from 'react-native-material-ripple';
import {
  active_opacity,
  baseBackgroundColor,
  borderColor,
  style,
} from '../styles';
import {ArtistData} from '../temp/Artist';

const Artist = () => {
  const keyExtrator = useCallback((_, index) => {
    return index.toString();
  }, []);
  const renderItems = ({item}: any) => {
    return (
      <Ripple
        rippleDuration={600}
        rippleOpacity={0.1}
        onPress={() => {
          // navigate('CategoriesDetail')
        }}>
        <ImageBackground
          source={require('../assets/bg.png')}
          resizeMode="stretch"
          imageStyle={{borderRadius: 15}}
          style={styles.Items}>
          <Image
            source={item.image}
            resizeMode="cover"
            resizeMethod="resize"
            style={styles.image}
          />
          <Text style={[style.pE, styles.text]}>{item.name}</Text>
        </ImageBackground>
      </Ripple>
    );
  };
  return (
    <ImageBackground
      source={require('../assets/img_bg.png')}
      style={styles.container}>
      <Text style={[style.pt, styles.header]}>Artist</Text>
      <FlatList
        numColumns={2}
        data={ArtistData}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        renderItem={renderItems}
        contentContainerStyle={{marginHorizontal: 12}}
        keyExtractor={keyExtrator}
      />
    </ImageBackground>
  );
};

export default Artist;
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
    width: 120,
    height: 117,
    borderRadius: 99,
  },
  Items: {
    width: 159,
    height: 164,
    marginRight: 12,
    marginBottom: 12,
    borderTopWidth: 0.3,
    borderRightWidth: 0.3,
    borderRadius: 9,
    borderColor: borderColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 15,
    marginLeft: 54,
    width: 99,
    marginTop: 9,
  },
});
