import { isIos26OrHigher } from '@/lib/utils';
import { GlassView } from 'expo-glass-effect';
import React from 'react';
import { Dimensions, Text, TextStyle, View, ViewStyle } from 'react-native';

interface GlassCardProps {
  children: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
  cardStyle?: ViewStyle;
  textStyle?: TextStyle;
  glassProps?: {
    tintColor?: string;
    glassEffectStyle?: 'regular' | 'clear';
  };
}

const GlassCard: React.FC<GlassCardProps> = ({
  children,
  size = 'medium',
  cardStyle,
  textStyle,
  glassProps,
}) => {

  const getCardStyles = (): ViewStyle => {
    const baseStyles: ViewStyle = {
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 25,
    };

    const { width } = Dimensions.get('window');
    const cardSize = (width - 40) / 2;

    const sizeStyles: ViewStyle = {
      small: { height: 170, width: cardSize, paddingHorizontal: 20 },
      medium: { height: 240, paddingHorizontal: 20 },
      large: { height: 280, width: cardSize, paddingHorizontal: 20 },
    }[size];

    if (isIos26OrHigher) {
      return {
        ...baseStyles,
        ...sizeStyles,
      };
    }

    const cardStyles: ViewStyle = {
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      borderWidth: 1,
      borderColor: 'rgba(255, 255, 255, 0.3)'
    };

    return {
      ...baseStyles,
      ...sizeStyles,
      ...cardStyles,
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

  const combinedCardStyle = {
    ...getCardStyles(),
    ...cardStyle,
  };

  const combinedTextStyle = getTextStyles();

  if (isIos26OrHigher) {
    return (
      <View>
        <GlassView
          style={combinedCardStyle}
          {...defaultGlassProps}
        >
          {typeof children === 'string' ? (
            <Text style={combinedTextStyle}>{children}</Text>
          ) : (
            children
          )}
        </GlassView>
      </View>
    );
  }

  return (
    <View
      style={[combinedCardStyle, glassProps?.glassEffectStyle === 'regular' && { backgroundColor: 'rgba(10, 18, 42, 0.8)', borderWidth: 0 }]}
    >
      {typeof children === 'string' ? (
        <Text style={combinedTextStyle}>{children}</Text>
      ) : (
        children
      )}
    </View>
  );
};

export default GlassCard;
