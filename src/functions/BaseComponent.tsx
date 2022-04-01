import React, {useState} from 'react';
import {
  InteractionManager,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  View,
} from 'react-native';
import MainHeader from '../custom_item/MainHeader';
import LottieView from 'lottie-react-native';

const BaseComponent = ({
  children,
  title,
  data,
  loading,
  isMain,
  RightIcon,
  rightIcon,
  backgroundColor,
}: any) => {
  const [isReady, setIsReady] = useState(false);
  React.useEffect(() => {
    InteractionManager.runAfterInteractions(() => {
      setIsReady(true);
    });
  }, []);

  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={Platform.OS === 'ios' ? 15 : 25}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{
        flex: 1,
        backgroundColor:backgroundColor ? backgroundColor : '#fff',
      }}>
      {title && (
        <MainHeader
          title={title}
          RightIcon={RightIcon}
          isMain={isMain}
          rightIcon={rightIcon}
        />
      )}
      {!isReady || data === null ? (
        loading ? (
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#fff',
            }}>
            <View style={{width:100,height:80}}>
              <LottieView  source={require('../assets/top.json')} autoPlay />
            </View> 
          </View>
        ) : null
      ) : (
        children
      )}
    </KeyboardAvoidingView>
  );
};

export default React.memo(BaseComponent);
