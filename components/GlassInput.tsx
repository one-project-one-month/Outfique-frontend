import { isIos26OrHigher } from '@/lib/utils';
import { GlassView } from 'expo-glass-effect';
import { EyeIcon, EyeSlashIcon } from 'phosphor-react-native';
import React, { useState } from 'react';
import { TextInput, TextInputProps, TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native';

interface GlassInputProps extends TextInputProps {
  size?: 'small' | 'medium' | 'large';
  inputStyle?: ViewStyle;
  textStyle?: TextStyle;
  glassProps?: {
    tintColor?: string;
    glassEffectStyle?: 'regular' | 'clear';
  };
  isPassword?: boolean;
  showPasswordToggle?: boolean;
}

const GlassInput: React.FC<GlassInputProps> = ({
  size = 'medium',
  inputStyle,
  textStyle,
  glassProps,
  isPassword = false,
  showPasswordToggle = true,
  secureTextEntry,
  ...textInputProps
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const shouldSecureText = isPassword ? !isPasswordVisible : secureTextEntry;

  const getInputStyles = (): ViewStyle => {
    const baseStyles: ViewStyle = {
      justifyContent: 'center',
      borderRadius: 25,
      paddingHorizontal: 20,
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

    const inputStyles: ViewStyle = {
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      borderWidth: 1,
      borderColor: 'rgba(255, 255, 255, 0.3)'
    };

    return {
      ...baseStyles,
      ...sizeStyles,
      ...inputStyles,
    };
  };

  const getTextStyles = (): TextStyle => {
    const baseTextStyles: TextStyle = {
      fontSize: size === 'small' ? 14 : size === 'large' ? 18 : 16,
      color: '#FFFFFF',
      fontWeight: '400',
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

  const combinedInputStyle = {
    ...getInputStyles(),
    ...inputStyle,
  };

  const combinedTextStyle = getTextStyles();

  const renderPasswordToggle = () => {
    if (!isPassword || !showPasswordToggle) return null;

    return (
      <TouchableOpacity
        onPress={() => setIsPasswordVisible(!isPasswordVisible)}
        style={{
          position: 'absolute',
          right: 16,
          top: '55%',
          transform: [{ translateY: -12 }],
          padding: 4,
          zIndex: 1,
        }}
      >
        {isPasswordVisible ?
          <EyeSlashIcon color="#A8A9AD" size={20} /> :
          <EyeIcon color="#A8A9AD" size={20} />
        }
      </TouchableOpacity>
    );
  };

  if (isIos26OrHigher) {
    if (isPassword && showPasswordToggle) {
      return (
        <View style={{ position: 'relative' }}>
          <GlassView
            style={combinedInputStyle}
            {...defaultGlassProps}
          >
            <TextInput
              style={[combinedTextStyle, { flex: 1, paddingRight: isPassword ? 40 : 0 }]}
              placeholderTextColor="rgba(255, 255, 255, 0.6)"
              secureTextEntry={shouldSecureText}
              {...textInputProps}
            />
          </GlassView>
          {renderPasswordToggle()}
        </View>
      );
    }

    return (
      <GlassView
        style={combinedInputStyle}
        {...defaultGlassProps}
      >
        <TextInput
          style={[combinedTextStyle, { flex: 1 }]}
          placeholderTextColor="rgba(255, 255, 255, 0.6)"
          secureTextEntry={shouldSecureText}
          {...textInputProps}
        />
      </GlassView>
    );
  }

  if (isPassword && showPasswordToggle) {
    return (
      <View style={{ position: 'relative' }}>
        <TextInput
          style={[
            combinedInputStyle,
            combinedTextStyle,
            { paddingRight: 40 },
            glassProps?.glassEffectStyle === 'regular' && {
              backgroundColor: 'rgba(10, 18, 42, 0.8)',
              borderWidth: 0
            }
          ] as any}
          placeholderTextColor="rgba(255, 255, 255, 0.6)"
          secureTextEntry={shouldSecureText}
          {...textInputProps}
        />
        {renderPasswordToggle()}
      </View>
    );
  }

  return (
    <TextInput
      style={[
        combinedInputStyle,
        combinedTextStyle,
        glassProps?.glassEffectStyle === 'regular' && {
          backgroundColor: 'rgba(10, 18, 42, 0.8)',
          borderWidth: 0
        }
      ] as any}
      placeholderTextColor="rgba(255, 255, 255, 0.6)"
      secureTextEntry={shouldSecureText}
      {...textInputProps}
    />
  );
};

export default GlassInput;
