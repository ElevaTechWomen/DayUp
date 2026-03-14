import { useState } from 'react';
import { View, Text, Alert } from 'react-native';

import SocialAuthButton, { SocialProvider } from '../SocialAuthButton';
import { SocialAuthContainerProps } from './SocialAuthContainer.types';

// ─── Component ────────────────────────────────────────────────────────────────
/**
 * SocialAuthContainer
 * Handles per-button loading state, disables siblings while one loads,
 * and shows a retry Alert on error.
 *
 * TODO (Ticket #8 - Backend OAuth):
 *   Replace stub handlers with real Firebase calls:
 *   - onGooglePress   → authService.signInWithGoogle()
 *   - onFacebookPress → authService.signInWithFacebook()
 *   - onApplePress    → authService.signInWithApple()
 */
const SocialAuthContainer: React.FC<SocialAuthContainerProps> = ({
  onGooglePress,
  onFacebookPress,
  onApplePress,
  separatorLabel = 'or continue with',
  disabled = false,
  containerStyle,
}) => {
  const [loadingProvider, setLoadingProvider] = useState<SocialProvider | null>(null);

  const handlePress = async (provider: SocialProvider) => {
    const handlerMap: Record<SocialProvider, typeof onGooglePress> = {
      google: onGooglePress,
      facebook: onFacebookPress,
      apple: onApplePress,
    };

    setLoadingProvider(provider);

    try {
      const handler = handlerMap[provider];

      if (handler) {
        await handler(provider);
      } else {
        // TODO (Ticket #8): Remove stub — wire real OAuth handler here
        console.log(`[SocialAuthContainer] stub pressed: ${provider}`);
        await new Promise((res) => setTimeout(res, 800));
      }
    } catch (error) {
      console.error(`[SocialAuthContainer] Error — ${provider}:`, error);

      const providerLabel =
        provider.charAt(0).toUpperCase() + provider.slice(1);

      Alert.alert(
        'Authentication error',
        `Could not sign in with ${providerLabel}. Please try again.`,
        [
          { text: 'Retry', onPress: () => handlePress(provider) },
          { text: 'Cancel', style: 'cancel' },
        ]
      );
    } finally {
      setLoadingProvider(null);
    }
  };

  const isAnyLoading = loadingProvider !== null;

  return (
    <View className="w-full" style={containerStyle}>

      <View className="flex-row items-center mb-4">
        <View className="flex-1 h-px bg-gray-200" />
        <Text className="mx-3 text-s font-normal">
          {separatorLabel}
        </Text>
        <View className="flex-1 h-px bg-gray-200" />
      </View>

      <View className="flex-row justify-around gap-3">
        <SocialAuthButton
          provider="google"
          onPress={handlePress}
          loading={loadingProvider === 'google'}
          disabled={disabled || (isAnyLoading && loadingProvider !== 'google')}
          testID="social-auth-btn-google"
        />
        <SocialAuthButton
          provider="facebook"
          onPress={handlePress}
          loading={loadingProvider === 'facebook'}
          disabled={disabled || (isAnyLoading && loadingProvider !== 'facebook')}
          testID="social-auth-btn-facebook"
        />
        <SocialAuthButton
          provider="apple"
          onPress={handlePress}
          loading={loadingProvider === 'apple'}
          disabled={disabled || (isAnyLoading && loadingProvider !== 'apple')}
          testID="social-auth-btn-apple"
        />
      </View>

    </View>
  );
};

export default SocialAuthContainer;
