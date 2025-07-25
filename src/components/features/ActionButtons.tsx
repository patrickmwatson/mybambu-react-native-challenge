import React, { useRef } from 'react';
import { View, Text, TouchableOpacity, Image, Animated, Pressable } from 'react-native';
import { ActionButtonsGridProps } from '@types';
import { colors, shadows, typography, borderRadius } from '@/constants';
import { soundManager } from '@/utils/sound';

interface ActionButtonData {
  id: string;
  label: string;
  icon: any;
  onPress?: () => void;
}

interface AnimatedButtonProps {
  button: ActionButtonData;
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({ button }) => {
  const shadowAnim = useRef(new Animated.Value(1)).current;

  const handlePressIn = () => {
    Animated.timing(shadowAnim, {
      toValue: 0,
      duration: 100,
      useNativeDriver: false,
    }).start();
  };

  const handlePressOut = () => {
    Animated.timing(shadowAnim, {
      toValue: 1,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  const handlePress = () => {
    // Play click sound/haptic feedback
    soundManager.playClick();
    // Call the original onPress handler
    button.onPress?.();
  };

  const animatedStyle = {
    shadowOpacity: shadowAnim.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 0.25],
    }),
    shadowRadius: shadowAnim.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 8],
    }),
    elevation: shadowAnim.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 6],
    }),
  };

  return (
    <Pressable
      onPress={handlePress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      style={{ 
        alignItems: 'center',
        width: '23%' 
      }}
    >
      <Animated.View 
        style={[
          { 
            width: 70,
            height: 60,
            borderRadius: borderRadius.small,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: colors.white,
            shadowColor: '#000000',
            shadowOffset: { width: 0, height: 4 },
          },
          animatedStyle
        ]}
      >
        <Image 
          source={button.icon}
          style={{ width: 38, height: 38 }}
          resizeMode="contain"
        />
      </Animated.View>
      <Text 
        style={{ 
          marginTop: 8,
          fontFamily: 'Poppins_500Medium', 
          fontSize: 11,
          color: '#0D1752',
          textAlign: 'center'
        }}
      >
        {button.label}
      </Text>
    </Pressable>
  );
};

export const ActionButtons: React.FC<ActionButtonsGridProps> = ({
  onDepositPress,
  onCardPress,
  onTransferPress,
  onRequestPress,
}) => {
  const buttons: ActionButtonData[] = [
    {
      id: 'deposit',
      label: 'Deposit',
      icon: require('../../../assets/icons/deposit.png'),
      onPress: onDepositPress,
    },
    {
      id: 'card',
      label: 'Card',
      icon: require('../../../assets/icons/card.png'),
      onPress: onCardPress,
    },
    {
      id: 'transfer',
      label: 'Transfer',
      icon: require('../../../assets/icons/transfer.png'),
      onPress: onTransferPress,
    },
    {
      id: 'request',
      label: 'Request',
      icon: require('../../../assets/icons/request.png'),
      onPress: onRequestPress,
    },
  ];

  return (
    <View style={{ paddingHorizontal: 30, paddingTop: 24 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        {buttons.map((button) => (
          <AnimatedButton key={button.id} button={button} />
        ))}
      </View>
    </View>
  );
};