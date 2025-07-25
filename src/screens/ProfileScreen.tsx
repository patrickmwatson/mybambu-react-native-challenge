import React from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { MainTabScreenProps } from '@navigation/types';
import { colors, typography, spacing, borderRadius, shadows } from '@/constants';

type Props = MainTabScreenProps<'Profile'>;

const mockProfileData = {
  name: 'Patrick Watson',
  email: 'patrick@mybambu.com',
  phone: '+57 300 123 4567',
  accountNumber: '****1234',
  memberSince: 'January 2022',
  achievements: [
    { id: '1', title: 'Savings Master', description: 'Saved over $50,000', color: '#00DF82' },
    { id: '2', title: 'Investment Pro', description: 'Portfolio value 📈 +25%', color: '#296BFF' },
    { id: '3', title: 'Coffee Connoisseur', description: '☕ 1,247 purchases tracked', color: '#96CEB4' },
  ],
  settings: [
    { id: '1', title: 'Notifications', value: 'Enabled' },
    { id: '2', title: 'Biometric Login', value: 'Face ID' },
    { id: '3', title: 'Language', value: 'Español (Colombia)' },
    { id: '4', title: 'Currency', value: 'COP' },
  ],
  funFacts: [
    '🎯 Your most expensive purchase: MacBook Pro ($3,200)',
    '🌮 Favorite food category: Colombian cuisine (78% of food spending)',
    '📱 This app has been opened 342 times',
    '💰 Money saved by using MyBambu: $1,247.50',
  ]
};

export const ProfileScreen: React.FC<Props> = () => {
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
            <Text style={styles.headerTitle}>My Profile</Text>
            <Text style={styles.headerSubtitle}>Manage your account and preferences</Text>
          </View>

          {/* White Content Area */}
          <View style={styles.contentArea}>
            {/* Profile Info Card */}
            <View style={styles.profileCard}>
              <View style={styles.avatarContainer}>
                <Image 
                  source={require('../../assets/porfolio_image/LHI Square Profile v3.gif')}
                  style={styles.avatar}
                  resizeMode="cover"
                />
              </View>
              <Text style={styles.profileName}>{mockProfileData.name}</Text>
              <Text style={styles.profileEmail}>{mockProfileData.email}</Text>
              <Text style={styles.memberSince}>Member since {mockProfileData.memberSince}</Text>
            </View>

            {/* Achievements Section */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>🏆 Achievements</Text>
              {mockProfileData.achievements.map((achievement) => (
                <View key={achievement.id} style={styles.achievementItem}>
                  <View style={[styles.achievementIcon, { backgroundColor: achievement.color }]} />
                  <View style={styles.achievementInfo}>
                    <Text style={styles.achievementTitle}>{achievement.title}</Text>
                    <Text style={styles.achievementDescription}>{achievement.description}</Text>
                  </View>
                </View>
              ))}
            </View>

            {/* Fun Facts Section */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>🎉 Fun Facts</Text>
              <View style={styles.funFactsContainer}>
                {mockProfileData.funFacts.map((fact, index) => (
                  <Text key={index} style={styles.funFact}>{fact}</Text>
                ))}
              </View>
            </View>

            {/* Settings Section */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>⚙️ Settings</Text>
              {mockProfileData.settings.map((setting) => (
                <TouchableOpacity key={setting.id} style={styles.settingItem} activeOpacity={0.7}>
                  <Text style={styles.settingTitle}>{setting.title}</Text>
                  <Text style={styles.settingValue}>{setting.value}</Text>
                </TouchableOpacity>
              ))}
            </View>

            {/* Easter Egg */}
            <View style={styles.easterEggContainer}>
              <Text style={styles.easterEgg}>
                🥚 Easter Egg: You found the secret! 
                This app was built with ❤️ for MyBambu
              </Text>
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
  profileCard: {
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingBottom: 24,
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  avatarContainer: {
    marginBottom: 16,
  },
  avatar: {
    width: 160,
    height: 160,
    borderRadius: 80,
    borderWidth: 3,
    borderColor: colors.background,
  },
  profileName: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.textDark,
    fontFamily: typography.fontFamily,
    marginBottom: 4,
  },
  profileEmail: {
    fontSize: 16,
    color: colors.textLight,
    fontFamily: typography.fontFamily,
    marginBottom: 8,
  },
  memberSince: {
    fontSize: 14,
    color: colors.textLight,
    fontFamily: typography.fontFamily,
  },
  section: {
    marginBottom: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.textDark,
    fontFamily: typography.fontFamily,
    marginBottom: 16,
  },
  achievementItem: {
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
  achievementIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 16,
  },
  achievementInfo: {
    flex: 1,
  },
  achievementTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.textDark,
    fontFamily: typography.fontFamily,
    marginBottom: 4,
  },
  achievementDescription: {
    fontSize: 14,
    color: colors.textLight,
    fontFamily: typography.fontFamily,
  },
  funFactsContainer: {
    backgroundColor: '#F8F9FA',
    borderRadius: 12,
    padding: 16,
  },
  funFact: {
    fontSize: 14,
    color: colors.textDark,
    fontFamily: typography.fontFamily,
    marginBottom: 8,
    lineHeight: 20,
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E5E5E5',
    marginBottom: 12,
    padding: 16,
    ...shadows.card,
  },
  settingTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.textDark,
    fontFamily: typography.fontFamily,
  },
  settingValue: {
    fontSize: 14,
    color: colors.textLight,
    fontFamily: typography.fontFamily,
  },
  easterEggContainer: {
    marginHorizontal: 24,
    backgroundColor: '#FFE5F1',
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
  },
  easterEgg: {
    fontSize: 12,
    color: '#8E8E93',
    fontFamily: typography.fontFamily,
    textAlign: 'center',
    fontStyle: 'italic',
  },
});