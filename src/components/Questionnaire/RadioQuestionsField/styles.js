import { StyleSheet } from 'react-native';
import {
  COLOR_WHITE,
  COLOR_WHITE_OPACITY_70,
  COLOR_TURQUOISE,
  COLOR_WHITE_OPACITY_16,
} from '../../../constants/Styles';

const WIDTH = 232;

export default StyleSheet.create({
  container: {
    borderRadius: 3,
    borderColor: COLOR_WHITE_OPACITY_70,
    borderWidth: 0.8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 8,
    paddingVertical: 10,
    width: WIDTH,
    marginBottom: 8,
  },
  checkBoxContainer: {
    borderRadius: 3,
    borderColor: COLOR_WHITE,
    borderWidth: 1,
    marginRight: 20,
    width: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioBoxContainer: {
    borderColor: COLOR_WHITE,
    borderWidth: 1,
    marginLeft: 25,
    width: 20,
    height: 26,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkBoxIcon: {
    color: COLOR_WHITE,
  },
  checkBoxText: {
    color: COLOR_WHITE,
    fontSize: 12,
  },
  fieldText: {
    color: COLOR_WHITE,
    fontSize: 14,
  },
  rulerContainer: {
    width: 200,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // marginBottom: 6,
    // borderWidth: 1,
  },
  rulerElementLong: {
    height: 8,
    backgroundColor: COLOR_WHITE,
    width: 1,
    // marginRight: 49,
  },
  rulerElementShort: {
    height: 4,
    backgroundColor: COLOR_WHITE,
    width: 1,
  },
  textStyle: {
    color: COLOR_WHITE,
    fontSize: 12,
  },
  questionsContainer: {
    alignItems: 'center',
  },
  containerRange: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
    width: WIDTH,
  },
  rangeText: {
    color: COLOR_WHITE,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  trackStyle: {
    backgroundColor: COLOR_WHITE_OPACITY_16,
    borderColor: COLOR_WHITE,
    height: 8,
    borderRadius: 30,
    borderWidth: 1,
  },
  thumbStyle: {
    borderWidth: 0,
    borderColor: 'transparent',
  },
  customComponent: {
    width: 20,
    height: 26,
    backgroundColor: COLOR_TURQUOISE,
    borderWidth: 1,
    borderColor: COLOR_WHITE,
    borderRadius: 2,
    alignItems: 'center',
    justifyContent: 'center',
    transform: [{ translateY: -3 }],
  },
  customComponentText: {
    color: COLOR_WHITE,
    fontSize: 12,
  },
  sliderContainer: {
    justifyContent: 'center',
    width: WIDTH,
  },
});
