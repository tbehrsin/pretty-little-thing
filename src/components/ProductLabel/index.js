import React from 'react';
import PropTypes from 'prop-types';
import { TouchableHighlight, View, Text, StyleSheet } from 'react-native';
import { BLUE, GREY20, LIGHT_BLUE, BODY1_400 } from 'styles';

const ProductLabel = ({ onPress, testID, children }) => {
  const label = <Text style={styles.text}>{children}</Text>;

  if (onPress) {
    return (
      <TouchableHighlight
        onPress={onPress}
        activeOpacity={0.6}
        underlayColor={GREY20}
        style={styles.container}
        testID={testID}
      >
        {label}
      </TouchableHighlight>
    );
  } else {
    return (
      <View style={styles.container} testID={testID}>
        {label}
      </View>
    );
  }
};

ProductLabel.propTypes = {
  onPress: PropTypes.func,
  testID: PropTypes.string,
  children: PropTypes.node,
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: LIGHT_BLUE,
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 6,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    ...BODY1_400,
    color: BLUE,
  },
});

export { ProductLabel };
