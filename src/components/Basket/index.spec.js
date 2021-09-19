import React, { useEffect } from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { BasketProvider, useBasket } from 'hooks/useBasket';
import { Basket } from './index';
import products from 'fixtures/products.json';

const MockBasket = ({ children }) => (
  <BasketProvider>
    {children}
    <Basket />
  </BasketProvider>
);

describe('App', () => {
  test('renders without crashing', () => {
    const { toJSON } = render(<MockBasket />);
    expect(toJSON()).toMatchSnapshot();
  });

  test('renders basket items', () => {
    const Component = () => {
      const basket = useBasket();
      useEffect(() => {
        basket.add(products[0]);
        basket.add(products[0]);
        basket.add(products[1]);
      }, []);
      return null;
    };

    const { toJSON } = render(
      <MockBasket>
        <Component />
      </MockBasket>
    );

    expect(toJSON()).toMatchSnapshot();
  });

  test('edits count', () => {
    const Component = () => {
      const basket = useBasket();
      useEffect(() => {
        basket.add(products[0]);
        basket.add(products[0]);
        basket.add(products[1]);
      }, []);
      return null;
    };

    const { getAllByTestId, toJSON } = render(
      <MockBasket>
        <Component />
      </MockBasket>
    );

    const [editButton] = getAllByTestId('basket-edit-count-button');
    fireEvent.press(editButton);

    const [removeButton] = getAllByTestId('edit-count-remove-button');
    fireEvent.press(removeButton);
    fireEvent.press(removeButton);
    fireEvent.press(removeButton); // check it doesn't go negative
    expect(toJSON()).toMatchSnapshot();

    const [doneButton] = getAllByTestId('edit-count-done-button');
    fireEvent.press(doneButton);
    expect(toJSON()).toMatchSnapshot();
  });

  test('basket remove button decrements count', () => {
    const Component = () => {
      const basket = useBasket();
      useEffect(() => {
        basket.add(products[0]);
        basket.add(products[0]);
        basket.add(products[1]);
      }, []);
      return null;
    };

    const { getAllByTestId, toJSON } = render(
      <MockBasket>
        <Component />
      </MockBasket>
    );

    const [removeButton] = getAllByTestId('basket-remove-button');
    fireEvent.press(removeButton);
    expect(toJSON()).toMatchSnapshot();

    fireEvent.press(removeButton);
    expect(toJSON()).toMatchSnapshot();
  });
});
