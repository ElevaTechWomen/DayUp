export type SocialProvider = 'google' | 'facebook' | 'apple';

export interface SocialAuthButtonProps {
  /** Social provider — controls icon, colors and accessibility label */
  provider: SocialProvider;
  /** Called with the provider string when the button is tapped */
  onPress: (provider: SocialProvider) => void;
  /** Disables interaction */
  disabled?: boolean;
  /** Shows a loading spinner */
  loading?: boolean;
  /** Test identifier */
  testID?: string;
}
