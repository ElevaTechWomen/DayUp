import React from "react";
import { View, Image, ScrollView, Text, KeyboardAvoidingView, Platform } from "react-native";
import { Input } from '../../components/ui/Input';
import { Button } from '../../components/ui/Button';
import { useLoginValidation } from '../../hooks/frontend/useLoginValidation';
import { loginStyles, scrollContentStyle} from '../../Styles/loginStyles';
import { useRouter } from "expo-router";

export default function LoginScreen() {

    const router = useRouter();

    const {
        formData,
        errors,
        touched,
        handleChange,
        handleBlur,
        isFormValid,
    } = useLoginValidation();

    const handleSignIp = () => {
        console.log('Inicio de sesión exitoso:', formData);
        router.replace('/(tabs)');
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            className={loginStyles.container}
        >
            <ScrollView
                contentContainerStyle={scrollContentStyle}
                showsVerticalScrollIndicator={true}
                keyboardShouldPersistTaps="handled"
            >
                <View className={loginStyles.logoContainer}>
                    <Image
                        source={require('../../assets/images/DayUp-Logo.png')}
                        className={loginStyles.logo}
                        resizeMode="contain"
                    />
                </View>

                <View className={loginStyles.formContainer}>
                    <Text className={loginStyles.title}>
                        Login
                    </Text>

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
                        isPassword
                    />

                    <Button
                        title="Sign In"
                        onPress={handleSignIp}
                        disabled={!isFormValid()}
                    />

                    <View className={loginStyles.socialContainer}>
                        {/* Los botones de   Google, Facebook y Apple van aquí */}
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}
