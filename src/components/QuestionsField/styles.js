import { StyleSheet } from 'react-native';
import { COLOR_WHITE, COLOR_WHITE_OPACITY_70 } from '../../constants/Styles';

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
  chekedIcon: {
    position: 'absolute',
    right: 16,
    width: 16,
    height: 16,
  },
});
