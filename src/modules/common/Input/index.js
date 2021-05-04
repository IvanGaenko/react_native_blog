// Imports
import React from 'react';
import PropTypes from 'prop-types';
import { SearchBar } from 'react-native-elements';

// UI Imports
import styles from './styles';

// App Imports
import words from '../../../config/words';

// Component
class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      word: '',
    };
    this.onChange = this.onChange.bind(this);
  }

  // onChange
  onChange = (e) => {
    const { onChangeInputText } = this.props;
    this.setState({ word: e });
    onChangeInputText(e);
  };

  render() {
    const { word } = this.state;
    return (
      <SearchBar
        platform={words.search.platform}
        searchIcon={styles.searchIcon}
        placeholder={words.search.title}
        onChangeText={this.onChange}
        value={word}
        inputContainerStyle={styles.inputContainerStyle}
        containerStyle={styles.containerStyle}
      />
    );
  }
}

// Component Properties
Input.propTypes = {
  onChangeInputText: PropTypes.func.isRequired,
};

export default Input;
