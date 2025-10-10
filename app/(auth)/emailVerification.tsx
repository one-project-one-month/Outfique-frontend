import BackButton from '@/components/BackButton'
import ScreenWrapper from '@/components/ScreenWrapper'
import { colors } from '@/constants/theme'
import { GlassView } from 'expo-glass-effect'
import { useLocalSearchParams } from 'expo-router'
import React, { useRef, useState } from 'react'
import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

const EmailVerification = () => {
  const { email } = useLocalSearchParams<{ email: string }>();
  const [code, setCode] = useState(new Array(5).fill(''));
  const inputs = useRef<(TextInput | null)[]>([]);

  const handleInputChange = (text: string, index: number) => {
    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);

    if (text && index < 4) {
      inputs.current[index + 1]?.focus();
    }
  };

  const handleBackspace = (index: number) => {
    if (index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };

  return (
    <ScreenWrapper>
      {/* Back Button */}
      <BackButton />

      {/* Main container  */}
      <View style={styles.container}>
        <View style={{ marginTop: 40, gap: 10 }}>
          <Text style={{ color: colors.white, fontSize: 24, fontWeight: 'bold', alignSelf: 'flex-start' }}>Verify your email!</Text>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ color: colors.moonlightGray, fontSize: 15, alignSelf: 'flex-start' }}>5-digit OTP has been sent to </Text>
            <Text style={{ color: colors.stardustWhite, fontSize: 15, fontWeight: 'bold' }}>{email}</Text>
          </View>
        </View>
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        {/* Form Container */}
        <View style={styles.formContainer}>
          <View style={styles.otpContainer}>
            {code.map((digit, index) => (
              <GlassView key={index} glassEffectStyle='clear' style={styles.glassInput}>
                <TextInput
                  ref={(ref) => { inputs.current[index] = ref }}
                  style={styles.otpInput}
                  keyboardType="number-pad"
                  maxLength={1}
                  onChangeText={(text) => handleInputChange(text, index)}
                  onKeyPress={({ nativeEvent }) => {
                    if (nativeEvent.key === 'Backspace' && !code[index]) {
                      handleBackspace(index);
                    }
                  }}
                  value={digit}
                />
              </GlassView>
            ))}
          </View>
          <View style={styles.resendContainer}>
            <Text style={styles.resendText}>Didn&apos;t get code? </Text>
            <TouchableOpacity onPress={() => { /* Handle resend logic */ }}>
              <Text style={styles.resendLink}>Resend</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <TouchableOpacity
            onPress={() => Keyboard.dismiss()}
          >
            <GlassView glassEffectStyle='clear' style={styles.glassButton}>
              <Text style={{ color: colors.white, fontWeight: "semibold", textAlign: "center", fontSize: 16 }}>
                Verify
              </Text>
            </GlassView>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </ScreenWrapper>
  )
}

export default EmailVerification

const styles = StyleSheet.create({
  container: {
    width: "100%",
    justifyContent: "center",
    paddingHorizontal: 15,
    gap: 10
  },
  formContainer: {
    flex: 1,
    marginTop: 60,
    alignItems: 'center',
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    alignItems: 'center',
    gap: 10
  },
  glassInput: {
    borderRadius: 10,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderCurve: "continuous"
  },
  otpInput: {
    width: '100%',
    height: '100%',
    textAlign: 'center',
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
  },
  footer: {
    flexDirection: "column",
    justifyContent: "center",
    gap: 15,
    paddingHorizontal: 15,
    paddingBottom: 32,
  },
  resendContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25,
  },
  resendText: {
    color: '#A8A9AD',
    fontSize: 14,
  },
  resendLink: {
    color: colors.uranianBlue,
    fontSize: 14,
    fontWeight: '500',
  },
  glassButton: {
    height: 55,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%'
  },
})
