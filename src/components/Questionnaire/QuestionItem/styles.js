import { StyleSheet, Dimensions } from 'react-native';
import { COLOR_WHITE, COLOR_TURQUOISE } from '../../../constants/Styles';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: width - 55,
  },
  titleNumber: {
    fontSize: 22,
    color: COLOR_TURQUOISE,
  },
  titleText: {
    marginLeft: 25,
    fontSize: 14,
    color: COLOR_WHITE,
    flex: 1,
  },
});
