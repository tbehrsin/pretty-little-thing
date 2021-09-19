import React, { createContext, useContext } from 'react';
import PropTypes from 'prop-types';
import * as CustomPropTypes from 'utils/CustomPropTypes';

const ProductContext = createContext();

const ProductProvider = ({ product, children }) => (
  <ProductContext.Provider value={product}>{children}</ProductContext.Provider>
);

ProductProvider.propTypes = {
  product: PropTypes.shape({
    id: CustomPropTypes.int.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    colour: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
  }).isRequired,
  children: PropTypes.node,
};

const useProduct = () => useContext(ProductContext);

export { ProductProvider, useProduct };
