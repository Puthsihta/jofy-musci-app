import {Input, VStack} from 'native-base';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {MAIN_COLOR, SECOUND_COLOR, style, width} from '../styles';

const InputComponent = (props: any) => {
  return (
    <VStack>
      <Input
        {...props}
        style={[style.p, {height: 50, marginTop: 5}]}
        w={width / - 20}
        value={props.value}
        fontSize={14}
        onChangeText= {()=>props.setValue}
        placeholder={props.title}
      />
    </VStack>
  );
};

export default InputComponent;

const styles = StyleSheet.create({});
