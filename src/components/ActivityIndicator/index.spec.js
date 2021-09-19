import React from 'react';
import { render, act } from '@testing-library/react-native';
import { ActivityIndicator } from './index';
jest.useFakeTimers();

describe('ActivityIndicator', () => {
  test('renders without crashing', () => {
    const { toJSON } = render(<ActivityIndicator />);
    expect(toJSON()).toMatchSnapshot();
  });
});
