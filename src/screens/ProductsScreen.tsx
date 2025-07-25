import React from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { MainTabScreenProps } from '@navigation/types';
import { colors, typography, spacing, borderRadius, shadows } from '@/constants';

type Props = MainTabScreenProps<'Products'>;

const mockProducts = [
  { id: '1', name: 'Savings Account', description: 'High-yield savings with 4.2% APY', color: '#00DF82' },
  { id: '2', name: 'Credit Card', description: 'Cashback rewards on every purchase', color: '#296BFF' },
  { id: '3', name: 'Investment Portfolio', description: 'Diversified portfolio management', color: '#FF6B6B' },
  { id: '4', name: 'Personal Loan', description: 'Competitive rates up to $50,000', color: '#4ECDC4' },
  { id: '5', name: 'Home Mortgage', description: 'Fixed and variable rate options', color: '#45B7D1' },
  { id: '6', name: 'Business Account', description: 'Banking solutions for businesses', color: '#96CEB4' },
];

export const ProductsScreen: React.FC<Props> = () => {
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
            <Text style={styles.headerTitle}>Our Products</Text>
            <Text style={styles.headerSubtitle}>Discover financial solutions tailored for you</Text>
          </View>

          {/* White Content Area */}
          <View style={styles.contentArea}>
            <Text style={styles.sectionTitle}>Available Products</Text>
            
            {/* Products Grid */}
            <View style={styles.productsContainer}>
              {mockProducts.map((product) => (
                <TouchableOpacity 
                  key={product.id}
                  style={styles.productCard}
                  activeOpacity={0.7}
                >
                  <View style={[styles.productIcon, { backgroundColor: product.color }]} />
                  <View style={styles.productInfo}>
                    <Text style={styles.productName}>{product.name}</Text>
                    <Text style={styles.productDescription}>{product.description}</Text>
                  </View>
                </TouchableOpacity>
              ))}
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
  productsContainer: {
    paddingHorizontal: 24,
  },
  productCard: {
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
  productIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 16,
  },
  productInfo: {
    flex: 1,
  },
  productName: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.textDark,
    fontFamily: typography.fontFamily,
    marginBottom: 4,
  },
  productDescription: {
    fontSize: 14,
    color: colors.textLight,
    fontFamily: typography.fontFamily,
  },
});