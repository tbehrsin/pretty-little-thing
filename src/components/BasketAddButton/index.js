import React from 'react';
import { Button, View, StyleSheet } from 'react-native';
import { ProductLabel } from 'components/ProductLabel';
import { useProduct } from 'hooks/useProduct';
import { useBasket } from 'hooks/useBasket';
import { BLUE } from 'styles';

const BasketAddButton = () => {
  const product = useProduct();
  const basket = useBasket();

  const count = basket.getCountForProduct(product);

  const onPressAddToBasket = () => {
    basket.add(product);
  };

  return (
    <>
      {count > 0 && <ProductLabel>×{count}</ProductLabel>}
      <View style={styles.spacer} />
      <Button onPress={onPressAddToBasket} title="Add to Basket" color={BLUE} />
    </>
  );
};

BasketAddButton.propTypes = {};

const styles = StyleSheet.create({
  spacer: {
    width: 20,
  },
});

export { BasketAddButton };
