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
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Login = () => {
  const router = useRouter();


  const { control, handleSubmit, formState: { errors } } = useForm({
    mode: 'onTouched',
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    }
  });

  type FormData = typeof control._defaultValues;
  const onSubmit: SubmitHandler<FormData> = async (data) => {
    // Handle login logic here
  }

  return (
    <ScreenWrapper>

      {/* Back Button */}
      {isIos && <BackButton />}

      {/* Main Container  */}
      <View style={styles.container}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          style={{ flex: 1 }}
          keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}
        >
          <ScrollView
            contentContainerStyle={{ flexGrow: 1, justifyContent: 'space-between' }}
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled"
          >
            <View>
              <View style={{ marginTop: 40, gap: 10 }}>
                <Text style={{ color: 'white', fontSize: 24, fontWeight: 'bold', alignSelf: 'flex-start' }}>Welcome Back!</Text>
                <Text style={{ color: '#A8A9AD', fontSize: 16, alignSelf: 'flex-start' }}>Login to unlock your personal stylist</Text>
              </View>

              {/* Form Container */}
              <View style={styles.formContainer}>
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
                      autoCapitalize="none"
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

                <View style={{ width: "100%", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
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

                  {/* Forgot Password Link */}
                  <TouchableOpacity onPress={() => { }}>
                    <Text style={{ color: colors.uranianBlue, fontSize: 14, alignSelf: 'flex-end', textDecorationLine: "underline" }}>Forgot Password?</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            {/* Footer  */}
            <View style={styles.footer}>

              {/* Submit Button */}
              <TouchableOpacity
                onPress={handleSubmit(onSubmit)}
                style={{ backgroundColor: '#FFFFFF', marginTop: 56, width: '100%', paddingVertical: 12, borderRadius: 24 }}
                activeOpacity={0.8}
              >
                <Text style={{ fontWeight: "bold", color: colors.midnightNavy, textAlign: "center", fontSize: 16 }}>
                  Sign In
                </Text>
              </TouchableOpacity>

              {/* Divider */}
              <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 16 }}>
                <View style={{ flex: 1, height: 1, backgroundColor: 'rgba(255, 255, 255, 0.2)' }} />
                <Text style={{ color: '#FFFFFF', marginHorizontal: 8, fontSize: 14, lineHeight: 20 }}>or</Text>
                <View style={{ flex: 1, height: 1, backgroundColor: 'rgba(255, 255, 255, 0.2)' }} />
              </View>

              {/* Social Login Buttons  */}
              <GlassButton
                size="medium"
                glassProps={{
                  tintColor: '#0A122A',
                  glassEffectStyle: 'regular'
                }}
                buttonStyle={{ height: 44 }}
              >
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                  <FontAwesome name="facebook" size={20} color="#FAFAFA" />
                  <Text style={{ color: '#FAFAFA', textAlign: 'center', fontWeight: '600' }}>
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
                  <FontAwesome name="google" size={20} color="#FAFAFA" />
                  <Text style={{ color: '#FAFAFA', textAlign: 'center', fontWeight: '600' }}>
                    Continue with Google
                  </Text>
                </View>
              </GlassButton>

              <View style={styles.signUpContainer}>
                <Text style={styles.signUpText}>Don&apos;t have an account? </Text>
                <TouchableOpacity onPress={() => router.push('/(auth)/register')}>
                  <Text style={styles.signUpLink}>Sign Up</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </View>
    </ScreenWrapper>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    paddingHorizontal: 15,
  },
  formContainer: {
    // flex: 1, // remove flex: 1 to allow content to not stretch
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
    color: colors.white
  },
  glassInput: {
    borderRadius: 25,
    padding: 1,
    marginTop: 10,
    width: '100%',
    borderCurve: "continuous"
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
  signUpContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
    marginTop: 10,
  },
  signUpText: {
    color: '#A8A9AD',
    fontSize: 14,
  },
  signUpLink: {
    color: colors.uranianBlue,
    fontSize: 14,
    fontWeight: '500',
  },
})
