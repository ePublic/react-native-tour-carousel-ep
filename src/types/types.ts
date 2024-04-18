import type { StyleProp, TextStyle, ViewStyle } from 'react-native';
import {
  type CarouselDotsProps,
  type DecreasingDot,
  type DotConfig,
} from 'react-native-animated-dots-carousel';

export type TourCarouselProps = {
  /**
   * Array of data containing slides
   */
  data: Slide[];
  /**
   * Number of times the carousel has been viewed
   */
  viewedCount?: number;
  /**
   * Function to handle bottom button press
   */
  handleBottomButtonPress?: (arg0: boolean) => void;
  /**
   * Function to handle skip button press
   */
  handleSkipButtonPress?: () => void;
  /**
   * Configuration for the skip button
   */
  skipButtonConfig?: {
    /**
     * Style properties for the skip button
     */
    skipButtonStyle?: StyleProp<TextStyle>;
    skipButtonContainer?: StyleProp<ViewStyle>;
    /**
     * Title text style
     */
    titleStyle?: string;
    /**
     * Title text for the skip button
     *
     * Default: `Skip`
     */
    title?: string;
    /**
     * Boolean indicating if the skip button is disabled
     *
     * Default: `true`
     */
    disabled?: boolean;
    /**
     * Test ID for the skip button
     */
    skipButtonTestID?: string;
    /**
     * Maximum number of times the skip button can be pressed
     */
    maxSkipCount?: number;
    /**
     * Boolean indicating if the skip button is skippable
     *
     * Default: `true`
     */
    skipable?: boolean;
  };

  carouselConfig?: {
    /**
     * Style properties for the carousel container
     */
    container?: StyleProp<ViewStyle>;
    style?: StyleProp<ViewStyle>;
    /**
     * Boolean indicating if the carousel should loop
     */
    loop?: boolean;
    /**
     * Boolean indicating if paging is enabled
     *
     * Default: `false`
     */
    pagingEnabled?: boolean;
    /**
     * Boolean indicating if snap to item is enabled
     */
    snapEnabled?: boolean;
    /**
     * Interval for auto-playing the carousel
     */
    autoPlayInterval?: number;
    /**
     * Duration of the scroll animation
     */
    scrollAnimationDuration?: number;
    /**
     * Boolean indicating if auto-play is enabled
     */
    autoPlay?: boolean;
    /**
     * Boolean indicating if the carousel is vertical
     *
     * Default: `false`
     */
    vertical?: boolean;
    /**
     * Height of the carousel
     */
    height?: number;
    /**
     * Configuration for individual carousel slides
     */
    slideConfig?: SlideConfig;
  };
  /**
   * Configuration for pagination (dots indicating current slide)
   */
  PaginationConfig?: {
    /**
     * Boolean indicating if dots should be displayed
     *
     * Default: `true`
     */
    showDots?: boolean;
    /**
     * Index of the current slide
     */
    index?: number;
    /**
     * Total number of slides
     *
     * Default: `0`
     */
    length?: number;
    /**
     * Configuration for active dot indicator
     *
     * Default: `0`
     */
    activeIndicatorConfig?: DotConfig;
    /**
     * Configuration for inactive dot indicator
     */
    inactiveIndicatorConfig?: DotConfig;
    /**
     * Array of decreasing dots
     */
    decreasingDots?: DecreasingDot[];
    /**
     * Style properties for the container of dots
     */
    paginationContainerStyle?: StyleProp<ViewStyle>;
    /**
     * Style property for dot color
     */
    dotColor?: StyleProp<ViewStyle>;
    /**
     * Style property for dot style
     */
    dotStyle?: StyleProp<ViewStyle>;
    /**
     * Maximum number of indicators
     *
     * Default: `10`
     */
    maxIndicators?: number;
  };
  /**
   * Configuration for bottom buttons (next/finish)
   */
  buttonConfig?: {
    /**
     * Test ID for the bottom buttons
     */
    buttonTestID?: string;
    /**
     * Text for the next button
     */
    nextButtonText?: string;
    /**
     * Text for the finish button
     */
    finishButtonText?: string;
    /**
     * Style properties for the container of bottom buttons
     */
    bottomButtonContainer?: StyleProp<ViewStyle>;
    /**
     * Style properties for bottom button text
     */
    bottomButtonTextStyle?: StyleProp<TextStyle>;
  };
};

type Slide = {
  /**
   * The illustration url for the slide
   */
  illustration: string;
  /**
   * The subtitle for the slide
   */
  subtitle: string;
  /**
   * The title for the slide
   */
  title: string;
};

type SlideConfig = {
  /**
   * Style properties for the inner container of the slide
   */
  slideInnerContainer?: StyleProp<ViewStyle>;
  /**
   * Style properties for the image container of the slide
   */
  slideImageContainer?: StyleProp<ViewStyle>;
  /**
   * Style properties for the text container of the slide
   */
  slideTextContainer?: StyleProp<ViewStyle>;
  /**
   * Style properties for the title of the slide
   */
  slideTitleStyle?: StyleProp<TextStyle>;
  /**
   * Style properties for the subtitle of the slide
   */
  slideSubtitleStyle?: StyleProp<ViewStyle>;
  /**
   * Maximum number of lines for the text content of the slide
   */
  maxNumberOfLines?: number;
};

export type SlideProps = {
  /**
   * Data for the slide
   */
  data: Slide;
  /**
   * Horizontal margin for the slide item
   */
  itemHorizontalMargin?: number;
  /**
   * Configuration for the slide
   */
  slideConfig?: SlideConfig;
};

/**
 * Partial type for pagination configuration (From react-native-animated-dots-carousel)
 */
export type PaginationType = Partial<
  CarouselDotsProps & {
    /**
     * Current index of the pagination.
     */
    currentIndex?: number;
    /**
     * Style properties for the container of pagination.
     */
    paginationContainerStyle?: StyleProp<ViewStyle>;
  }
>;
