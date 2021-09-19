import React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { ProductProvider, useProduct } from './useProduct';
import products from 'fixtures/products.json';

describe('useProduct', () => {
  test('passes through product in context', () => {
    const wrapper = ({ children }) => (
      <ProductProvider product={products[0]}>{children}</ProductProvider>
    );
    const { result } = renderHook(() => useProduct(), { wrapper });
  });
});
