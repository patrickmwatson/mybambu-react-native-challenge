import React from 'react';
import { View, Text, SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { MainTabScreenProps } from '@navigation/types';
import { colors, typography, spacing, borderRadius, shadows } from '@/constants';

type Props = MainTabScreenProps<'History'>;

const mockHistoryItems = [
  { 
    id: '1', 
    type: 'deposit', 
    description: 'Salary Deposit', 
    amount: '+$3,500.00', 
    date: 'Today, 9:30 AM', 
    color: '#00DF82' 
  },
  { 
    id: '2', 
    type: 'transfer', 
    description: 'Coffee Fund Transfer', 
    amount: '-$47.50', 
    date: 'Yesterday, 2:15 PM', 
    color: '#FF6B6B' 
  },
  { 
    id: '3', 
    type: 'payment', 
    description: 'Netflix Subscription', 
    amount: '-$15.99', 
    date: 'Jan 23, 11:20 AM', 
    color: '#296BFF' 
  },
  { 
    id: '4', 
    type: 'refund', 
    description: 'Amazon Refund', 
    amount: '+$89.99', 
    date: 'Jan 22, 3:45 PM', 
    color: '#4ECDC4' 
  },
  { 
    id: '5', 
    type: 'investment', 
    description: 'Stock Portfolio Dividend', 
    amount: '+$125.30', 
    date: 'Jan 20, 10:00 AM', 
    color: '#45B7D1' 
  },
  { 
    id: '6', 
    type: 'bill', 
    description: 'Electricity Bill', 
    amount: '-$78.45', 
    date: 'Jan 18, 4:30 PM', 
    color: '#96CEB4' 
  },
];

export const HistoryScreen: React.FC<Props> = () => {
  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView 
          style={{ flex: 1, backgroundColor: colors.background }}
          contentContainerStyle={{ flexGrow: 1, backgroundColor: colors.background }}
          showsVerticalScrollIndicator={false}
        >
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.headerTitle}>Transaction History</Text>
            <Text style={styles.headerSubtitle}>Your complete financial activity</Text>
          </View>

          {/* White Content Area */}
          <View style={styles.contentArea}>
            <Text style={styles.sectionTitle}>Recent Activity</Text>
            
            {/* History List */}
            <View style={styles.historyContainer}>
              {mockHistoryItems.map((item) => (
                <View key={item.id} style={styles.historyItem}>
                  <View style={[styles.historyIcon, { backgroundColor: item.color }]} />
                  <View style={styles.historyInfo}>
                    <Text style={styles.historyDescription}>{item.description}</Text>
                    <Text style={styles.historyDate}>{item.date}</Text>
                  </View>
                  <Text style={[
                    styles.historyAmount,
                    { color: item.amount.startsWith('+') ? '#00DF82' : '#FF6B6B' }
                  ]}>
                    {item.amount}
                  </Text>
                </View>
              ))}
            </View>

            {/* Filter Options */}
            <View style={styles.filterSection}>
              <Text style={styles.filterTitle}>Filter by:</Text>
              <View style={styles.filterButtons}>
                <View style={[styles.filterButton, styles.activeFilter]}>
                  <Text style={styles.activeFilterText}>All</Text>
                </View>
                <View style={styles.filterButton}>
                  <Text style={styles.filterText}>Income</Text>
                </View>
                <View style={styles.filterButton}>
                  <Text style={styles.filterText}>Expenses</Text>
                </View>
                <View style={styles.filterButton}>
                  <Text style={styles.filterText}>Transfers</Text>
                </View>
              </View>
            </View>

            {/* Bottom padding */}
            <View style={{ height: 100 }} />
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 24,
    paddingTop: 20,
    paddingBottom: 16,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: colors.textWhite,
    fontFamily: typography.fontFamily,
    marginBottom: 4,
  },
  headerSubtitle: {
    fontSize: 16,
    color: colors.textWhite,
    fontFamily: typography.fontFamily,
    opacity: 0.8,
  },
  contentArea: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: 12,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    minHeight: 600,
    paddingTop: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.textDark,
    fontFamily: typography.fontFamily,
    paddingHorizontal: 24,
    marginBottom: 20,
  },
  historyContainer: {
    paddingHorizontal: 24,
    marginBottom: 32,
  },
  historyItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E5E5E5',
    marginBottom: 12,
    padding: 16,
    ...shadows.card,
  },
  historyIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 16,
  },
  historyInfo: {
    flex: 1,
  },
  historyDescription: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.textDark,
    fontFamily: typography.fontFamily,
    marginBottom: 4,
  },
  historyDate: {
    fontSize: 14,
    color: colors.textLight,
    fontFamily: typography.fontFamily,
  },
  historyAmount: {
    fontSize: 16,
    fontWeight: '700',
    fontFamily: typography.fontFamily,
  },
  filterSection: {
    paddingHorizontal: 24,
  },
  filterTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.textDark,
    fontFamily: typography.fontFamily,
    marginBottom: 12,
  },
  filterButtons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  filterButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#E5E5E5',
    backgroundColor: 'white',
  },
  activeFilter: {
    backgroundColor: colors.background,
    borderColor: colors.background,
  },
  filterText: {
    fontSize: 14,
    color: colors.textLight,
    fontFamily: typography.fontFamily,
  },
  activeFilterText: {
    fontSize: 14,
    color: colors.textWhite,
    fontFamily: typography.fontFamily,
    fontWeight: '600',
  },
});