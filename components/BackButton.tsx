import { colors } from '@/constants/theme';
import { isIos26OrHigher } from '@/lib/utils';
import { GlassView } from 'expo-glass-effect';
import { useRouter } from 'expo-router';
import { ArrowLeftIcon } from 'phosphor-react-native';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, ViewStyle } from 'react-native';


interface BackButtonProps {
  style?: ViewStyle;
  iconSize?: number;
  title?: string;
}

const BackButton = ({
  style,
  iconSize = 24,
  title
}: BackButtonProps) => {
  const router = useRouter();

  const fallbackStyle: ViewStyle = !isIos26OrHigher ? {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.3)'
  } : {};

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', }}>
      <TouchableOpacity onPress={() => router.back()} style={[styles.container, style]}>
        <GlassView glassEffectStyle='clear'
          style={[styles.button, fallbackStyle]}
        >
          <ArrowLeftIcon
            weight='bold'
            color={colors.uranianBlue}
            size={iconSize}
          />
        </GlassView>

      </TouchableOpacity >
      <Text style={{ color: colors.uranianBlue, fontWeight: 'bold', marginLeft: 6, fontSize: 16 }}>{title}</Text>
    </View>
  )
}

export default BackButton

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    paddingLeft: 15,
    alignSelf: 'flex-start',
  },
  button: {
    alignSelf: 'flex-start',
    borderRadius: 10,
    borderCurve: 'continuous',
    padding: 8
  }
})
