# react-native-tour-carousel

> Tour Carousel for use in react native app tours

## Why
This package aims to enhance user experience through intuitive app tours, effectively showcasing key features, reducing learning curves, and boosting engagement. Its user-friendly design ensures easy integration, offering developers a hassle-free solution for creating immersive onboarding experience for free.

## What
The Tour Carousel Component is a versatile component layer that combines the functionality of two popular React Native carousel libraries, react-native-reanimated-carousel and react-native-animated-dots-carousel. This component provides a cohesive and customizable way for users to navigate through a series of screens or slides.

#### Features
- Smooth Animation: Utilizes the power of react-native-reanimated for smooth and performant animations.
- Animated Dots Indicator: Includes a built-in dots indicator powered by react-native-animated-dots-carousel for easy navigation feedback.
- Customizable: Easily customize the carousel behavior, animation settings, and dot styles to match your app's design.
- Callback Functions: Supports callback functions for handling actions when the user `completes` or `skips` the carousel.

## Preview

<p align="left">
  <img src="https://github.com/CPKVG/react-native-tour-carousel/assets/51846930/1485760d-eb48-4343-8ac3-6fdd9517ef97" width="360">
</p>

## Installation

```sh
yarn add react-native-tour-carousel
```

package dependancies

```sh
yarn add react-native-reanimated react-native-gesture-handler react-native-reanimated-carousel react-native-animated-dots-carousel
```

#### Npm links

- [react-native-reanimated](https://www.npmjs.com/package/react-native-reanimated)
- [react-native-gesture-handler](https://www.npmjs.com/package/react-native-gesture-handler)
- [react-native-reanimated-carousel](https://www.npmjs.com/package/react-native-reanimated-carousel)
- [react-native-animated-dots-carousel](https://www.npmjs.com/package/react-native-animated-dots-carousel)

## Quick usage guide

```js
    const data = [{
        "illustration": "https://images.unsplash.com/photo-1601379329542-31c59347e2b8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Accumsan sit amet nulla facilisi morbi tempus iaculis urna id.",
        "title": "Lorem ipsum dolor sit amet"
    }]

    <TourCarousel data={data}/>
```

## Prop Types

### TourCarouselType

| Property                | Type                    |
| ----------------------- | ----------------------- |
| data                    | slide[]                 |
| viewedCount             | number                  |
| handleBottomButtonPress | (arg0: boolean) => void |
| handleSkipButtonPress   | () => void              |
| skipButtonConfig        | SkipButtonConfig        |
| carouselConfig          | CarouselConfig          |
| PaginationConfig        | PaginationConfig        |
| buttonConfig            | ButtonConfig            |

### slide

| Property     | Type   |
| ------------ | ------ |
| illustration | string |
| subtitle     | string |
| title        | string |

### SlideConfig

| Property            | Type                 |
| ------------------- | -------------------- |
| slideInnerContainer | StyleProp<ViewStyle> |
| slideImageContainer | StyleProp<ViewStyle> |
| slideTextContainer  | StyleProp<ViewStyle> |
| slideTitle          | string               |
| slideSubtitle       | string               |
| maxNumberOfLines    | number               |

### SkipButtonConfig

| Property            | Type                 |
| ------------------- | -------------------- |
| skipButtonStyle     | StyleProp<ViewStyle> |
| skipButtonContainer | StyleProp<ViewStyle> |
| titleStyle          | string               |
| title               | string               |
| disabled            | boolean              |
| skipButtonTestID    | string               |
| maxSkipCount        | number               |
| skipable            | boolean              |

### ButtonConfig

| Property              | Type                 |
| --------------------- | -------------------- |
| buttonTestID          | string               |
| nextButtonText        | string               |
| finishButtonText      | string               |
| bottomButtonContainer | StyleProp<ViewStyle> |
| bottomButtonTextStyle | StyleProp<ViewStyle> |

### CarouselConfig

| Property                | Type                 |
| ----------------------- | -------------------- |
| container               | StyleProp<ViewStyle> |
| style                   | StyleProp<ViewStyle> |
| loop                    | boolean              |
| pagingEnabled           | boolean              |
| snapEnabled             | boolean              |
| autoPlayInterval        | number               |
| scrollAnimationDuration | number               |
| autoPlay                | boolean              |
| vertical                | boolean              |
| height                  | number               |
| slideConfig             | SlideConfig          |

### PaginationConfig

| Property                 | Type                 |
| ------------------------ | -------------------- |
| showDots                 | boolean              |
| index                    | number               |
| length                   | number               |
| activeIndicatorConfig    | DotConfig            |
| inactiveIndicatorConfig  | DotConfig            |
| decreasingDots           | DecreasingDot[]      |
| paginationContainerStyle | DotConfig[]          |
| dotColor                 | StyleProp<ViewStyle> |
| dotStyle                 | StyleProp<ViewStyle> |
| maxIndicators            | number               |

### DecreasingDot (from react-native-animated-dots-carousel)

| Property | Type      |
| -------- | --------- |
| quantity | number    |
| config   | DotConfig |

### DotConfig (from react-native-animated-dots-carousel)

| Property     | Type   |
| ------------ | ------ |
| size         | number |
| opacity      | number |
| color        | string |
| margin       | number |
| borderWidth? | number |
| borderColor? | string |

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

## MIT

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
