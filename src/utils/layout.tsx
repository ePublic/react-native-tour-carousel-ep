import { Dimensions } from 'react-native';

export const { width: viewportWidth, height: viewportHeight } =
  Dimensions.get('window');

export const widthPercentage = (percentage: number): number =>
  Math.round((percentage * viewportWidth) / 100);
