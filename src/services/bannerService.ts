interface ApiBanner {
  id: string;
  image_url: string;
  title?: string;
  description?: string;
  cta_text?: string;
  cta_url?: string;
}

export const fetchBanners = async () => {
  try {
    const response = await fetch('https://api2.mybambu.com/banners/display?app_tag=bambu-pay&language=en');
    const data: ApiBanner[] = await response.json();
    
    // Check if data exists and is an array before mapping
    if (!data || !Array.isArray(data)) {
      console.log('Banner API returned invalid data, using fallback banners');
      throw new Error('Invalid banner data received from API');
    }
    
    // Transform API data to match our component's expected format
    return data.map(banner => ({
      id: banner.id,
      imageUrl: { uri: banner.image_url },
      title: banner.title || 'Special Offer',
      subtitle: banner.description,
      ctaText: banner.cta_text || 'Learn More',
      onPress: () => {
        console.log('Banner pressed:', banner.id);
        // In a real app, you might navigate to banner.cta_url
      },
    }));
  } catch (error) {
    console.log('Banner fetch failed, using mock data:', error.message);
    // Return fallback mock data if API fails
    return [
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
  }
};