const React = require("react-native");

const { StyleSheet, Dimensions, Platform } = React;

const deviceHeight = Dimensions.get("window").height;

export default {
  content: {
    flex: 1
  },
  imageContainer: {
    position: "absolute",
  },
  logoContainer: {
    flex: 1,
    marginTop: Dimensions.get("window").height / 8,
    marginBottom: 30,
  },
  logo: {
    position: "absolute",
    left: Platform.OS === "android" ? 40 : 50,
    top: Platform.OS === "android" ? 35 : 60,
    width: 280,
    height: 100,
  },
  text: {
    color: "#D8D8D8",
    bottom: 6,
    marginTop: 5
  },
  customHeader: {
    flex: 1,
    flexDirection: 'row'
  },
  imageText: {
    top: Dimensions.get("window").height - 420,
    position: 'absolute',
  },
  imageTitle: {
    fontSize: 28,
    marginLeft: 30,
  },
  imageSubtitle: {
    fontSize: 12,
    marginLeft: 30,
    opacity: 0.5,
  },
  gridRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 20,
  },
  gridItem: {
    width: 90,
    height: 90,
  },
  gridImage: {
    width: 50,
    height: 50,
    alignSelf: 'center',
    flexDirection: 'column',
  },
  gridTitle: {
    fontSize: 9,
    opacity: 0.5,
    alignSelf: 'center',
    marginTop: 5,
  },
  gridSubtitle: {
    fontSize: 15,
    alignSelf: 'center',
  },
  infoViewTitle: {
    fontSize: 24,
    marginLeft: 30,
  }
};