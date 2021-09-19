import React, { useState } from 'react';
import PropTypes from 'prop-types';
import * as CustomPropTypes from 'utils/CustomPropTypes';
import {
  Button,
  Modal,
  View,
  SafeAreaView,
  Text,
  StyleSheet,
} from 'react-native';
import { ProductLabel } from 'components/ProductLabel';
import { WHITE } from 'styles';

const EditCountModal = ({ count, visible, onRequestClose }) => {
  const [_count, setCount] = useState(count);

  const _onRequestClose = () => {
    onRequestClose?.(_count);
  };

  const onPressRemove = () => setCount(count => Math.max(0, count - 1));
  const onPressAdd = () => setCount(count => count + 1);
  const onPressDone = _onRequestClose;

  return (
    <Modal
      animationType="fade"
      visible={visible}
      transparent
      onRequestClose={_onRequestClose}
    >
      <View style={styles.container}>
        <View style={styles.flex} />
        <View style={styles.modalContainer}>
          <View style={styles.row}>
            <Button
              title="-"
              onPress={onPressRemove}
              testID="edit-count-remove-button"
            />
            <View style={styles.spacer} />
            <ProductLabel>{_count}</ProductLabel>
            <View style={styles.spacer} />
            <Button
              title="+"
              onPress={onPressAdd}
              testID="edit-count-add-button"
            />
          </View>
          <View style={styles.spacer} />
          <Button
            title="Done"
            onPress={onPressDone}
            testID="edit-count-done-button"
          />
        </View>
      </View>
    </Modal>
  );
};

EditCountModal.propTypes = {
  count: CustomPropTypes.int.isRequired,
  visible: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0,0,0,0.5)',

    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
  },
  modalContainer: {
    backgroundColor: WHITE,
    padding: 20,
    paddingBottom: 50,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: 'black',
    shadowOffset: {
      height: -2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 12,
  },
  flex: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  spacer: {
    width: 20,
    height: 20,
  },
});

export { EditCountModal };
