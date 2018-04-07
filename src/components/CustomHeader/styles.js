const React = require('react-native');

const { StyleSheet, Dimensions, Platform } = React;

export default StyleSheet.create({
  customHeader: {
    flexDirection: 'row',
    zIndex: 100,
    height: 30,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'space-between',
    right: 20,
    top: 20,
    left: 20,
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
