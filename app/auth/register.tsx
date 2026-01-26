import React from 'react';
import { View, Text, ScrollView, Image, KeyboardAvoidingView, Platform } from 'react-native';
import { Input } from '../../components/ui/Input';
import { Button } from '../../components/ui/Button';
import { useSignUpValidation } from '../../hooks/frontend/useSignUpValidation';
import { useRouter } from 'expo-router';


const scrollContentStyle = {
  flexGrow: 1,
  paddingHorizontal: 24,
  paddingTop: 40,
  paddingBottom: 24,
};

export default function SignUpScreen() {

  const router = useRouter();

  const {
    formData,
    errors,
    touched,
    handleChange,
    handleBlur,
    isFormValid,
  } = useSignUpValidation();

  const handleSignUp = () => {
    console.log('Registro exitoso:', formData);
      router.replace('/(tabs)');
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      className="flex-1 bg-white"
    >
      <ScrollView
        contentContainerStyle={scrollContentStyle}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <View className="items-center mb-8">
          <Image
            source={require('../../assets/images/logo.png')}
            className="w-30 h-10"
            resizeMode="contain"
          />
        </View>

        <View className="flex-1">
          <Text className="text-3xl font-bold text-gray-900 mb-6">
            Sign Up
          </Text>

          <Input
            label="User name"
            value={formData.username}
            onChangeText={(text) => handleChange('username', text)}
            onBlur={() => handleBlur('username')}
            placeholder="name"
            error={touched.username ? errors.username : undefined}
            autoCapitalize="none"
          />

          <Input
            label="Email"
            value={formData.email}
            onChangeText={(text) => handleChange('email', text)}
            onBlur={() => handleBlur('email')}
            placeholder="name@example.com"
            error={touched.email ? errors.email : undefined}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <Input
            label="Password"
            value={formData.password}
            onChangeText={(text) => handleChange('password', text)}
            onBlur={() => handleBlur('password')}
            placeholder="••••••••••••••••"
            error={touched.password ? errors.password : undefined}
            secureTextEntry
          />

          <Button
            title="Sign Up"
            onPress={handleSignUp}
            disabled={!isFormValid()}
          />

          <View className="mt-6 min-h-30">
            {/* Los botones de Google, Facebook y Apple van aquí */}
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
