import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';

const CustomRadiousButton = (props: any) => {
  return (
    <TouchableOpacity {...props} activeOpacity={0.8} 
        style={{height: 23,
        width: 23,
        borderRadius: 20,
        borderWidth: 2,
        borderColor:props.value ? 'red' : '#888',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,}}>
      <View
        style={{
          height: 13,
          width: 13,
          borderRadius: 10,
          backgroundColor: props.value ? 'red' : '#fff',
        }}></View>
    </TouchableOpacity>
  );
};

export default React.memo(CustomRadiousButton);

const styles = StyleSheet.create({
});
