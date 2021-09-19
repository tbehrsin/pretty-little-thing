import React, { useState, useEffect, createContext, useContext } from 'react';
import PropTypes from 'prop-types';
import * as CustomPropTypes from 'utils/CustomPropTypes';
import { PRETTYLITTLETHING_API_URL } from '@env';

const ProductListContext = createContext();

const ProductListProvider = ({ url, children }) => {
  const [productList, setProductList] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    let cancel = false;

    (async () => {
      const response = await fetch(`${url}/products`);
      /* istanbul ignore next */
      if (cancel) {
        return;
      }

      const productList = await response.json();
      /* istanbul ignore next */
      if (cancel) {
        return;
      }

      setProductList(productList);
      setLoading(false);
      setError();
    })().catch(err => {
      if (!cancel) {
        setProductList();
        setLoading(false);
        setError(err);
      }
    });

    return () => (cancel = true);
  }, []);

  const context = { loading, error, productList };

  return (
    <ProductListContext.Provider value={context}>
      {children}
    </ProductListContext.Provider>
  );
};

ProductListProvider.propTypes = {
  url: PropTypes.string.isRequired,
  children: PropTypes.node,
};

const MockProductListProvider = ({
  productList,
  loading = false,
  children,
}) => {
  const context = { loading, productList: loading ? undefined : productList };

  return (
    <ProductListContext.Provider value={context}>
      {children}
    </ProductListContext.Provider>
  );
};

MockProductListProvider.propTypes = {
  productList: PropTypes.arrayOf(CustomPropTypes.product),
  loading: PropTypes.bool,
  children: PropTypes.node,
};

const withProductListProvider = Component => props =>
  (
    <ProductListProvider url={PRETTYLITTLETHING_API_URL}>
      <Component {...props} />
    </ProductListProvider>
  );

const useProductList = () => useContext(ProductListContext);

export {
  ProductListProvider,
  MockProductListProvider,
  withProductListProvider,
  useProductList,
};
