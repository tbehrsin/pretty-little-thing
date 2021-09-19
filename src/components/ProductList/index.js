import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { useProductList } from 'hooks/useProductList';
import { useBasket } from 'hooks/useBasket';
import { ProductProvider } from 'hooks/useProduct';
import { ActivityIndicator } from 'components/ActivityIndicator';
import { Product } from 'components/Product';
import { BasketAddButton } from 'components/BasketAddButton';

const ProductList = () => {
  const { loading, error, productList } = useProductList();
  const basket = useBasket();

  if (loading) {
    return <ActivityIndicator style={styles.activity} />;
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {productList?.map(product => {
        return (
          <ProductProvider product={product} key={`${product.id}`}>
            <Product>
              <BasketAddButton />
            </Product>
          </ProductProvider>
        );
      })}
    </ScrollView>
  );
};

ProductList.propTypes = {};

const styles = StyleSheet.create({
  activity: {
    alignSelf: 'center',
    marginTop: 50,
  },
  container: {
    flex: 1,
  },
  content: {
    paddingTop: 20,
    paddingBottom: 50,
  },
});

export { ProductList };
