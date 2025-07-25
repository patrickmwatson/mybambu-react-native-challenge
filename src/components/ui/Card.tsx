import React from 'react';
import { View, ViewStyle } from 'react-native';

export interface CardProps {
  children: React.ReactNode;
  style?: ViewStyle;
  noPadding?: boolean;
  variant?: 'default' | 'bordered' | 'elevated';
}

export const Card: React.FC<CardProps> = ({
  children,
  style,
  noPadding = false,
  variant = 'default',
}) => {
  const getCardClasses = (): string => {
    const baseClasses = 'bg-white rounded-lg';
    const paddingClass = noPadding ? '' : 'p-4';
    
    const variantClasses = {
      default: '',
      bordered: 'border border-gray-200',
      elevated: 'shadow-md',
    };
    
    return `${baseClasses} ${paddingClass} ${variantClasses[variant]}`;
  };

  return (
    <View className={getCardClasses()} style={style}>
      {children}
    </View>
  );
};