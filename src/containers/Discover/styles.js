const React = require("react-native");

const { StyleSheet, Dimensions, Platform } = React;

const deviceHeight = Dimensions.get("window").height;

export default {

  gridRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
  gridItem: {
    width: "50%",
    height: "auto",
    alignSelf: 'center',
    flexDirection: 'column',
    paddingRight: 10,
    paddingLeft: 10,
  }
};
