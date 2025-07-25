import { Audio } from 'expo-av';
import * as Haptics from 'expo-haptics';
import { Platform } from 'react-native';

class SoundManager {
  private clickSound: Audio.Sound | null = null;
  private isLoaded = false;

  constructor() {
    this.loadSound();
  }

  private async loadSound() {
    try {
      // Configure audio mode for better performance
      await Audio.setAudioModeAsync({
        playsInSilentModeIOS: true,
        shouldDuckAndroid: true,
        staysActiveInBackground: false,
      });

      // Load the click sound
      const { sound } = await Audio.Sound.createAsync(
        require('../../assets/sounds/click.mp3')
      );
      
      this.clickSound = sound;
      this.isLoaded = true;
    } catch (error) {
      console.log('Failed to load click sound:', error);
      this.isLoaded = false;
    }
  }

  async playClick() {
    try {
      // Play the click sound if loaded
      if (this.isLoaded && this.clickSound) {
        await this.clickSound.replayAsync();
      }

      // Also provide haptic feedback
      if (Platform.OS === 'ios') {
        await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
      } else if (Platform.OS === 'android') {
        await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
      }
    } catch (error) {
      // Silently fail - don't interrupt user experience
      console.log('Click feedback failed:', error);
    }
  }

  // Method to play different feedback types
  async playFeedback(type: 'success' | 'warning' | 'error' | 'light' = 'light') {
    try {
      if (Platform.OS !== 'web') {
        switch (type) {
          case 'success':
            await Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
            break;
          case 'warning':
            await Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning);
            break;
          case 'error':
            await Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
            break;
          default:
            await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        }
      }
    } catch (error) {
      console.log('Feedback failed:', error);
    }
  }

  // Clean up resources
  async cleanup() {
    if (this.clickSound) {
      await this.clickSound.unloadAsync();
      this.clickSound = null;
      this.isLoaded = false;
    }
  }
}

export const soundManager = new SoundManager();