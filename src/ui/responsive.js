// Imports
import { Dimensions } from 'react-native';

// Breakpoints
export const breakpointMobile = 320;
export const breakpointTablet = 768;
const scaleFactor = 1.4;

// Device
export const deviceWidth = Dimensions.get('window').width;
export const deviceHeight = Dimensions.get('window').height;

// Margin and Padding
export const blockMargin =
  deviceWidth >= breakpointTablet ? 10 * scaleFactor : 10;
export const blockMarginHalf = blockMargin / 2;
export const blockPadding =
  deviceWidth >= breakpointTablet ? 10 * scaleFactor : 10;
export const blockPaddingHalf = blockPadding / 2;

// Font
export const font = (size) =>
  size * (deviceWidth >= breakpointTablet ? scaleFactor : 1);

// Scale
export const scalable = (size) =>
  size * (deviceWidth >= breakpointTablet ? scaleFactor : 1);
