import React, { useState, useEffect } from 'react';
import { View, SafeAreaView, ScrollView } from 'react-native';
import { MainTabScreenProps } from '@navigation/types';
import { BalanceHeader } from '@/components/layouts';
import { ActionButtons, TransactionList, SwipeableBanner } from '@/components/features';
import { NavigationDrawer } from '@/components/navigation/NavigationDrawer';
import { mockUser, mockTransactions, mybambuEmployeeTransactions, mockBanners } from '@/data/mockData';
import { fetchBanners } from '@/services/bannerService';
import { colors } from '@/constants';

type Props = MainTabScreenProps<'Home'>;

export const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const [banners, setBanners] = useState(mockBanners);
  const [isLoadingBanners, setIsLoadingBanners] = useState(true);
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [showEmployeeNames, setShowEmployeeNames] = useState(false);

  useEffect(() => {
    // Fetch real banner data from API
    const loadBanners = async () => {
      try {
        const fetchedBanners = await fetchBanners();
        setBanners(fetchedBanners);
      } catch (error) {
        console.error('Failed to load banners:', error);
        // Keep using mock data on error
      } finally {
        setIsLoadingBanners(false);
      }
    };

    loadBanners();
  }, []);

  const handleNotificationPress = () => {
    console.log('Notifications pressed');
  };

  const handleMenuPress = () => {
    setDrawerVisible(true);
  };

  const handleDrawerNavigate = (routeName: string) => {
    navigation.navigate(routeName as any);
  };

  const handleTransactionPress = (transaction: any) => {
    console.log('Transaction pressed:', transaction);
  };

  const handleSeeAllPress = () => {
    setShowEmployeeNames(!showEmployeeNames);
    console.log(`Easter egg: Toggled to ${!showEmployeeNames ? 'MyBambu employee names' : 'mock names'}`);
  };

  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView 
          style={{ flex: 1, backgroundColor: colors.background }}
          contentContainerStyle={{ flexGrow: 1, backgroundColor: colors.background }}
          showsVerticalScrollIndicator={false}
          bounces={true}
        >
          {/* Header with Balance */}
          <BalanceHeader 
            user={mockUser}
            onNotificationPress={handleNotificationPress}
            onMenuPress={handleMenuPress}
          />

          {/* White Content Area */}
          <View 
            style={{ 
              flex: 1,
              backgroundColor: 'white',
              marginTop: 12,
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              minHeight: 800, // Increased to ensure full coverage
              paddingBottom: 100, // Extra padding at bottom
            }}
          >
            {/* Action Buttons */}
            <ActionButtons 
              onDepositPress={() => console.log('Deposit')}
              onCardPress={() => console.log('Card')}
              onTransferPress={() => console.log('Transfer')}
              onRequestPress={() => console.log('Request')}
            />

            {/* Transaction List */}
            <TransactionList 
              transactions={showEmployeeNames ? mybambuEmployeeTransactions : mockTransactions}
              onTransactionPress={handleTransactionPress}
              onSeeAllPress={handleSeeAllPress}
            />

            {/* Swipeable Banner */}
            <SwipeableBanner
              banners={banners}
            />
            
            {/* Minimal white space - banner almost touches tabs */}
            <View style={{ height: 20, backgroundColor: 'white' }} />
          </View>
        </ScrollView>
      </SafeAreaView>

      {/* Navigation Drawer */}
      <NavigationDrawer
        visible={drawerVisible}
        onClose={() => setDrawerVisible(false)}
        currentRoute="Home"
        onNavigate={handleDrawerNavigate}
      />
    </View>
  );
};