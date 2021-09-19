import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import { MockProductListProvider } from 'hooks/useProductList';
import { BasketProvider } from 'hooks/useBasket';
import { App } from './index';
import products from 'fixtures/products.json';
jest.useFakeTimers();

const MockApp = () => (
  <NavigationContainer>
    <MockProductListProvider productList={products}>
      <BasketProvider>
        <App />
      </BasketProvider>
    </MockProductListProvider>
  </NavigationContainer>
);

describe('App', () => {
  test('renders without crashing', () => {
    const { toJSON } = render(<MockApp />);
    expect(toJSON()).toMatchSnapshot();
  });

  test('pressing basket button', () => {
    const { getByTestId, toJSON } = render(<MockApp />);
    const button = getByTestId('basket-nav-button');
    fireEvent.press(button);
    expect(toJSON()).toMatchSnapshot();
  });
});
