import { widthPercentage } from '../../utils/layout';

describe('<layout />', () => {
  it('should calculate the correct width for 50% of the viewport', () => {
    const viewportWidth = 800;
    jest.mock('react-native', () => ({
      Dimensions: {
        get: jest.fn().mockReturnValue({ width: viewportWidth }),
      },
    }));
    const result = widthPercentage(50);
    expect(result).toBe(375);
  });

  it('should return a negative width value when given a negative percentage', () => {
    const viewportWidth = 800;
    jest.mock('react-native', () => ({
      Dimensions: {
        get: jest.fn().mockReturnValue({ width: viewportWidth }),
      },
    }));

    const result = widthPercentage(-50);
    expect(result).toBe(-375);
  });

  it('should return correct rounded value for percentage just below .5', () => {
    const viewportWidth = 800;
    jest.mock('react-native', () => ({
      Dimensions: {
        get: jest.fn().mockReturnValue({ width: viewportWidth }),
      },
    }));
    const result = widthPercentage(49.4);
    expect(result).toBe(371);
  });

  it('should calculate correct width percentages for common values', () => {
    jest.mock('react-native', () => ({
      Dimensions: {
        get: jest.fn().mockReturnValue({ width: 800, height: 600 }),
      },
    }));

    expect(widthPercentage(25)).toBe(188);
    expect(widthPercentage(50)).toBe(375);
    expect(widthPercentage(75)).toBe(563);
  });
});
