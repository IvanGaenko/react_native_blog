// Imports
import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// UI Imports
import styles from './styles';

const Body = ({ children }) => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.wrapper}>
          <View style={styles.content}>{children}</View>
        </View>
      </SafeAreaView>
    </>
  );
};

// Component Properties
Body.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Body;
