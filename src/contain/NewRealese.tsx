import React, {useCallback} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import DropShadow from 'react-native-drop-shadow';
import CustomDropShadow from '../custom_item/CustomDropShadow';
import {navigate} from '../navigate/MainStack';
import {active_opacity, secondaryColor, style} from '../styles';
import {Release} from '../temp/Release';

const NewRealese = () => {
  const keyExtrator = useCallback((_, index) => {
    return index.toString();
  }, []);
  const renderItems = ({item, index}: any) => {
    return (
      <TouchableOpacity
        activeOpacity={active_opacity}
        onPress={() => {
          navigate('Play', {data: item});
        }}>
        <DropShadow
          style={{
            shadowColor: '#333',
            shadowOffset: {
              width: 9,
              height: 9,
            },
            shadowOpacity: 0.6,
            shadowRadius: 1,
          }}>
          <Image
            source={item.image[0].url}
            resizeMethod="resize"
            resizeMode="cover"
            style={styles.image}
          />
        </DropShadow>
      </TouchableOpacity>
    );
  };
  return (
    <>
      <CustomDropShadow text="New Release" />
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={Release}
        renderItem={renderItems}
        keyExtractor={keyExtrator}
      />
    </>
  );
};

export default NewRealese;

const styles = StyleSheet.create({
  image: {
    width: 234,
    height: 169,
    borderRadius: 20,
    marginHorizontal: 12,
    marginVertical: 12,
  },
});
