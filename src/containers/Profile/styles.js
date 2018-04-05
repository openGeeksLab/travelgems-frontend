const React = require("react-native");

const { StyleSheet, Dimensions, Platform } = React;

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

export default {
  content: {
    flex: 1,
  },
  imageContainer: {
    position: "absolute",
  },
  logoContainer: {
    flex: 1,
    marginTop: deviceHeight / 8,
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
  profileInfo: {
    height: deviceHeight / 3,
    width: deviceWidth,
    backgroundColor: "#041DB2",
    flexDirection:"column",
    alignItems: 'center',
    paddingTop: 10
  },
  profileImage: {
    height: 95,
    width: 95,
    borderWidth: 4,
    borderRadius: 100,
    borderColor: "#FFFFFF",
  },
  profileText: {
    color: "#FFFFFF",
    fontSize: 18,
    padding: 10,
    fontWeight: "bold",
  },
  profileButton: {
    backgroundColor: "#46DFE8",
    borderRadius: 2,
    width: 150,
    height: 30,
    padding: 5,
    elevation: 10,
    outlineProvider: 'bounds'
  },
  textButton: {
    color: "#FFFFFF",
    alignSelf: "center",
    fontSize: 14,
    fontWeight: "bold"
  },
  profileCategories: {
    width: deviceWidth,
    height: deviceHeight / 6,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'space-between',
    paddingLeft: 32,
    paddingRight: 32,
    paddingTop: 10
  },
  categoriesImageInfo: {
    flexDirection: "column",
    alignItems: "center",
  },
  categoriesImage: {
    width: 57,
    height: 57,
    borderRadius: 100,
  },
  categoriesText: {
    fontSize: 10,
    color: "#222222",
    opacity: 0.5,
  },
  title: {
    color: '#222222',
    textAlign: "left",
    fontSize: 24,
  },
  wishlist: {
    flexDirection: "column",
    paddingLeft: 32,
    paddingRight: 32,
    paddingTop: 10,
  },
  titleButton: {
    color: '#46DFE8',
    fontSize: 14,
    textAlign: "right"
  },
  horizontalScroll: {
    height: 150,
    width: deviceWidth
  },
  wishlistHeaders: {
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems: "center"
  }
};
