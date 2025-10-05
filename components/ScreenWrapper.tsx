import React, { useEffect } from 'react';
import { Dimensions, Image, ImageBackground, Platform, StatusBar, ViewStyle } from 'react-native';

interface ScreenWrapperProps {
  style?: ViewStyle;
  children: React.ReactNode;
}

const { height } = Dimensions.get('window');

const backgroundImage = require('@/assets/bg.png');

const ScreenWrapper = ({ style, children }: ScreenWrapperProps) => {
  let paddingTop = Platform.OS === 'ios' ? height * 0.05 : height;

  useEffect(() => {
    // Preload the image
    Image.prefetch(Image.resolveAssetSource(backgroundImage).uri)
      .catch(err => console.log(err));
  }, []);

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
      resizeMode="cover"
    >
      <StatusBar barStyle={'light-content'} />
      {children}
    </ImageBackground>
  )
}

export default ScreenWrapper
