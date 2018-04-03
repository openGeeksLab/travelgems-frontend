const React = require('react-native');

const { StyleSheet, Dimensions, Platform } = React;

export default StyleSheet.create({
  customHeader: {
    zIndex: 1000,
    backgroundColor: 'transparent',
    height: 60,
    top: 20,
    left: 0,
    right: 0,
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 10,
  },
  headerIcon1: {
    marginRight: 40,
  },
  headerIcon2: {
    marginHorizontal: 18,
  },
  headerIcon3: {
    flexDirection: 'row',
  },
});
