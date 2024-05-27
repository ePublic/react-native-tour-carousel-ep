import { render } from '@testing-library/react-native';
import React from 'react';
import Pagination from '../../components/Pagination';

describe('<Pagination />', () => {
  it('should handle negative currentIndex', () => {
    const { getByTestId } = render(<Pagination currentIndex={-1} length={5} />);
    const pagination = getByTestId('pagination-container');
    expect(pagination).toBeTruthy();
  });

  it('renders for a Pagination correctly', () => {
    const Renderer = render(<Pagination currentIndex={-1} length={5} />);
    expect(Renderer.toJSON()).toMatchSnapshot();
  });
});
