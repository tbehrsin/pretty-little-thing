import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import { useBasket } from 'hooks/useBasket';
import { ProductLabel } from 'components/ProductLabel';
import { WHITE, GREY50, BLUE, BODY1_400, BODY1_700 } from 'styles';

const formatCurrency = value => `£${value.toFixed(2)}`;

const BasketTotals = () => {
  const basket = useBasket();

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.row}>
          <ProductLabel>{basket.count} items</ProductLabel>
          <View style={styles.flex} />
          <View style={styles.column}>
            <Text style={styles.text}>
              <Text style={styles.label}>Subtotal:</Text>{' '}
              {formatCurrency(basket.subtotal)}
            </Text>
            <Text style={styles.text}>
              <Text style={styles.label}>VAT:</Text>{' '}
              {formatCurrency(basket.vat)}
            </Text>
            <Text style={[styles.text, styles.total]}>
              <Text style={[styles.label, styles.total]}>Total:</Text>{' '}
              {formatCurrency(basket.total)}
            </Text>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

BasketTotals.propTypes = {};

const styles = StyleSheet.create({
  container: {
    backgroundColor: WHITE,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: -20,
    padding: 20,
    shadowColor: 'black',
    shadowOffset: {
      height: -2,
    },
    shadowRadius: 12,
    shadowOpacity: 0.2,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  flex: {
    flex: 1,
  },
  column: {
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  text: {
    ...BODY1_400,
    color: GREY50,
  },
  label: {
    ...BODY1_700,
    color: GREY50,
  },
  total: {
    color: BLUE,
  },
});

export { BasketTotals };
