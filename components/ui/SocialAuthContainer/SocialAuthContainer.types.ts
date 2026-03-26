import { ViewStyle } from 'react-native';
import { SocialProvider } from '../SocialAuthButton';

export interface SocialAuthContainerProps {
  /** Called when Google button is pressed */
  onGooglePress?: (provider: SocialProvider) => Promise<void> | void;
  /** Called when Facebook button is pressed */
  onFacebookPress?: (provider: SocialProvider) => Promise<void> | void;
  /** Called when Apple button is pressed */
  onApplePress?: (provider: SocialProvider) => Promise<void> | void;
  /** Separator label. Defaults to 'or continue with' */
  separatorLabel?: string;
  /** Disables all buttons */
  disabled?: boolean;
  /** Override outer container style */
  containerStyle?: ViewStyle;
}
