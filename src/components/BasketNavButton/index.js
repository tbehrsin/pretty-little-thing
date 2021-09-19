import React from 'react';
import { Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useBasket } from 'hooks/useBasket';
import { BLUE } from 'styles';

const BasketNavButton = () => {
  const basket = useBasket();
  const navigation = useNavigation();

  return (
    <Button
      onPress={() => navigation.navigate('Basket')}
      title={basket.count > 0 ? `Basket (${basket.count})` : 'Basket'}
      color={BLUE}
      testID="basket-nav-button"
    />
  );
};

BasketNavButton.propTypes = {};

export { BasketNavButton };
