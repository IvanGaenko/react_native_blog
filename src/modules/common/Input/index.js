// Imports
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { SearchBar } from 'react-native-elements';

// UI Imports
import styles from './styles';

// App Imports
import words from '../../../config/words';

// Component
const Input = ({ onChangeInputText }) => {
  // state
  const [word, setWord] = useState('');

  // onChange
  const onChange = (e) => {
    setWord(e);
    onChangeInputText(e);
  };

  return (
    <SearchBar
      platform={words.search.platform}
      searchIcon={styles.searchIcon}
      placeholder={words.search.title}
      onChangeText={onChange}
      value={word}
      inputContainerStyle={styles.inputContainerStyle}
      containerStyle={styles.containerStyle}
    />
  );
};

// Component Properties
Input.propTypes = {
  onChangeInputText: PropTypes.func.isRequired,
};

export default Input;
