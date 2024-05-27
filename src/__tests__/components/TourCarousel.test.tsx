import React from 'react';
import { render } from '@testing-library/react-native';
import TourCarousel from '../../components/TourCarousel';

describe('<TourCarousel />', () => {
  it('should render skip button when skipable is true', () => {
    const data = [
      {
        illustration: '',
        subtitle: '',
        title: '',
      },
    ];

    const { getByTestId } = render(
      <TourCarousel
        data={data}
        skipButtonConfig={{ skipable: true, title: 'Skip' }}
      />
    );
    expect(getByTestId('skip-button')).toBeTruthy();
  });
});
