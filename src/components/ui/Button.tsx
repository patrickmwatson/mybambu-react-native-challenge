import React from 'react';
import { Pressable, Text, ActivityIndicator, ViewStyle, TextStyle } from 'react-native';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
type ButtonSize = 'sm' | 'md' | 'lg' | 'xl';

export interface ButtonProps {
  onPress?: () => void;
  children: React.ReactNode;
  loading?: boolean;
  disabled?: boolean;
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

const getButtonClasses = (
  variant: ButtonVariant = 'primary',
  size: ButtonSize = 'md',
  fullWidth: boolean = false,
  disabled: boolean = false
): string => {
  const baseClasses = 'flex-row items-center justify-center rounded-lg active:opacity-80';
  
  const variantClasses: Record<ButtonVariant, string> = {
    primary: 'bg-primary-500',
    secondary: 'bg-gray-200',
    outline: 'border border-gray-300 bg-transparent',
    ghost: 'bg-transparent',
    danger: 'bg-red-500',
  };
  
  const sizeClasses: Record<ButtonSize, string> = {
    sm: 'px-3 py-2',
    md: 'px-4 py-3',
    lg: 'px-6 py-4',
    xl: 'px-8 py-5',
  };
  
  const widthClass = fullWidth ? 'w-full' : '';
  const disabledClass = disabled ? 'opacity-50' : '';
  
  return `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${widthClass} ${disabledClass}`;
};

const getTextClasses = (
  variant: ButtonVariant = 'primary',
  size: ButtonSize = 'md'
): string => {
  const baseClasses = 'text-center font-medium';
  
  const variantClasses: Record<ButtonVariant, string> = {
    primary: 'text-white',
    secondary: 'text-gray-900',
    outline: 'text-gray-900',
    ghost: 'text-gray-900',
    danger: 'text-white',
  };
  
  const sizeClasses: Record<ButtonSize, string> = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
  };
  
  return `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]}`;
};

export const Button: React.FC<ButtonProps> = ({
  onPress,
  children,
  loading = false,
  disabled = false,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  style,
  textStyle,
}) => {
  const isDisabled = disabled || loading;

  return (
    <Pressable
      onPress={onPress}
      disabled={isDisabled}
      className={getButtonClasses(variant, size, fullWidth, isDisabled)}
      style={style}
    >
      {loading ? (
        <ActivityIndicator
          size="small"
          color={variant === 'primary' || variant === 'danger' ? 'white' : '#374151'}
        />
      ) : (
        <Text
          className={getTextClasses(variant, size)}
          style={textStyle}
        >
          {children}
        </Text>
      )}
    </Pressable>
  );
};