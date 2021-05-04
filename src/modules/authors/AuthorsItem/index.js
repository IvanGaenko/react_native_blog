// Imports
import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';

// UI Imports
import { font } from '../../../ui/responsive';
import { black } from '../../../ui/colors';
import styles from './styles';

// App Imports
import { getFirstLetters, postsCount } from '../../../helpers/utils';

// Component
const AuthorsItem = ({ onSelect, item: { id, name, email, messages } }) => {
  return (
    <TouchableOpacity onPress={onSelect({ id, name, email, messages })}>
      <ListItem containerStyle={styles.container}>
        <Avatar
          rounded
          title={getFirstLetters(name)}
          size={font(40)}
          overlayContainerStyle={styles.avatarOverlay}
          titleStyle={styles.avatarTitle}
        />
        <ListItem.Content>
          <ListItem.Title style={styles.contentTitle}>{name}</ListItem.Title>
          <ListItem.Subtitle style={styles.contentSubtitle}>
            {email}
          </ListItem.Subtitle>
        </ListItem.Content>
        <Text style={styles.textAmount}>{postsCount(messages.length)}</Text>

        <ListItem.Chevron color={black} size={font(25)} />
      </ListItem>
    </TouchableOpacity>
  );
};

// Component Properties
AuthorsItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    messages: PropTypes.arrayOf(PropTypes.object).isRequired,
  }).isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default AuthorsItem;
