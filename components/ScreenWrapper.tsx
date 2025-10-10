import { ImageBackground } from 'expo-image';
import React from 'react';
import { Dimensions, Platform, StatusBar, ViewStyle } from 'react-native';

interface ScreenWrapperProps {
  style?: ViewStyle;
  children: React.ReactNode;
}

export interface ScreenWrapperRef {
  reloadImage: () => void;
}

const { height } = Dimensions.get('window');

const backgroundImage = require('@/assets/bg.png');

const ScreenWrapper = ({ style, children }: ScreenWrapperProps) => {
  let paddingTop = Platform.OS === 'ios' ? height * 0.05 : 50;

  return (
    <ImageBackground
      source={backgroundImage}
      style={[
        {
          flex: 1,
          paddingTop,
        },
        style
      ]}
      contentFit="cover"
      cachePolicy={"memory-disk"}
    >
      <StatusBar barStyle={'light-content'} />
      {children}
    </ImageBackground>
  )
}

export default ScreenWrapper
