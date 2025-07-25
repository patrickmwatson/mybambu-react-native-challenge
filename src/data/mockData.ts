import { Transaction, User } from '@types';

export const mockUser: User = {
  id: '1',
  name: 'Eugenio',
  balance: 10000000.00,
  currency: 'COP',
  accountNumber: '****4321'
};

export const mockBanners = [
  {
    id: '1',
    imageUrl: require('../../assets/banners/banner1.png'),
    title: '',
    subtitle: '',
    ctaText: '',
    onPress: () => console.log('Banner 1 pressed'),
  },
  {
    id: '2',
    imageUrl: require('../../assets/banners/banner2.png'),
    title: '',
    subtitle: '',
    ctaText: '',
    onPress: () => console.log('Banner 2 pressed'),
  },
  {
    id: '3',
    imageUrl: require('../../assets/banners/banner3.png'),
    title: '',
    subtitle: '',
    ctaText: '',
    onPress: () => console.log('Banner 3 pressed'),
  },
];

export const mockTransactions: Transaction[] = [
  {
    id: '1',
    recipient: 'James',
    amount: -200000,
    currency: 'COP',
    status: 'pending',
    type: 'transfer',
    date: new Date('2024-05-28T10:30:00'),
    description: 'Transfer'
  },
  {
    id: '2',
    recipient: 'James',
    amount: -200000,
    currency: 'COP',
    status: 'pending',
    type: 'transfer',
    date: new Date('2024-05-28T10:30:00'),
    description: 'Transfer'
  },
  {
    id: '3',
    recipient: 'Susan',
    amount: 200000,
    currency: 'COP',
    status: 'completed',
    type: 'deposit',
    date: new Date('2024-05-28T09:20:00'),
    description: 'Deposit'
  },
  {
    id: '4',
    recipient: 'Susan',
    amount: 200000,
    currency: 'COP',
    status: 'completed',
    type: 'deposit',
    date: new Date('2024-05-28T09:00:00'),
    description: 'Deposit'
  }
];

// Easter egg: Alternative transactions with MyBambu employee names
export const mybambuEmployeeTransactions: Transaction[] = [
  {
    id: '1',
    recipient: 'Carlos Rodriguez',
    amount: -200000,
    currency: 'COP',
    status: 'pending',
    type: 'transfer',
    date: new Date('2024-05-28T10:30:00'),
    description: 'Transfer'
  },
  {
    id: '2',
    recipient: 'Maria Gonzalez',
    amount: -200000,
    currency: 'COP',
    status: 'pending',
    type: 'transfer',
    date: new Date('2024-05-28T10:30:00'),
    description: 'Transfer'
  },
  {
    id: '3',
    recipient: 'Alejandro Herrera',
    amount: 200000,
    currency: 'COP',
    status: 'completed',
    type: 'deposit',
    date: new Date('2024-05-28T09:20:00'),
    description: 'Deposit'
  },
  {
    id: '4',
    recipient: 'Ana Sofia Vargas',
    amount: 200000,
    currency: 'COP',
    status: 'completed',
    type: 'deposit',
    date: new Date('2024-05-28T09:00:00'),
    description: 'Deposit'
  }
];