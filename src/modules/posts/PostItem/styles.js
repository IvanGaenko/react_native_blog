// UI Imports
import { font } from '../../../ui/responsive';
import { white, subtitleGrey } from '../../../ui/colors';

export default {
  container: {
    backgroundColor: white,
    paddingVertical: 15,
    paddingHorizontal: 20,
    elevation: 7,
    shadowColor: subtitleGrey,
    shadowOpacity: 0.8,
    shadowRadius: 4,
    shadowOffset: {
      height: 4,
      width: 0,
    },
  },
  title: {
    fontWeight: 'bold',
    paddingBottom: 15,
    fontSize: font(20),
  },
  body: {
    color: subtitleGrey,
  },
};
