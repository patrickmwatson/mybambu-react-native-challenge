import React, { useEffect, useRef } from 'react';
import { View, TouchableOpacity, Image, Text, StyleSheet, Dimensions, Animated } from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const { width: screenWidth } = Dimensions.get('window');

export const CustomTabBar: React.FC<BottomTabBarProps> = ({
  state,
  descriptors,
  navigation,
}) => {
  const insets = useSafeAreaInsets();
  const tabWidth = screenWidth / state.routes.length;
  const translateX = useRef(new Animated.Value(state.index * tabWidth - (tabWidth * 0.25))).current;

  useEffect(() => {
    Animated.spring(translateX, {
      toValue: state.index * tabWidth - (tabWidth * 0.25), // Adjust for wider container
      useNativeDriver: true,
      tension: 100,
      friction: 20,
    }).start();
  }, [state.index, tabWidth]);

  return (
    <View style={[styles.container, { paddingBottom: insets.bottom }]}>
      {/* Green indicator */}
      <Animated.View 
        style={[
          styles.indicatorContainer,
          {
            width: tabWidth * 1.5, // Make container wider to accommodate larger indicator
            transform: [{ translateX }],
          }
        ]}
      >
        <Image
          source={require('../../assets/icons/green_tab_rectangle.png')}
          style={[styles.indicator, { width: tabWidth * 0.4 }]} // Dynamic width based on tab
          resizeMode="stretch"
        />
      </Animated.View>

      {/* Tab items */}
      <View style={styles.tabsContainer}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label = options.tabBarLabel ?? options.title ?? route.name;
          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <TouchableOpacity
              key={index}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={styles.tab}
              activeOpacity={0.8}
            >
              <View style={styles.iconContainer}>
                {options.tabBarIcon && options.tabBarIcon({
                  focused: isFocused,
                  color: isFocused ? '#0D1752' : '#8E8E93',
                  size: 28,
                })}
              </View>
              <Text style={[
                styles.tabLabel,
                { 
                  color: isFocused ? '#0D1752' : '#8E8E93',
                  fontWeight: isFocused ? '700' : '500' // Bold when selected
                }
              ]}>
                {label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    // iOS shadow
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    // Android shadow
    elevation: 20,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  indicatorContainer: {
    position: 'absolute',
    bottom: 0, // Extend all the way to bottom
    height: 20, // Taller to reach bottom
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  indicator: {
    width: 180, // 1.5x wider than 120px
    height: 20, // Match container height
  },
  tabsContainer: {
    flexDirection: 'row',
    height: 68, // Slightly taller for better spacing
    paddingTop: 6,
  },
  tab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 14, // More padding to push content down further
    paddingTop: 6, // More top padding to center better
  },
  iconContainer: {
    height: 28, // Larger to accommodate bigger icons
    marginTop: 13, // Shift icons down for better centering
    marginBottom: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabLabel: {
    fontSize: 13, // Slightly larger font
    fontWeight: '500', // Base weight, will be overridden to 700 when selected
    textAlign: 'center',
    letterSpacing: -0.2,
  },
});