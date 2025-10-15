import { colors } from '@/constants/theme';
import React, { ReactNode } from 'react';
import { StyleSheet, Text, View, ViewStyle } from 'react-native';

interface Props {
  title?: string;
  style?: ViewStyle;
  leftIcon?: ReactNode;
}

const Header = ({
  title = '',
  leftIcon,
  style
}: Props) => {
  return (
    <View style={[styles.container, style]}>
      {leftIcon && <View style={styles.leftIcon}>{leftIcon}</View>}
      {title && <Text
        style={[
          styles.title,
          !leftIcon && styles.titleNoIcon
        ]}
      >{title}</Text>
      }
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 17
  },
  leftIcon: {
    position: "absolute",
    left: 0
  },
  title: {
    fontSize: 22,
    fontWeight: '500',
    textAlign: "center",
    color: colors.stardustWhite,
  },
  titleNoIcon: {
    width: "100%"
  }
})
