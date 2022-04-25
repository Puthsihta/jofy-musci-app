import React, {useCallback} from 'react';
import {FlatList, ImageBackground, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {active_opacity, baseColor, borderColor, style} from '../styles';
import {CategoriesData} from '../temp/CategoriesData';
import Ripple from 'react-native-material-ripple';
import CustomDropShadow from '../custom_item/CustomDropShadow';
import DropShadow from 'react-native-drop-shadow';
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
        <ImageBackground
          source={require('../assets/img_squar_bg_3.png')}
          resizeMode="stretch"
          imageStyle={{borderRadius: 12}}
          style={styles.button}>
          <DropShadow
            style={{
              shadowColor: '#333',
              shadowOffset: {
                width: 6,
                height: 6,
              },
              shadowOpacity: 0.6,
              shadowRadius: 1,
            }}>
            <Text style={[style.p, {color: '#eeee'}]}>{item.name}</Text>
          </DropShadow>
        </ImageBackground>
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
    width: 99,
    height: 54,
    borderRadius: 9,
    borderColor: borderColor,
    marginVertical: 3,
    marginRight: 18,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopWidth: 0.3,
    borderBottomWidth: 0.3,
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
