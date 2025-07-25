import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MainTabParamList } from './types';
import { HomeIcon, ProductsIcon, HistoryIcon, ProfileIcon } from '@/components/icons';
import { CustomTabBar } from './CustomTabBar';

import { HomeScreen } from '@screens/HomeScreen';
import { ProductsScreen } from '@screens/ProductsScreen';
import { HistoryScreen } from '@screens/HistoryScreen';
import { ProfileScreen } from '@screens/ProfileScreen';

const Tab = createBottomTabNavigator<MainTabParamList>();

export const TabNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === 'Home') {
            return <HomeIcon width={size} height={size} color={color} />;
          } else if (route.name === 'Products') {
            return <ProductsIcon width={size} height={size} color={color} />;
          } else if (route.name === 'History') {
            return <HistoryIcon width={size} height={size} color={color} />;
          } else if (route.name === 'Profile') {
            return <ProfileIcon width={size} height={size} color={color} />;
          }
          return null;
        },
        tabBarActiveTintColor: '#0D1752',
        tabBarInactiveTintColor: '#8E8E93',
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Products" component={ProductsScreen} />
      <Tab.Screen name="History" component={HistoryScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};