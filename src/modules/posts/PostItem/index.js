// Imports
import React from 'react';
import PropTypes from 'prop-types';
import { ListItem } from 'react-native-elements';

// UI Imports
import styles from './styles';

export default function PostItem({ item }) {
  return (
    <ListItem>
      <ListItem.Content style={styles.container}>
        <ListItem.Title style={styles.title}>{item.title}</ListItem.Title>
        <ListItem.Subtitle style={styles.body}>{item.body}</ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  );
}

// Component Properties
PostItem.propTypes = {
  item: PropTypes.shape().isRequired,
};
