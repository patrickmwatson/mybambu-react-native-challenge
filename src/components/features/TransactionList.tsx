import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TransactionListProps, Transaction } from '@types';
import { colors, typography } from '@/constants';
import { ExternalLinkGreen, ExternalLinkRed } from '@/components/icons/TransactionIcons';

const TransactionItem: React.FC<{ 
  transaction: Transaction; 
  onPress?: (transaction: Transaction) => void;
}> = ({ transaction, onPress }) => {
  const isIncoming = transaction.amount > 0;
  
  const formatAmount = (amount: number) => {
    const absAmount = Math.abs(amount);
    return `${isIncoming ? '+' : '-'}$${absAmount.toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  return (
    <TouchableOpacity 
      onPress={() => onPress?.(transaction)}
      style={styles.transactionItem}
      activeOpacity={0.7}
    >
      <View style={styles.leftContent}>
        {/* Transaction direction icon */}
        <View style={styles.iconContainer}>
          {isIncoming ? (
            <ExternalLinkGreen width={30} height={30} />
          ) : (
            <ExternalLinkRed width={30} height={30} />
          )}
        </View>

        {/* Recipient info */}
        <View style={styles.recipientInfo}>
          <Text style={styles.recipientName}>
            {transaction.recipient}
          </Text>
          <Text style={styles.transactionDate}>
            {formatDate(transaction.date)}
          </Text>
        </View>
      </View>

      {/* Right side content */}
      <View style={styles.rightContent}>
        <View style={styles.amountContainer}>
          <Text style={[styles.amount, isIncoming && styles.amountIncoming]}>
            {formatAmount(transaction.amount)}
          </Text>
          {transaction.status === 'pending' && (
            <Text style={styles.pendingText}>(Pending)</Text>
          )}
        </View>
        <Ionicons 
          name="chevron-forward" 
          size={20} 
          color="#C7C7CC" 
        />
      </View>
    </TouchableOpacity>
  );
};

export const TransactionList: React.FC<TransactionListProps> = ({
  transactions,
  onTransactionPress,
  onSeeAllPress,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>
          Latest Transactions
        </Text>
        
        {onSeeAllPress && (
          <TouchableOpacity onPress={onSeeAllPress}>
            <Text style={styles.viewAllText}>
              View All
            </Text>
          </TouchableOpacity>
        )}
      </View>

      {/* Individual transaction cards with gaps */}
      <View style={styles.listContainer}>
        {transactions.map((transaction) => (
          <TransactionItem 
            key={transaction.id}
            transaction={transaction} 
            onPress={onTransactionPress}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    marginTop: 16,
    marginBottom: 4, // Reduced to give banner more space
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.textDark,
    fontFamily: typography.fontFamily,
  },
  viewAllText: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.blue,
    fontFamily: typography.fontFamily,
  },
  listContainer: {
    // No border or background here - each item has its own
  },
  transactionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    paddingVertical: 8,
    height: 56,
    backgroundColor: 'white',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#DEE7FF',
    marginBottom: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  leftContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  iconContainer: {
    marginRight: 10,
  },
  recipientInfo: {
    flex: 1,
    justifyContent: 'center',
    paddingVertical: 2,
  },
  recipientName: {
    fontSize: 14,
    fontWeight: '700',
    color: 'rgba(13, 23, 82, 1)',
    fontFamily: 'Nunito_700Bold',
    lineHeight: 16.8,
    textAlign: 'left',
    marginBottom: 2,
  },
  transactionDate: {
    fontSize: 12,
    fontWeight: '400',
    color: 'rgba(13, 23, 82, 1)',
    fontFamily: 'Nunito_400Regular',
    lineHeight: 14.4,
    textAlign: 'left',
  },
  rightContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  amountContainer: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginRight: 12,
  },
  amount: {
    fontSize: 16,
    fontWeight: '700',
    color: 'rgba(13, 23, 82, 1)',
    fontFamily: 'Nunito_700Bold',
    lineHeight: 19.2,
    textAlign: 'right',
  },
  amountIncoming: {
    color: '#70E242', // Green color for incoming amounts
  },
  pendingText: {
    fontSize: 12,
    fontWeight: '700',
    color: 'rgba(41, 107, 255, 1)',
    fontFamily: 'Nunito_700Bold',
    lineHeight: 14.4,
    textAlign: 'right',
  },
});