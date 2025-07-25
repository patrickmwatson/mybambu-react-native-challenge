import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground, Dimensions, StyleSheet } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import { colors, shadows, typography } from '@/constants';

const { width: screenWidth } = Dimensions.get('window');

interface BannerData {
  id: string;
  imageUrl?: any;
  title: string;
  subtitle?: string;
  ctaText?: string;
  onPress?: () => void;
}

interface SwipeableBannerProps {
  banners: BannerData[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

export const SwipeableBanner: React.FC<SwipeableBannerProps> = ({
  banners,
  autoPlay = true,
  autoPlayInterval = 4000,
}) => {
  const bannerWidth = screenWidth - 48; // Account for margin
  const bannerHeight = 190; // Much taller to almost touch tabs

  const renderBannerContent = (item: BannerData) => (
    <TouchableOpacity
      onPress={item.onPress}
      activeOpacity={0.9}
      style={{ width: bannerWidth }}
    >
      <View style={[styles.bannerContainer, { height: bannerHeight }, shadows.banner]}>
        <ImageBackground 
          source={typeof item.imageUrl === 'string' ? { uri: item.imageUrl } : item.imageUrl} 
          style={styles.imageBackground}
          resizeMode="cover"
        >
          {(item.title || item.subtitle || item.ctaText) && (
            <View style={styles.contentContainer}>
              {item.title ? (
                <Text style={styles.title}>
                  {item.title}
                </Text>
              ) : null}
              
              {item.subtitle && (
                <Text style={styles.subtitle}>
                  {item.subtitle}
                </Text>
              )}
              
              {item.ctaText && (
                <View style={styles.ctaButton}>
                  <Text style={styles.ctaText}>
                    {item.ctaText}
                  </Text>
                </View>
              )}
            </View>
          )}
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Carousel
        width={screenWidth}
        height={bannerHeight}
        autoPlay={autoPlay}
        autoPlayInterval={autoPlayInterval}
        data={banners}
        scrollAnimationDuration={1000}
        mode="parallax"
        modeConfig={{
          parallaxScrollingScale: 0.9,
          parallaxScrollingOffset: 50,
        }}
        panGestureHandlerProps={{
          activeOffsetX: [-10, 10],
        }}
        renderItem={({ item }) => renderBannerContent(item)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 4, // Reduced top margin
    marginBottom: 8, // Reduced bottom margin
  },
  bannerContainer: {
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: colors.blue,
  },
  imageBackground: {
    flex: 1,
  },
  contentContainer: {
    padding: 16,
    justifyContent: 'center',
    height: '100%',
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    fontFamily: typography.fontFamily,
  },
  subtitle: {
    color: 'white',
    opacity: 0.9,
    marginBottom: 16,
    fontFamily: typography.fontFamily,
  },
  ctaButton: {
    backgroundColor: 'white',
    borderRadius: 20,
    paddingHorizontal: 24,
    paddingVertical: 8,
    alignSelf: 'flex-start',
  },
  ctaText: {
    color: colors.blue,
    fontWeight: 'bold',
    fontFamily: typography.fontFamily,
  },
});