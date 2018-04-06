import { StyleSheet, Dimensions, Platform } from 'react-native';
import { COLOR_WHITE, COLOR_TURQUOISE } from '../../constants/Styles';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    ...Platform.select({
      ios: {
        flex: 1,
      },
      android: {
        height: height - 25,
      },
    }),
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 27.5,
  },
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
  },
  questionsContainer: {
    marginTop: 64,
    alignItems: 'center',
  },
  fourthContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerRange: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  rangeText: {
    color: COLOR_WHITE,
  },
});
