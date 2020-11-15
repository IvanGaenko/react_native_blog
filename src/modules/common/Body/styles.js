// Imports
import { StyleSheet } from 'react-native';

// UI Imports
import { white } from '../../../ui/colors';

export default StyleSheet.create({
  wrapper: {
    flex: 1,
    position: 'relative',
  },

  content: {
    flex: 1,
    position: 'relative',
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'space-between',
  },
  container: {
    flex: 1,
    backgroundColor: white,
  },
});
