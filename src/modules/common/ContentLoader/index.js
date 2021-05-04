// Imports
import React from 'react';
import ContentLoader, { Rect, Circle } from 'react-content-loader/native';
import { View } from 'react-native';

// App Imports
import { placeholderLenght } from '../../../ui/responsive';

// UI Imports
import styles from './styles';

const Loader = () => {
  return (
    <View style={styles.container}>
      <ContentLoader style={styles.contentLoader} collapsable="false">
        <Rect style={styles.rectUpper} />
        <Rect style={styles.rectLower} />
        <Circle style={styles.circle} />
      </ContentLoader>
    </View>
  );
};

const LoaderContainer = () => {
  const arr = new Array(placeholderLenght).fill({}).map((elem, i) => {
    return { id: i + 1 };
  });
  return arr.map((el) => <Loader key={el.id} />);
};

export default LoaderContainer;
