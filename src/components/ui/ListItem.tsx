import React from 'react';
import { View, Text, Pressable, ViewStyle } from 'react-native';

export interface ListItemProps {
  title: string;
  subtitle?: string;
  leftContent?: React.ReactNode;
  rightContent?: React.ReactNode;
  onPress?: () => void;
  style?: ViewStyle;
}

export const ListItem: React.FC<ListItemProps> = ({
  title,
  subtitle,
  leftContent,
  rightContent,
  onPress,
  style,
}) => {
  const Container = onPress ? Pressable : View;
  
  return (
    <Container
      onPress={onPress}
      className="flex-row items-center p-4 bg-white active:bg-gray-50"
      style={style}
    >
      {leftContent && (
        <View className="mr-3">
          {leftContent}
        </View>
      )}
      
      <View className="flex-1">
        <Text className="text-base font-medium text-gray-900">{title}</Text>
        {subtitle && (
          <Text className="text-sm text-gray-500 mt-0.5">{subtitle}</Text>
        )}
      </View>
      
      {rightContent && (
        <View className="ml-3">
          {rightContent}
        </View>
      )}
    </Container>
  );
};