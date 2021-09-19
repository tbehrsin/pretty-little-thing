import React from 'react';
import { renderHook, act } from '@testing-library/react-hooks';
import { ProductListProvider, useProductList } from './useProductList';
import products from 'fixtures/products.json';

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(products),
  })
);

const immediate = () => new Promise(resolve => setImmediate(resolve));

describe('useProductList', () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  test('fetches product list', async () => {
    const wrapper = ({ children }) => (
      <ProductListProvider url="">{children}</ProductListProvider>
    );
    const { result } = renderHook(() => useProductList(), { wrapper });

    expect(result.current).toMatchSnapshot();

    await act(immediate);

    expect(result.current).toMatchSnapshot();
  });

  test('fetch error', async () => {
    global.fetch.mockImplementation(() => Promise.reject('API error'));

    const wrapper = ({ children }) => (
      <ProductListProvider url="">{children}</ProductListProvider>
    );
    const { result } = renderHook(() => useProductList(), { wrapper });

    expect(result.current).toMatchSnapshot();

    await act(immediate);

    expect(result.current).toMatchSnapshot();
  });
});
