import { StyleProp, ViewStyle } from 'react-native';
import { DecreasingDot, DotConfig } from 'react-native-animated-dots-carousel';
import { TCarouselProps } from 'react-native-reanimated-carousel';

export type Slide = {
  illustration: string;
  subtitle: string;
  title: string;
};

export type TourCarouselType = {
  viewedCount: number;
  isLastSlide: () => boolean;
  skipButton: {
    skipButtonStyle: StyleProp<ViewStyle>;
    skipButtonContainer: StyleProp<ViewStyle>;
    titleStyle: string;
    title: string;
    disabledTitleStyle: StyleProp<ViewStyle>;
    disabled: boolean;
    skipButtonTestID: string;
    handleSkipButtonPress: () => void;
    maxSkipCount: number;
    skipable: boolean;
  };

  carouselConfig: TCarouselProps & {
    container: StyleProp<ViewStyle>;
    vertical: boolean;
    height: number;
    slideConfig: any;
  };
  PaginationConfig: {
    showDots: boolean;
    index: number;
    length: number;
    activeIndicatorConfig: DotConfig;
    inactiveIndicatorConfig: DotConfig;
    decreasingDots: DecreasingDot[];
    containerStyle: DotConfig[];
    dotColor?: StyleProp<ViewStyle>; // TODO add
    dotStyle?: StyleProp<ViewStyle>; // TODO add
    maxIndicators: number;
  };
  buttonConfig: {
    buttonTestID: string;
    nextButtonText: string;
    finishButtonText: string;
    bottomButtonContainer: StyleProp<ViewStyle>;
    bottomButtonTextStyle: StyleProp<ViewStyle>;
    handleBottomButtonPress: (val: boolean) => boolean;
  };
};

export type PaginationType = Partial<
  CarouselDotsProps & {
    currentIndex: number;
    containerStyle: StyleProp<ViewStyle>;
  }
>;
