import { colors } from '@/constants/theme';
import { GlassView } from 'expo-glass-effect';
import { useRouter } from 'expo-router';
import { ArrowLeftIcon } from 'phosphor-react-native';
import React from 'react';
import { StyleSheet, TouchableOpacity, ViewStyle } from 'react-native';


interface BackButtonProps {
  style?: ViewStyle;
  iconSize?: number;
}

const BackButton = ({
  style,
  iconSize = 24,
}: BackButtonProps) => {
  const router = useRouter();
  return (
    <TouchableOpacity onPress={() => router.back()} style={[styles.container, style]}>
      <GlassView glassEffectStyle='clear'
        style={styles.button}
      >
        <ArrowLeftIcon
          weight='bold'
          color={colors.uranianBlue}
          size={iconSize}
        />
      </GlassView>
      {/* <Text style={{ color: 'white', marginLeft: 6, fontSize: 16 }}>Back</Text> */}
    </TouchableOpacity >
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
