// Imports
import { StyleSheet } from 'react-native';

// UI Imports
import { blockPadding, font } from '../../../ui/responsive';
import { grey2 } from '../../../ui/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: blockPadding * 10,
  },
  text: {
    fontSize: font(20),
    color: grey2,
    textAlign: 'center',
  },
});
