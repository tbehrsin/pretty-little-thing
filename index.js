import React from 'react';
import { AppRegistry } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { App } from 'components/App';
import { withBasketProvider } from 'hooks/useBasket';
import { withProductListProvider } from 'hooks/useProductList';
import { compose } from 'utils/compose';
import { name } from './app.json';

const withNavigationContainer = Component => props =>
  (
    <NavigationContainer>
      <Component {...props} />
    </NavigationContainer>
  );

AppRegistry.registerComponent(name, () =>
  compose(
    withNavigationContainer,
    withProductListProvider,
    withBasketProvider,
    App
  )
);
