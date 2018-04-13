import { StyleSheet } from 'react-native';
import {
  COLOR_TURQUOISE,
  COLOR_WHITE,
  COLOR_WHITE_OPACITY_20,
} from '../../../constants/Styles';

export default StyleSheet.create({
  container: {
    marginTop: 50,
  },
  selectedRangeStartStyle: {
    borderWidth: 1,
    borderColor: COLOR_WHITE,
    borderRadius: 3,
    backgroundColor: COLOR_TURQUOISE,
  },
  selectedRangeStyle: {
    backgroundColor: COLOR_WHITE_OPACITY_20,
  },
  selectedRangeEndStyle: {
    borderWidth: 1,
    borderColor: COLOR_WHITE,
    borderRadius: 3,
    backgroundColor: COLOR_TURQUOISE,
  },
  selectedDayStyle: {
    borderWidth: 1,
    borderColor: COLOR_WHITE,
    borderRadius: 3,
    backgroundColor: COLOR_TURQUOISE,
  },
});
