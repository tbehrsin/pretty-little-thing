import React from 'react';
import { Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { ProductList } from 'components/ProductList';
import { BasketNavButton } from 'components/BasketNavButton';
import { Basket } from 'components/Basket';
import { BLUE } from 'styles';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ProductList"
        component={ProductList}
        options={{
          title: 'Products',
          headerRight: BasketNavButton,
        }}
      />
      <Stack.Screen
        name="Basket"
        component={Basket}
        options={{ title: 'Basket' }}
      />
    </Stack.Navigator>
  );
};

App.propTypes = {};

export { App };
