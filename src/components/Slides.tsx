import React from 'react';
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import type { SlideProps } from '../types/types';
import { viewportHeight } from '../utils/layout';

const IS_IOS = Platform.OS === 'ios';

const Slides = ({
  data,
  itemHorizontalMargin,
  slideConfig,
}: SlideProps): JSX.Element => {
  const { title, subtitle, illustration } = data;

  const contentHeight = viewportHeight * 0.3;

  const {
    slideInnerContainer,
    slideImageContainer,
    slideTextContainer,
    slideTitleStyle,
    slideSubtitleStyle,
    maxNumberOfLines,
  } = slideConfig || {};

  return (
    <TouchableOpacity
      activeOpacity={1}
      style={[
        slideInnerContainer || styles.slideInnerContainer,
        { paddingHorizontal: itemHorizontalMargin },
      ]}
    >
      {/* Image */}
      <View style={slideImageContainer || styles.imageContainer}>
        <Image source={{ uri: illustration }} style={styles.image} />
      </View>

      {/* Title */}
      <View
        style={[
          slideTextContainer || styles.textContainer,
          { height: contentHeight },
        ]}
      >
        <Text style={slideTitleStyle || styles.title} numberOfLines={2}>
          {title}
        </Text>

        {/* Subtitle */}
        <Text
          style={slideSubtitleStyle || styles.subtitle}
          numberOfLines={maxNumberOfLines}
        >
          {subtitle}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export const styles = StyleSheet.create({
  slideInnerContainer: {
    flex: 1,
  },
  imageContainer: {
    flex: 1,
    marginBottom: IS_IOS ? 0 : -1, // Prevent a random Android rendering issue
    backgroundColor: 'white',
    paddingHorizontal: 5,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'contain',
  },
  textContainer: {
    paddingVertical: 12,
    backgroundColor: 'white',
  },
  title: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
    letterSpacing: 0.5,
    lineHeight: 28,
    textAlign: 'center',
  },
  subtitle: {
    marginTop: 20,
    color: 'grey',
    fontSize: 18,
    fontWeight: '400',
    lineHeight: 22.4,
    textAlign: 'center',
  },

  iconContainer: {
    paddingVertical: 32,
    backgroundColor: 'white',
  },
  iconTitle: {
    marginTop: 8,
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 22.4,
    textAlign: 'center',
  },
});

export default Slides;
