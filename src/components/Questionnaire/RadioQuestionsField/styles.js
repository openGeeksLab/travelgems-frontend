import { StyleSheet } from 'react-native';
import { COLOR_WHITE, COLOR_WHITE_OPACITY_70 } from '../../../constants/Styles';

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
    width: 232,
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
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginBottom: 6,
  },
  rulerElementLong: {
    height: 8,
    backgroundColor: COLOR_WHITE,
    width: 1,
    marginRight: 9,
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
    width: 232,
  },
  rangeText: {
    color: COLOR_WHITE,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
