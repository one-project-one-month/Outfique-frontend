import { isIos26OrHigher } from '@/lib/utils';
import { GlassView } from 'expo-glass-effect';
import React from 'react';
import { Text, TextStyle, TouchableOpacity, TouchableOpacityProps, ViewStyle } from 'react-native';

interface GlassButtonProps extends TouchableOpacityProps {
  children: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
  buttonStyle?: ViewStyle;
  textStyle?: TextStyle;
  glassProps?: {
    tintColor?: string;
    glassEffectStyle?: 'regular' | 'clear';
  };
}

const GlassButton: React.FC<GlassButtonProps> = ({
  children,
  size = 'medium',
  buttonStyle,
  textStyle,
  glassProps,
  ...touchableProps
}) => {

  const getButtonStyles = (): ViewStyle => {
    const baseStyles: ViewStyle = {
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 25,
    };

    const sizeStyles: ViewStyle = {
      small: { height: 40, paddingHorizontal: 16 },
      medium: { height: 55, paddingHorizontal: 20 },
      large: { height: 65, paddingHorizontal: 24 },
    }[size];

    if (isIos26OrHigher) {
      return {
        ...baseStyles,
        ...sizeStyles,
      };
    }

    const buttonStyles: ViewStyle = {
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      borderWidth: 1,
      borderColor: 'rgba(255, 255, 255, 0.3)'
    };

    return {
      ...baseStyles,
      ...sizeStyles,
      ...buttonStyles,
    };
  };

  const getTextStyles = (): TextStyle => {
    const baseTextStyles: TextStyle = {
      textAlign: 'center',
      fontWeight: '600',
      fontSize: size === 'small' ? 14 : size === 'large' ? 18 : 16,
      color: '#FFFFFF',
    };

    return {
      ...baseTextStyles,
      ...textStyle,
    };
  };

  const defaultGlassProps = {
    tintColor: 'rgba(255,255,255,0.05)',
    ...glassProps,
  };

  const combinedButtonStyle = {
    ...getButtonStyles(),
    ...buttonStyle,
  };

  const combinedTextStyle = getTextStyles();

  if (isIos26OrHigher) {
    return (
      <TouchableOpacity {...touchableProps} activeOpacity={0.8}>
        <GlassView
          style={combinedButtonStyle}
          {...defaultGlassProps}
        >
          {typeof children === 'string' ? (
            <Text style={combinedTextStyle}>{children}</Text>
          ) : (
            children
          )}
        </GlassView>
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity
      style={[combinedButtonStyle, glassProps?.glassEffectStyle === 'regular' && { backgroundColor: 'rgba(10, 18, 42, 0.8)', borderWidth: 0 }]}
      {...touchableProps}
    >
      {typeof children === 'string' ? (
        <Text style={combinedTextStyle}>{children}</Text>
      ) : (
        children
      )}
    </TouchableOpacity>
  );
};

export default GlassButton;
