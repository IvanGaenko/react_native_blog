// Imports
import { StyleSheet } from 'react-native';

// UI Imports
import {
  scalable,
  deviceWidthHalf,
  deviceWidthThird,
  postHeight,
} from '../../../ui/responsive';
import {
  placeholderBackground,
  placeholderForeground,
} from '../../../ui/colors';

export default StyleSheet.create({
  container: {
    padding: scalable(16),
    height: postHeight,
  },
  contentLoader: {
    backgroundColor: placeholderBackground,
    foregroundColor: placeholderForeground,
    speed: 1,
  },
  rectUpper: {
    x: scalable(56),
    y: '0',
    rx: scalable(3),
    ry: scalable(3),
    width: deviceWidthThird,
    height: scalable(14),
  },
  rectLower: {
    x: scalable(56),
    y: scalable(25),
    rx: scalable(3),
    ry: scalable(3),
    width: deviceWidthHalf,
    height: scalable(14),
  },
  circle: {
    cx: scalable(20),
    cy: scalable(20),
    r: scalable(20),
  },
});
