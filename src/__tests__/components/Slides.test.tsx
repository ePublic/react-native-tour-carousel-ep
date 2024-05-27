import React from 'react';
import { render } from '@testing-library/react-native';
import Slides from '../../components/Slides';

describe('<Slides />', () => {
  const props = {
    data: { title: '', subtitle: '', illustration: '' },
    itemHorizontalMargin: 10,
    slideConfig: {
      slideInnerContainer: {},
      slideImageContainer: {},
      slideTextContainer: {},
      slideTitleStyle: {},
      slideSubtitleStyle: {},
      maxNumberOfLines: 1,
    },
  };
  it('should render without crashing when provided with minimal valid props', () => {
    const { root } = render(<Slides {...props} />);
    expect(root).toBeTruthy();
  });
  it('renders for a Slides correctly', () => {
    const Renderer = render(<Slides {...props} />);
    expect(Renderer.toJSON()).toMatchSnapshot();
  });
});
