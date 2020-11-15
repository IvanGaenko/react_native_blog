// Imports
import React from 'react';
import PropTypes from 'prop-types';
import { View, ActivityIndicator } from 'react-native';

// UI Imports
import { grey2 } from '../../../ui/colors';
import styles from './styles';

const Loading = ({ size, color }) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={size} color={color} />
    </View>
  );
};

// Component Properties
Loading.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
};

Loading.defaultProps = {
  size: 'large',
  color: grey2,
};

export default Loading;
