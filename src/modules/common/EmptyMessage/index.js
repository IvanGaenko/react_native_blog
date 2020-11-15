// Imports
import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';

// UI Imports
import styles from './styles';

const EmptyMessage = ({ message }) => (
  <View style={styles.container}>
    <Text style={styles.text}>{message}</Text>
  </View>
);

// Component Properties
EmptyMessage.propTypes = {
  message: PropTypes.string.isRequired,
};

export default EmptyMessage;
