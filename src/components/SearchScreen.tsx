import {Icon, Input} from 'native-base';
import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {
  active_opacity,
  backgroundSecondColor,
  baseBackgroundColor,
  deviceWidth,
  style,
} from '../styles';

const SearchScreen = () => {
  const inputRef = React.createRef<TextInput>();
  React.useEffect(() => {
    inputRef.current?.focus();
  }, []);
  return (
    <View style={style.container}>
      <View style={[style.row, styles.searchBar]}>
        <TextInput
          // onChangeText={txt => handleChange('text', txt)}
          style={[
            style.p,
            {
              marginLeft: 5,
              width: '100%',
            },
          ]}
          ref={inputRef}
          returnKeyType="search"
          placeholder="type the song you want to search here"
          placeholderTextColor="#888"
        />
        <TouchableOpacity
          activeOpacity={active_opacity}
          onPress={() => {}}
          style={styles.searchButton}>
          <AntDesign name="search1" size={25} color={'#fff'} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  searchBar: {
    width: deviceWidth - 60,
    height: 50,
    backgroundColor: '#fff',
    margin: 10,
    borderRadius: 5,
    paddingHorizontal: 10,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  searchButton: {
    height: 50,
    width: 39,
    backgroundColor: backgroundSecondColor,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
