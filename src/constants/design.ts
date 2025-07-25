// Design tokens extracted from Figma
export const colors = {
  // Primary colors
  background: '#000B4A', // Dark blue background
  white: '#FFFFFF',
  green: '#00DF82', // Balance card green
  greenLight: '#E1FFEF', // Light green for banner
  greenActive: '#27FB6B', // Active tab indicator
  
  // Text colors
  textDark: '#0D1752',
  textWhite: '#FFFFFF',
  textLight: '#8E8E93',
  
  // Button colors
  buttonBackground: '#FFFFFF', // White
  
  // Accent colors
  blue: '#296BFF', // Promotional banner blue
  
  // Shadow colors
  shadow: 'rgba(0, 0, 0, 0.25)',
  shadowLight: 'rgba(0, 0, 0, 0.09)',
};

export const typography = {
  fontFamily: 'Poppins',
  
  // Font weights
  medium: '500',
  bold: '700',
  
  // Font sizes
  small: 10,
  medium: 12,
  large: 16,
  
  // Line heights
  lineHeight: 1.2,
};

export const spacing = {
  xs: 6,
  sm: 10,
  md: 20,
  lg: 22,
  xl: 32,
  xxl: 47,
};

export const borderRadius = {
  small: 10,
  medium: 15,
  large: 20,
  pill: 23,
};

export const dimensions = {
  screen: {
    width: 360,
    height: 789,
  },
  actionButton: {
    width: 60,
    height: 53,
  },
  balanceCard: {
    width: 324,
    height: 50,
  },
  promotionalBanner: {
    width: 284,
    height: 144,
  },
  bottomNav: {
    height: 74,
  },
  transactionItem: {
    height: 60, // Estimated from design
  },
};

export const shadows = {
  button: {
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.15,
    elevation: 3,
  },
  banner: {
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 4,
    shadowOpacity: 1,
    elevation: 2,
  },
  card: {
    shadowColor: colors.shadowLight,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    shadowOpacity: 0.1,
    elevation: 2,
  },
  bottomNav: {
    shadowColor: colors.shadowLight,
    shadowOffset: { width: 1, height: -3 },
    shadowRadius: 12,
    shadowOpacity: 1,
    elevation: 5,
  },
};