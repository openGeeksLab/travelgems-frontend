const React = require("react-native");
const { StyleSheet, Dimensions, Platform } = React;

export default {
  content: {
    flex: 1
  },
  customHeader: {
    flex: 0.1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    height: 30,
    width: Dimensions.get("window").width,
    position: 'absolute',
    marginTop: 30,
  },
  headerIcon1: {
    position: 'absolute',
    flexDirection: 'row',
    right: Dimensions.get("window").width-40,
  },
  headerIcon2: {
    position: 'absolute',
    flexDirection: 'row',
    left: Dimensions.get("window").width-80,
  },
  headerIcon3: {
    position: 'absolute',
    flexDirection: 'row',
    left: Dimensions.get("window").width-40,
    right: 10,
    top: -10
  }
};