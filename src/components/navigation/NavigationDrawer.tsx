import React, { useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal, Dimensions, Animated } from 'react-native';
import { HomeIcon, ProductsIcon, HistoryIcon, ProfileIcon } from '@/components/icons';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

interface NavigationDrawerProps {
  visible: boolean;
  onClose: () => void;
  currentRoute: string;
  onNavigate: (routeName: string) => void;
}

const drawerItems = [
  {
    name: 'Home',
    icon: HomeIcon,
    route: 'Home',
  },
  {
    name: 'Products',
    icon: ProductsIcon,
    route: 'Products',
  },
  {
    name: 'History',
    icon: HistoryIcon,
    route: 'History',
  },
  {
    name: 'Profile',
    icon: ProfileIcon,
    route: 'Profile',
  },
];

export const NavigationDrawer: React.FC<NavigationDrawerProps> = ({
  visible,
  onClose,
  currentRoute,
  onNavigate,
}) => {
  const slideAnim = useRef(new Animated.Value(-screenWidth * 0.75)).current;

  useEffect(() => {
    if (visible) {
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(slideAnim, {
        toValue: -screenWidth * 0.75,
        duration: 250,
        useNativeDriver: true,
      }).start();
    }
  }, [visible, slideAnim]);

  const handleNavigate = (routeName: string) => {
    onNavigate(routeName);
    onClose();
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType="none"
      onRequestClose={onClose}
    >
      {/* Backdrop */}
      <TouchableOpacity 
        style={styles.backdrop} 
        activeOpacity={1} 
        onPress={onClose}
      >
        {/* Drawer Content - prevent backdrop press */}
        <Animated.View 
          style={[
            styles.drawer,
            {
              transform: [{ translateX: slideAnim }],
            },
          ]}
        >
          <TouchableOpacity 
            activeOpacity={1}
            onPress={() => {}}
            style={{ flex: 1 }}
          >
            {/* Header */}
            <View style={styles.header}>
              <Text style={styles.headerTitle}>Navigation</Text>
              <TouchableOpacity onPress={onClose} style={styles.closeButton}>
                <Text style={styles.closeText}>✕</Text>
              </TouchableOpacity>
            </View>

            {/* Menu Items */}
            <View style={styles.menuContainer}>
              {drawerItems.map((item) => {
                const IconComponent = item.icon;
                const isSelected = currentRoute === item.route;

                return (
                  <TouchableOpacity
                    key={item.route}
                    style={[
                      styles.menuItem,
                      isSelected && styles.menuItemSelected,
                    ]}
                    onPress={() => handleNavigate(item.route)}
                    activeOpacity={0.7}
                  >
                    <View style={styles.menuItemContent}>
                      <View style={styles.iconContainer}>
                        <IconComponent 
                          width={24} 
                          height={24} 
                          color={isSelected ? '#000B4A' : '#0D1752'} 
                        />
                      </View>
                      <Text style={[
                        styles.menuItemText,
                        isSelected && styles.menuItemTextSelected,
                      ]}>
                        {item.name}
                      </Text>
                    </View>
                    
                                  </TouchableOpacity>
                );
              })}
            </View>

            {/* Footer */}
            <View style={styles.footer}>
              <Text style={styles.footerText}>MyBambu App</Text>
              <Text style={styles.versionText}>v1.0.0</Text>
            </View>
          </TouchableOpacity>
        </Animated.View>
      </TouchableOpacity>
    </Modal>
  );
};

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    flexDirection: 'row',
  },
  drawer: {
    width: screenWidth * 0.75,
    height: '100%',
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  header: {
    backgroundColor: '#000B4A', // App's primary blue
    paddingTop: 60,
    paddingHorizontal: 20,
    paddingBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: 'white',
    fontFamily: 'Poppins_700Bold',
  },
  closeButton: {
    padding: 5,
  },
  closeText: {
    fontSize: 20,
    color: 'white',
    fontWeight: '600',
  },
  menuContainer: {
    flex: 1,
    paddingTop: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    marginHorizontal: 0,
    marginVertical: 0,
    borderRadius: 0,
    position: 'relative',
    minHeight: 60,
  },
  menuItemSelected: {
    backgroundColor: '#F0F9FF', // Light blue background for selected
    borderLeftWidth: 4,
    borderLeftColor: '#27FB6B', // Green left border
  },
  menuItemContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  iconContainer: {
    marginRight: 15,
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuItemText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#0D1752',
    fontFamily: 'Poppins_600SemiBold',
  },
  menuItemTextSelected: {
    color: '#000B4A',
    fontWeight: '700',
    fontFamily: 'Poppins_700Bold',
  },
  selectedIndicator: {
    position: 'absolute',
    right: 0,
    top: 0,
    bottom: 0,
    width: 4,
    backgroundColor: '#27FB6B', // Green accent like the balance
    borderTopLeftRadius: 2,
    borderBottomLeftRadius: 2,
  },
  footer: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
    alignItems: 'center',
  },
  footerText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#0D1752',
    fontFamily: 'Poppins_600SemiBold',
  },
  versionText: {
    fontSize: 12,
    color: '#8E8E93',
    marginTop: 2,
    fontFamily: 'Poppins_400Regular',
  },
});