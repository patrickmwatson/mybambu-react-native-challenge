import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import { PromotionalBannerProps } from '@types';
import { colors, shadows, typography } from '@/constants';

export const PromotionalBanner: React.FC<PromotionalBannerProps> = ({
  imageUrl = require('../../../assets/images/promotional-banner.png'),
  title,
  subtitle,
  ctaText,
  onPress,
}) => {
  const BannerContent = () => (
    <View className="p-6 justify-center h-full">
      <Text 
        className="text-white text-xl font-bold mb-2"
        style={{ fontFamily: typography.fontFamily }}
      >
        {title}
      </Text>
      
      {subtitle && (
        <Text 
          className="text-white opacity-90 mb-4"
          style={{ fontFamily: typography.fontFamily }}
        >
          {subtitle}
        </Text>
      )}
      
      {ctaText && (
        <View className="bg-white rounded-full px-6 py-2 self-start">
          <Text 
            className="text-mybambu-blue font-bold"
            style={{ fontFamily: typography.fontFamily }}
          >
            {ctaText}
          </Text>
        </View>
      )}
    </View>
  );

  return (
    <TouchableOpacity 
      onPress={onPress}
      className="mx-6 mt-6 mb-4"
      activeOpacity={0.9}
    >
      <View 
        className="h-36 rounded-mybambu-medium overflow-hidden"
        style={[{ backgroundColor: colors.blue }, shadows.banner]}
      >
        <ImageBackground 
          source={typeof imageUrl === 'string' ? { uri: imageUrl } : imageUrl} 
          className="flex-1"
          resizeMode="cover"
        >
          <BannerContent />
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );
};