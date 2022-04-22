import {useNavigation} from '@react-navigation/core';
import {Button, HStack} from 'native-base';
import React, {useCallback} from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {navigate} from '../navigate/MainStack';
import {active_opacity, style} from '../styles';
import {CategoriesData} from '../temp/CategoriesData';
import Ripple from 'react-native-material-ripple';
import CustomDropShadow from '../custom_item/CustomDropShadow';
const Categories = () => {
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
        <LinearGradient
          colors={['#83BD75', '#B4E197', '#4E944F']}
          style={styles.button}>
          <Text style={[style.p, {color: '#4A503D'}]}>{item.name}</Text>
        </LinearGradient>
      </Ripple>
    );
  };
  return (
    <View style={{marginBottom: 12}}>
      <CustomDropShadow text="Categories" />
      <FlatList
        data={CategoriesData}
        renderItem={renderItems}
        keyExtractor={keyExtrator}
        showsHorizontalScrollIndicator={false}
        numColumns={3}
        ItemSeparatorComponent={() => {
          return <View style={styles.separator} />;
        }}
        style={{marginHorizontal: 12}}
      />
    </View>
  );
};
export default Categories;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 12,
    marginBottom: 12,
  },
  header: {
    fontSize: 36,
    fontFamily: 'Roboto',
    color: '#fff',
    fontWeight: 'bold',
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 27,
    borderRadius: 9,
    marginVertical: 3,
    marginRight: 18,
  },
  text: {
    textAlign: 'center',
    color: '#5F7A61',
    fontFamily: 'Roboto',
    fontSize: 15,
  },
  separator: {
    paddingVertical: 3,
  },
});
