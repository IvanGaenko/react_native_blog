// Imports
import { DefaultTheme } from '@react-navigation/native';

// UI Imports
import { primary, white } from '../ui/colors';

export default {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary,
    background: white,
  },
};
