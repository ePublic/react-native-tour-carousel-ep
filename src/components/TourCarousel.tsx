import React, { useRef, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useSharedValue } from 'react-native-reanimated';
import Carousel from 'react-native-reanimated-carousel';
import { widthPercentage } from '../utils/layout';
import Pagination from './Pagination';
import type { TourCarouselProps } from '../types/types';
import Slides from './Slides';

const TourCarousel = ({
  data,
  viewedCount = 0,
  handleBottomButtonPress,
  handleSkipButtonPress,
  skipButtonConfig,
  carouselConfig,
  PaginationConfig,
  buttonConfig,
}: TourCarouselProps): JSX.Element => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [currentSlideNumber, setCurrentSlideNumber] = useState(1);
  const {
    skipButtonStyle,
    skipButtonContainer,
    title = 'skip',
    skipButtonTestID: skipButtonTestID,
    maxSkipCount,
    skipable = true,
  } = skipButtonConfig || {};

  const {
    container,
    vertical,
    height,
    style,
    loop = false,
    pagingEnabled,
    snapEnabled,
    autoPlay,
    autoPlayInterval,
    scrollAnimationDuration,
    slideConfig,
  } = carouselConfig || {};

  const {
    showDots = true,
    length = data.length,
    activeIndicatorConfig,
    inactiveIndicatorConfig,
    decreasingDots,
    paginationContainerStyle,
    maxIndicators,
  } = PaginationConfig || {};

  const {
    buttonTestID,
    nextButtonText = 'Next',
    finishButtonText = 'Finish',
    bottomButtonContainer,
    bottomButtonTextStyle,
  } = buttonConfig || {};

  const lastSlide = activeSlideIndex === data.length - 1;

  const carouselRef = useRef<any>();
  const progressValue = useSharedValue<number>(0);

  if (activeSlideIndex + 1 > currentSlideNumber) {
    setCurrentSlideNumber(activeSlideIndex + 1);
  }

  const slideWidth = widthPercentage(84);
  const itemHorizontalMargin = widthPercentage(8);

  const itemWidth = slideWidth + itemHorizontalMargin * 2;

  return (
    <View style={container || styles.container}>
      {/* Skip button */}
      {skipable && (
        <TouchableOpacity
          testID={skipButtonTestID}
          style={skipButtonContainer || styles.skipButtonContainer}
          disabled={viewedCount === maxSkipCount}
          onPress={handleSkipButtonPress}
        >
          <Text style={skipButtonStyle || styles.skipButtonStyle}>{title}</Text>
        </TouchableOpacity>
      )}

      {/* Slides */}
      <>
        <Carousel
          vertical={vertical || false}
          width={itemWidth}
          height={height || itemWidth * 1.5}
          ref={carouselRef}
          style={style}
          loop={loop}
          pagingEnabled={pagingEnabled}
          snapEnabled={snapEnabled}
          autoPlay={autoPlay}
          autoPlayInterval={autoPlayInterval}
          scrollAnimationDuration={scrollAnimationDuration}
          onProgressChange={(_, absoluteProgress): number =>
            (progressValue.value = absoluteProgress)
          }
          mode={'parallax'}
          modeConfig={{
            parallaxScrollingOffset: 100,
            parallaxScrollingScale: 0.8,
            parallaxAdjacentItemScale: 0.55,
          }}
          data={data}
          renderItem={({ item }): JSX.Element => (
            <Slides
              data={item}
              itemHorizontalMargin={itemHorizontalMargin}
              slideConfig={slideConfig}
            />
          )}
          onSnapToItem={(index: number): void => setActiveSlideIndex(index)}
        />
      </>

      {/* Slide dots */}

      <View style={styles.bottomContainer}>
        {showDots && (
          <Pagination
            currentIndex={activeSlideIndex}
            length={length}
            activeIndicatorConfig={activeIndicatorConfig}
            inactiveIndicatorConfig={inactiveIndicatorConfig}
            decreasingDots={decreasingDots}
            paginationContainerStyle={paginationContainerStyle}
            maxIndicators={maxIndicators || length}
          />
        )}

        {/* Next / Finish button */}

        <TouchableOpacity
          testID={buttonTestID || 'ConsultBottomButton'}
          onPress={(): void[] => [
            handleBottomButtonPress && handleBottomButtonPress(lastSlide),
            carouselRef?.current?.next(),
          ]}
        >
          <View style={bottomButtonContainer || styles.bottomButtonContainer}>
            <Text style={bottomButtonTextStyle || styles.bottomButtonTextStyle}>
              {lastSlide ? finishButtonText : nextButtonText}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
  },
  bottomContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  skipButtonStyle: {
    color: 'black',
    fontSize: 16,
  },
  skipButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingRight: 8,
    paddingVertical: 5,
    marginRight: 10,
  },
  slider: {
    overflow: 'visible',
  },
  sliderContentContainer: {
    paddingBottom: 10,
  },
  bottomButtonContainer: {
    borderWidth: 2,
    borderRadius: 6,
    backgroundColor: 'black',
    marginBottom: 32,
    paddingVertical: 10,
    paddingHorizontal: 14,
    alignItems: 'center',
    marginHorizontal: 22,
  },
  bottomButtonTextStyle: {
    color: 'white',
    fontSize: 18,
  },
});

export default TourCarousel;
