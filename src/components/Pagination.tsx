import React from 'react';
import { StyleSheet, View } from 'react-native';
import AnimatedDotsCarousel from 'react-native-animated-dots-carousel';
import type { PaginationType } from '../types/types';

const Pagination = ({
  currentIndex,
  length,
  activeIndicatorConfig,
  inactiveIndicatorConfig,
  containerStyle,
  decreasingDots,
  maxIndicators,
}: PaginationType): JSX.Element => {
  return (
    <View style={containerStyle || styles.containerStyle}>
      <AnimatedDotsCarousel
        length={length || 0}
        currentIndex={currentIndex || 0}
        maxIndicators={maxIndicators || 0}
        interpolateOpacityAndColor={true}
        activeIndicatorConfig={
          activeIndicatorConfig || {
            color: 'red',
            margin: 6,
            opacity: 1,
            size: 12,
          }
        }
        inactiveIndicatorConfig={
          inactiveIndicatorConfig || {
            color: 'grey',
            margin: 6,
            opacity: 0.4,
            size: 12,
          }
        }
        decreasingDots={
          decreasingDots || [
            {
              config: { color: 'white', margin: 3, opacity: 0.5, size: 6 },
              quantity: 1,
            },
            {
              config: { color: 'white', margin: 3, opacity: 0.5, size: 4 },
              quantity: 1,
            },
          ]
        }
      />
    </View>
  );
};
export const styles = StyleSheet.create({
  containerStyle: {
    paddingVertical: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
    height: 'auto',
  },
});

export default Pagination;
