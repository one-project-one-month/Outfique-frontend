import { Button } from '@/components/Button';
import GlobalButton from '@/components/GlassButton';
import ScreenWrapper from '@/components/ScreenWrapper';
import { colors } from '@/constants/theme';
import { router } from 'expo-router';
import React from 'react';
import { View } from 'react-native';
import Animated, { FadeIn, FadeInDown } from 'react-native-reanimated';

const Welcome = () => {
  return (
    <ScreenWrapper>
      <View style={{ flex: 1, justifyContent: 'space-between' }}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Animated.Image
            entering={FadeIn.duration(500).delay(1000)}
            source={require('@/assets/welcome.png')}
            resizeMode="contain"
            style={{ width: '75%', height: 96 }}
          />

          <Animated.Text
            entering={FadeIn.duration(1000).delay(2000)}
            style={{ color: '#FFFFFF', fontSize: 20, lineHeight: 28 }}
          >
            to the world of Outfique &lt;3
          </Animated.Text>
        </View>

        <Animated.View
          entering={FadeInDown.duration(500).delay(2500)}
          style={{ padding: 16, marginBottom: 16, gap: 16 }}
        >

          <Button size="medium"
            onPress={() => router.push('/(auth)/login')}
          >
            Sign In
          </Button>

          <GlobalButton
            size="medium"
            onPress={() => router.push('/(auth)/register')}
            glassProps={{
              glassEffectStyle: 'clear'
            }}
            textStyle={{ color: colors.uranianBlue }}
          >
            Sign Up
          </GlobalButton>
        </Animated.View>
      </View>
    </ScreenWrapper>
  );
};

export default Welcome;
