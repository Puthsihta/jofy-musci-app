import {Dimensions, StyleSheet} from 'react-native';
import {
  Battambang,
  BattambangBold,
  Lora,
  LoraBold,
  Misto,
  PlayfairDisplayBold,
  Toathmor,
} from '../custom_fonts/customFont';

export const deviceWidth = Dimensions.get('window').width;
export const deviceHeight = Dimensions.get('window').height;
export const active_opacity = 0.8;
export const baseColor = '#00cc99';
export const whiteColor = '#ffffff';
export const baseBackgroundColor = '#00cc99';
export const secondaryColor = '#009999';
export const backgroundSecondColor = '#5F7A61';
export const backgroundLoginColor = '#444941';
export const shadowColor = '#000';
export const borderColor = '#B4E197';

export const customColor = {
  backdrop: '#fff',
  placeholder: '#fff',
  primary: '#fff',
  background: '#fdff',
};

export const style = StyleSheet.create({
  pt: {
    ...Toathmor,
  },
  pE: {
    ...LoraBold,
  },
  p: {
    ...Battambang,
  },
  pBold: {
    ...BattambangBold,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#7FC8A9',
  },
  textHeaderMainHeader: {
    fontFamily: 'Roboto',
    fontSize: 14,
    fontWeight: 'bold',
    color: '#444941',
    marginLeft: 36,
    marginVertical: 12,
    opacity: 0.4,
  },
  homePageTitle: {
    fontSize: 33,
    color: '#fff',
    marginLeft: 18,
  },
});
