import { colors } from '@/constants/theme';
import React from 'react';
import { Text, TextStyle, TouchableOpacity, TouchableOpacityProps, ViewStyle } from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
  children: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  loading?: boolean;
  buttonStyle?: ViewStyle;
  textStyle?: TextStyle;
}

const Button: React.FC<ButtonProps> = ({
  children,
  size = 'medium',
  fullWidth = false,
  loading = false,
  buttonStyle,
  textStyle,
  disabled,
  ...touchableProps
}) => {
  // Base styles
  const baseButtonStyle: ViewStyle = {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    backgroundColor: colors.white,
  };

  // Size styles
  const sizeStyles: Record<string, ViewStyle> = {
    small: {
      height: 40,
      paddingHorizontal: 16,
    },
    medium: {
      height: 55,
      paddingHorizontal: 20,
    },
    large: {
      height: 65,
      paddingHorizontal: 24,
    },
  };

  // Text styles
  const baseTextStyle: TextStyle = {
    fontWeight: '600',
    textAlign: 'center',
    color: colors.midnightNavy,
  };

  const textSizeStyles: Record<string, TextStyle> = {
    small: {
      fontSize: 14,
      lineHeight: 20,
    },
    medium: {
      fontSize: 16,
      lineHeight: 24,
    },
    large: {
      fontSize: 18,
      lineHeight: 28,
    },
  };

  // Combine styles
  const combinedButtonStyle: ViewStyle = {
    ...baseButtonStyle,
    ...sizeStyles[size],
    ...(fullWidth && { width: '100%' }),
    ...(disabled && { opacity: 0.5 }),
    ...buttonStyle,
  };

  const combinedTextStyle: TextStyle = {
    ...baseTextStyle,
    ...textSizeStyles[size],
    ...textStyle,
  };

  return (
    <TouchableOpacity
      style={combinedButtonStyle}
      disabled={disabled || loading}
      activeOpacity={0.8}
      {...touchableProps}
    >
      {typeof children === 'string' ? (
        <Text style={combinedTextStyle}>
          {loading ? 'Loading...' : children}
        </Text>
      ) : (
        children
      )}
    </TouchableOpacity>
  );
};

export { Button };
export type { ButtonProps };
