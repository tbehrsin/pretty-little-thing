import React, { useState, createContext, useContext } from 'react';
import PropTypes from 'prop-types';

const PrivateTable = new WeakMap();

const BasketContext = createContext();

class Basket {
  constructor(items, setItems) {
    PrivateTable.set(this, {
      items,
      setItems: items => {
        PrivateTable.get(this).items = items;
        setItems(items);
      },
      copyItems: () => {
        return PrivateTable.get(this).items.map(it => ({ ...it }));
      },
    });
  }

  add(product) {
    const { copyItems, setItems } = PrivateTable.get(this);
    const items = copyItems();
    const index = items.findIndex(it => it.product === product);

    if (index === -1) {
      items.push({ product, count: 1 });
    } else {
      items[index].count++;
    }
    setItems(items);
  }

  remove(product) {
    const { copyItems, setItems } = PrivateTable.get(this);
    const items = copyItems();
    const index = items.findIndex(it => it.product === product);

    if (index !== -1) {
      items[index].count--;
      if (items[index].count === 0) {
        items.splice(index, 1);
      }
    }
    setItems(items);
  }

  getCountForProduct(product) {
    const { items } = PrivateTable.get(this);
    const item = items.find(it => it.product === product);

    if (!item) {
      return 0;
    } else {
      return item.count;
    }
  }

  setCountForProduct(product, count) {
    const { copyItems, setItems } = PrivateTable.get(this);
    const items = copyItems();

    const index = items.findIndex(it => it.product === product);

    if (index === -1) {
      if (count > 0) {
        items.push({ product, count });
      }
    } else {
      if (count === 0) {
        items.splice(index, 1);
      } else {
        items[index].count = count;
      }
    }

    setItems(items);
  }

  get subtotal() {
    const total = this.total;
    return parseFloat((total / 1.2).toFixed(2));
  }

  get vat() {
    const total = this.total;
    const subtotal = this.subtotal;
    return total - subtotal;
  }

  get total() {
    const { items } = PrivateTable.get(this);

    let total = 0;
    for (const item of items) {
      total += item.product.price * item.count;
    }
    return total;
  }

  get count() {
    const { items } = PrivateTable.get(this);

    let count = 0;
    for (const item of items) {
      count += item.count;
    }
    return count;
  }

  get items() {
    const { copyItems } = PrivateTable.get(this);
    return copyItems();
  }
}

const BasketProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const basket = new Basket(items, setItems);

  return (
    <BasketContext.Provider value={basket}>{children}</BasketContext.Provider>
  );
};

BasketProvider.propTypes = {
  children: PropTypes.node,
};

const withBasketProvider = Component => props =>
  (
    <BasketProvider>
      <Component {...props} />
    </BasketProvider>
  );

const useBasket = () => useContext(BasketContext);

export { Basket, BasketProvider, useBasket, withBasketProvider };
