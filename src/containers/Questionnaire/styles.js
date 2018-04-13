import { StyleSheet, Dimensions, Platform } from 'react-native';
import { COLOR_WHITE } from '../../constants/Styles';

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
  },
  groupContainer: {
    width,
    alignItems: 'center',
  },
  scrollView: {
    marginBottom: 80,
    marginTop: 30,
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
