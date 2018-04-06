const React = require('react-native');

const { StyleSheet, Dimensions, Platform } = React;

export default StyleSheet.create({
  customHeader: {
    flex: 0.1,
    flexDirection: 'row',
    backgroundColor: 'blue',
    height: 30,
    width: Dimensions.get("window").width,
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
