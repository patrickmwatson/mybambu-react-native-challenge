// Transaction types
export interface Transaction {
  id: string;
  recipient: string;
  amount: number;
  currency: 'COP';
  status: 'completed' | 'pending' | 'failed';
  type: 'transfer' | 'deposit' | 'payment' | 'request';
  date: Date;
  description?: string;
}

// User types
export interface User {
  id: string;
  name: string;
  balance: number;
  currency: 'COP';
  accountNumber?: string;
}

// Component prop types
export interface BalanceHeaderProps {
  user: User;
  onNotificationPress?: () => void;
  onMenuPress?: () => void;
}

export interface ActionButtonProps {
  icon: string;
  label: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary';
}

export interface ActionButtonsGridProps {
  onDepositPress?: () => void;
  onCardPress?: () => void;
  onTransferPress?: () => void;
  onRequestPress?: () => void;
}

export interface TransactionItemProps {
  transaction: Transaction;
  onPress?: (transaction: Transaction) => void;
}

export interface TransactionListProps {
  transactions: Transaction[];
  onTransactionPress?: (transaction: Transaction) => void;
  onSeeAllPress?: () => void;
}

export interface PromotionalBannerProps {
  imageUrl?: string;
  title: string;
  subtitle?: string;
  ctaText?: string;
  onPress?: () => void;
}

// Navigation types
export type RootStackParamList = {
  Home: undefined;
  Products: undefined;
  History: undefined;
  Profile: undefined;
};

export type TabNavigatorParamList = {
  Home: undefined;
  Products: undefined;
  History: undefined;
  Profile: undefined;
};