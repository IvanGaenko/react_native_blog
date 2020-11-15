// UI Imports
import { font } from '../../../ui/responsive';
import {
  black,
  subtitleGrey,
  avatarBackground,
  invisible,
} from '../../../ui/colors';

export default {
  container: {
    backgroundColor: invisible,
  },
  avatarOverlay: { backgroundColor: avatarBackground },
  avatarTitle: {
    fontSize: font(16),
    color: black,
  },
  contentTitle: {
    fontSize: font(16),
    color: black,
    paddingBottom: 5,
  },
  contentSubtitle: {
    color: subtitleGrey,
  },
  textAmount: { fontSize: font(16), color: black },
};
