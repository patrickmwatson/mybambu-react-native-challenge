import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { BalanceHeaderProps } from '@/types';
import { typography } from '@/constants';

export const BalanceHeader: React.FC<BalanceHeaderProps> = ({
  user,
  onNotificationPress,
  onMenuPress,
}) => {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(amount);
  };

  return (
    <View style={{ paddingHorizontal: '11%' }}>
      {/* Top Row with Icons and Greeting */}
      <View style={{ 
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        marginTop: 8 
      }}>
        {/* Menu Icon */}
        <TouchableOpacity onPress={onMenuPress} style={{ padding: 4 }}>
          <Image 
            source={require('../../../assets/icons/menu-icon.png')}
            style={{ width: 32, height: 32 }}
            resizeMode="contain"
          />
        </TouchableOpacity>
        
        {/* Greeting */}
        <View style={{ alignItems: 'center' }}>
          <Text style={{ 
            color: 'white', 
            fontSize: 14,
            fontFamily: 'Poppins_500Medium' 
          }}>
            Welcome back
          </Text>
          <Text style={{ 
            color: 'white', 
            fontSize: 20,
            fontFamily: 'Poppins_700Bold' 
          }}>
            {user.name}
          </Text>
        </View>
        
        {/* Bell Icon */}
        <TouchableOpacity onPress={onNotificationPress} style={{ padding: 4 }}>
          <Image 
            source={require('../../../assets/icons/bell-icon.png')}
            style={{ width: 32, height: 32 }}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>

      {/* Balance Card */}
      <View style={{ alignItems: 'center', marginTop: 16 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View style={{ flexDirection: 'row', alignItems: 'baseline' }}>
            <Text style={{ 
              fontFamily: 'Poppins_700Bold', 
              fontSize: 28,
              color: '#27FB6B'
            }}>
              $10,000,000.
            </Text>
            <Text style={{ 
              fontFamily: 'Poppins_700Bold', 
              fontSize: 16,
              color: '#27FB6B'
            }}>
              00
            </Text>
            <Text style={{ 
              fontFamily: 'Poppins_700Bold', 
              fontSize: 16,
              color: '#27FB6B',
              marginLeft: 4
            }}>
              COP
            </Text>
          </View>
          
          {/* Eye Icon */}
          <TouchableOpacity style={{ marginLeft: 12 }}>
            <Image 
              source={require('../../../assets/icons/eye-outline.png')}
              style={{ width: 24, height: 24 }}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
        
        <Text style={{ 
          fontFamily: 'Poppins_600SemiBold',
          fontSize: 14,
          color: '#27FB6B',
          marginTop: 4
        }}>
          Current Balance
        </Text>
      </View>
    </View>
  );
};