import { StyleSheet, Dimensions } from 'react-native';
import { COLOR_DARK_OPACITY_20, COLOR_WHITE } from '../../constants/Styles';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    position: 'absolute',
    width,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: COLOR_DARK_OPACITY_20,
    paddingVertical: 27,
    paddingHorizontal: 32.5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textStyle: {
    color: COLOR_WHITE,
    fontSize: 14,
    marginBottom: 14,
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  buttonStyle: {
    width: 24,
    height: 24,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLOR_WHITE,
  },
});
