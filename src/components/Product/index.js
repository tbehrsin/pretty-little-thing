import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Dimensions, View, Text, StyleSheet } from 'react-native';
import { useProduct } from 'hooks/useProduct';
import { useBasket } from 'hooks/useBasket';
import { ProductImage } from 'components/ProductImage';
import { ProductLabel } from 'components/ProductLabel';

import { WHITE, BLUE, LIGHT_BLUE, BODY1_400, BODY1_700 } from 'styles';

const Product = ({ children }) => {
  const product = useProduct();

  return (
    <View style={styles.container}>
      <ProductImage />

      <View style={styles.row}>
        <Text style={styles.name}>{product.name}</Text>
      </View>
      <View style={styles.row}>
        <ProductLabel>{product.colour}</ProductLabel>
        <View style={styles.flex} />
        <ProductLabel>£{product.price}</ProductLabel>
      </View>
      <View style={styles.row}>
        <View style={styles.flex} />
        {children}
      </View>
    </View>
  );
};

Product.propTypes = {
  children: PropTypes.node,
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginVertical: 5,
    padding: 20,
    backgroundColor: WHITE,
    shadowRadius: 6,
    shadowOpacity: 0.2,
    shadowColor: 'black',
    shadowOffset: {
      height: 2,
    },
  },
  row: {
    flexDirection: 'row',
    marginTop: 10,
  },
  flex: {
    flex: 1,
  },
  name: {
    ...BODY1_700,
    color: BLUE,
  },
});

export { Product };
