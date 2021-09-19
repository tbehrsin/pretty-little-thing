import React from 'react';
import { renderHook, act } from '@testing-library/react-hooks';
import { Basket, BasketProvider, useBasket } from './useBasket';
import products from 'fixtures/products.json';

describe('useBasket', () => {
  test('adds items', () => {
    const setItems = jest.fn();
    const items = [];

    const basket = new Basket(items, setItems);

    basket.add(products[0]);
    basket.add(products[0]);
    basket.add(products[1]);

    expect(setItems).toHaveBeenCalledTimes(3);
    expect(basket.items).toMatchSnapshot();
    expect(basket.getCountForProduct(products[0])).toEqual(2);
    expect(basket.getCountForProduct(products[1])).toEqual(1);
    expect(basket.getCountForProduct(products[3])).toEqual(0);

    basket.setCountForProduct(products[0], 15);
    basket.setCountForProduct(products[3], 5);
    expect(basket.getCountForProduct(products[0])).toEqual(15);
    expect(basket.getCountForProduct(products[1])).toEqual(1);
    expect(basket.getCountForProduct(products[3])).toEqual(5);
  });

  test('removes items', () => {
    const setItems = jest.fn();
    const items = [];

    const basket = new Basket(items, setItems);

    basket.add(products[0]);
    basket.add(products[0]);
    basket.add(products[1]);
    basket.remove(products[0]);

    expect(setItems).toHaveBeenCalledTimes(4);
    expect(basket.items).toMatchSnapshot();

    basket.remove(products[0]);
    expect(setItems).toHaveBeenCalledTimes(5);
    expect(basket.items).toMatchSnapshot();
  });

  test('copies items array', () => {
    const setItems = jest.fn();
    const items = [];

    const basket = new Basket(items, setItems);

    basket.add(products[0]);
    expect(items).toMatchSnapshot();

    basket.remove(products[0]);
    expect(items).toMatchSnapshot();

    expect(items).not.toBe(basket.items);
  });

  test('basket gets recreated on each render', () => {
    const wrapper = BasketProvider;
    const { result } = renderHook(() => useBasket(), { wrapper });

    const basket = result.current;
    act(() => result.current.add(products[0]));

    expect(basket).not.toBe(result.current);
    expect(basket).toBeInstanceOf(Basket);
    expect(result.current).toBeInstanceOf(Basket);

    act(() => result.current.add(products[0]));

    expect(basket.items).toEqual([{ count: 1, product: products[0] }]);
    expect(result.current.items).toEqual([
      {
        count: 2,
        product: products[0],
      },
    ]);
  });

  test('totals are correct', () => {
    const setItems = jest.fn();
    const items = [];

    const basket = new Basket(items, setItems);

    for (const product of products) {
      basket.add(product);
    }

    expect(basket.count).toMatchSnapshot();
    expect(basket.subtotal).toMatchSnapshot();
    expect(basket.vat).toMatchSnapshot();
    expect(basket.total).toMatchSnapshot();
  });
});
