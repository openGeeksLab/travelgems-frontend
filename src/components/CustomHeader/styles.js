const React = require('react-native');

const { StyleSheet, Dimensions, Platform } = React;

export default StyleSheet.create({
  customHeader: {
    flexDirection: 'row',
    zIndex: 100,
    height: 55,
    position: 'absolute',
    alignItems: 'center',
    backgroundColor: '#041DB2',
    justifyContent: 'space-between',
    paddingTop: 20,
    right: 0,
    top: 0,
    left: 0,
  },
  headerIcon1: {
    marginLeft: 20,
  },
  headerIcon2: {
    marginHorizontal: 18,
  },
  headerIcon3: {
    flexDirection: 'row',
  },
});
