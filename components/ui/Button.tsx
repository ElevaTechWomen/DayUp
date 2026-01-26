import React from 'react';
import { TouchableOpacity, Text, ActivityIndicator } from 'react-native';

interface ButtonProps {
  title: string;
  onPress: () => void;
  disabled?: boolean;
  loading?: boolean;
  variant?: 'primary' | 'secondary';
}

export const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  disabled = false,
  loading = false,
  variant = 'primary',
}) => {
  const getButtonClasses = () => {
    let baseClasses = 'h-12 rounded-lg justify-center items-center mt-2';
    
    if (disabled) {
      return `${baseClasses} bg-gray-300`;
    }
    
    if (variant === 'primary') {
      return `${baseClasses} bg-teal-400 active:bg-teal-500`;
    }
    
    return `${baseClasses} bg-gray-500 active:bg-gray-600`;
  };

  return (
    <TouchableOpacity
      className={getButtonClasses()}
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.8}
    >
      {loading ? (
        <ActivityIndicator color="#FFFFFF" />
      ) : (
        <Text className={`text-base font-semibold ${disabled ? 'text-gray-500' : 'text-white'}`}>
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};
