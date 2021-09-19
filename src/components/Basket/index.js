import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { useBasket } from 'hooks/useBasket';
import { ProductProvider } from 'hooks/useProduct';
import { Product } from 'components/Product';
import { BasketEditButton } from 'components/BasketEditButton';
import { BasketTotals } from 'components/BasketTotals';

const Basket = () => {
  const basket = useBasket();

  return (
    <>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.content}
      >
        {basket.items.map(it => (
          <ProductProvider product={it.product} key={`${it.product.id}`}>
            <Product>
              <BasketEditButton />
            </Product>
          </ProductProvider>
        ))}
      </ScrollView>
      <BasketTotals />
    </>
  );
};

Basket.propTypes = {};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    paddingTop: 20,
    paddingBottom: 50,
  },
});

export { Basket };
