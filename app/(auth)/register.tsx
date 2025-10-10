import BackButton from '@/components/BackButton';
import GlassButton from '@/components/GlassButton';
import GlassInput from '@/components/GlassInput';
import ScreenWrapper from '@/components/ScreenWrapper';
import { colors } from '@/constants/theme';
import { isIos } from '@/lib/utils';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useRouter } from 'expo-router';
import { CheckCircleIcon, CircleIcon } from 'phosphor-react-native';
import React from 'react';
import { Controller, useForm } from "react-hook-form";
import { KeyboardAvoidingView, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const SignUp = () => {
  const router = useRouter();


  const { control, handleSubmit, formState: { errors }, getValues } = useForm({
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      rememberMe: false,
    }
  })

  const onSubmit = async (data: { email: string }) => {
    //handle SignUp logic here
    router.push({
      pathname: '/(auth)/emailVerification',
      params: { email: data.email }
    });
  }

  return (
    <ScreenWrapper>

      {/* Back Button  */}
      {isIos && <BackButton />}

      {/* Main Container */}
      <View style={styles.container}>
        <View style={{ marginTop: 40, gap: 10 }}>
          <Text style={{ color: 'white', fontSize: 24, fontWeight: 'bold', alignSelf: 'flex-start' }}>Create your account!</Text>
          <Text style={{ color: '#A8A9AD', fontSize: 16, alignSelf: 'flex-start' }}>Create your account and let’s dress your day</Text>
        </View>
        <View style={styles.formContainer}>
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          >
            {/* Name Input */}
            <Controller
              control={control}
              name="name"
              rules={{ required: 'Name is required' }}
              render={({ field: { onChange, value } }) => (
                <GlassInput
                  placeholder="Full Name"
                  value={value}
                  onChangeText={onChange}
                  size="small"
                  glassProps={{ glassEffectStyle: 'clear' }}
                  inputStyle={{ marginTop: 10 }}
                />
              )}
            />
            {errors.name && <Text style={styles.errorText}>{errors.name.message}</Text>}

            {/* Email Input */}
            <Controller
              control={control}
              name="email"
              rules={{
                required: 'Email is required',
              }}
              render={({ field: { onChange, value } }) => (
                <GlassInput
                  placeholder="Email"
                  value={value}
                  onChangeText={onChange}
                  keyboardType="email-address"
                  size="small"
                  glassProps={{ glassEffectStyle: 'clear' }}
                  inputStyle={{ marginTop: 10 }}
                />
              )}
            />
            {errors.email && <Text style={styles.errorText}>{errors.email.message}</Text>}

            {/* Password Input */}
            <Controller
              control={control}
              name="password"
              rules={{
                required: 'Password is required',
                minLength: { value: 6, message: 'Password must be at least 6 characters' }
              }}
              render={({ field: { onChange, value } }) => (
                <GlassInput
                  placeholder="Password"
                  value={value}
                  onChangeText={onChange}
                  isPassword={true}
                  size="small"
                  glassProps={{ glassEffectStyle: 'clear' }}
                  inputStyle={{ marginTop: 10 }}
                />
              )}
            />
            {errors.password && <Text style={styles.errorText}>{errors.password.message}</Text>}

            {/* Confirm Password Input */}
            <Controller
              control={control}
              name="confirmPassword"
              rules={{
                required: 'Please confirm your password',
                validate: value =>
                  value === getValues('password') || 'Passwords do not match'
              }}
              render={({ field: { onChange, value } }) => (
                <GlassInput
                  placeholder="Confirm Password"
                  value={value}
                  onChangeText={onChange}
                  isPassword={true}
                  size="small"
                  glassProps={{ glassEffectStyle: 'clear' }}
                  inputStyle={{ marginTop: 10 }}
                />
              )}
            />
            {errors.confirmPassword && <Text style={styles.errorText}>{errors.confirmPassword.message}</Text>}

            {/* Remember Me Checkbox */}
            <Controller
              control={control}
              name="rememberMe"
              render={({ field: { onChange, value } }) => (
                <TouchableOpacity
                  onPress={() => onChange(!value)}
                  style={styles.checkboxContainer}
                >
                  {value ? <CheckCircleIcon style={{ borderRadius: 4 }} color="#A8A9AD" weight="fill" /> : <CircleIcon color={colors.moonlightGray} />}
                  <Text style={styles.checkboxLabel}>Remember me</Text>
                </TouchableOpacity>
              )}
            />
          </KeyboardAvoidingView>
        </View>

        {/* Footer */}
        <View style={styles.footer}>

          {/* Submit Button */}
          <TouchableOpacity
            onPress={handleSubmit(onSubmit)}
            style={{ backgroundColor: '#FFFFFF', marginTop: 56, width: '100%', paddingVertical: 12, borderRadius: 24 }}
            activeOpacity={0.8}
          >
            <Text style={{ fontWeight: "bold", color: colors.midnightNavy, textAlign: "center", fontSize: 16 }}>
              Sign Up
            </Text>
          </TouchableOpacity>

          {/* Divider */}
          <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 16 }}>
            <View style={{ flex: 1, height: 1, backgroundColor: 'rgba(255, 255, 255, 0.2)' }} />
            <Text style={{ color: '#FFFFFF', marginHorizontal: 8, fontSize: 14, lineHeight: 20 }}>or</Text>
            <View style={{ flex: 1, height: 1, backgroundColor: 'rgba(255, 255, 255, 0.2)' }} />
          </View>

          {/* Social Login Buttons */}
          <GlassButton
            size="medium"
            glassProps={{
              tintColor: '#0A122A',
              glassEffectStyle: 'regular'
            }}
            buttonStyle={{ height: 44 }}
          >
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
              <FontAwesome name="facebook" size={20} color={colors.stardustWhite} />
              <Text style={{ color: colors.stardustWhite, fontWeight: "500", textAlign: "center" }}>
                Continue with Facebook
              </Text>
            </View>
          </GlassButton>

          <GlassButton
            size="medium"
            glassProps={{
              tintColor: '#0A122A',
              glassEffectStyle: 'regular'
            }}
            buttonStyle={{ height: 44 }}
          >
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
              <FontAwesome name="google" size={20} color={colors.stardustWhite} />
              <Text style={{ color: colors.stardustWhite, fontWeight: "500", textAlign: "center" }}>
                Continue with Google
              </Text>
            </View>
          </GlassButton>

          <View style={styles.signInContainer}>
            <Text style={styles.signInText}>Already have an account? </Text>
            <TouchableOpacity onPress={() => router.push('/(auth)/login')}>
              <Text style={styles.signInLink}>Sign In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScreenWrapper >
  )
}

export default SignUp

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    paddingHorizontal: 15,
    gap: 10
  },
  formContainer: {
    flex: 1,
    marginTop: 40,
  },
  input: {
    borderRadius: 25,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 12,
    paddingHorizontal: 16,
    paddingVertical: 8,
    color: colors.white,
    fontSize: 16
  },
  glassInput: {
    borderRadius: 25,
    padding: 1,
    marginTop: 10,
    width: '100%'
  },
  glassButton: {
    height: 44,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10,
    width: '100%'
  },

  errorText: {
    color: 'yellow',
    marginLeft: 15,
    marginTop: 5,
    fontSize: 12
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    gap: 10,
    marginLeft: 5,
  },
  checkboxLabel: {
    color: colors.moonlightGray,
    fontSize: 14,
  },
  footer: {
    flexDirection: "column",
    justifyContent: "center",
    gap: 5,
  },
  signInContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
    marginTop: 10,
  },
  signInText: {
    color: '#A8A9AD',
    fontSize: 14,
  },
  signInLink: {
    color: colors.uranianBlue,
    fontSize: 14,
    fontWeight: '500',
  },
})
