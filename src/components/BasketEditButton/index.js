import React, { useState } from 'react';
import { Button, View, StyleSheet } from 'react-native';
import { ProductLabel } from 'components/ProductLabel';
import { EditCountModal } from 'components/EditCountModal';
import { useProduct } from 'hooks/useProduct';
import { useBasket } from 'hooks/useBasket';
import { BLUE } from 'styles';

const BasketEditButton = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const product = useProduct();
  const basket = useBasket();

  const count = basket.getCountForProduct(product);

  const onPressRemoveFromBasket = () => {
    basket.remove(product);
  };

  const onPressEditCount = () => {
    setModalVisible(true);
  };

  const onModalRequestClose = count => {
    setModalVisible(false);
    basket.setCountForProduct(product, count);
  };

  return (
    <>
      {count > 0 && (
        <ProductLabel
          onPress={onPressEditCount}
          testID="basket-edit-count-button"
        >
          ×{count}
        </ProductLabel>
      )}
      <View style={styles.spacer} />
      <Button
        onPress={onPressRemoveFromBasket}
        title="Remove from Basket"
        color={BLUE}
        testID="basket-remove-button"
      />
      <EditCountModal
        count={count}
        visible={modalVisible}
        onRequestClose={onModalRequestClose}
      />
    </>
  );
};

BasketEditButton.propTypes = {};

const styles = StyleSheet.create({
  spacer: {
    width: 20,
  },
});

export { BasketEditButton };
