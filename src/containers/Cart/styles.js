const React = require("react-native");

const { StyleSheet, Dimensions, Platform } = React;

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

export default {
  content: {
    flex: 1
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
  header: {
    height: deviceHeight / 4,
    width: deviceWidth,
    backgroundColor: "#041DB2",
    flexDirection:"column",
    alignItems: 'center',
    paddingTop: 10
  },
  headerText: {
    color: "#FFFFFF",
    fontSize: 20,
    paddingTop: 10
  },
  plans: {
    backgroundColor: "#FFFFFF",
    width: deviceWidth - 40,
    flexDirection:"column",
    marginLeft: 20
  },
  planChoices: {
    flexDirection:"row",
    paddingTop: 5,
    paddingBottom: 5,
  },
  planHeader: {
    color: "#000000",
    fontSize: 20,
  },
  planImage: {
    marginRight: 10
  },
  planHeaderTitle: {
    color: "#000000",
    fontSize: 14,
    fontWeight: "bold"
  },
  planHeaderSubtitle: {
    color: "#000000",
    fontSize: 12,
  },
  planHeaderAmount: {
    color: "#000000",
    fontSize: 16,
    fontWeight: "bold",
    position: "absolute",
    right: 50
  },
  planChoicesAmount: {
    width: deviceWidth - 40,
    height: 50,
    backgroundColor: "#000000",
    flexDirection:"row",
    justifyContent: 'space-between',
    alignItems: "center",
    marginLeft: 20
  },
  planChoicesAmountTitle: {
    color: "#FFFFFF",
    fontSize: 14,
    marginLeft: 40
  },
  planChoicesAmountSubtitle: {
    color: "#FFFFFF",
    fontSize: 18,
    marginRight: 40
  },
  planChoicesPromoCode: {
    backgroundColor: "#FFFFFF",
    width: deviceWidth - 40,
    height: 50,
    flexDirection:"row",
    justifyContent: 'center',
    alignItems: "center",
    marginLeft: 20
  },
  planChoicesPromoCodeTitle: {
    color: "#46DFE8",
    fontSize: 14,
  },
  pay: {
    width: deviceWidth - 40,
    flexDirection:"row",
    justifyContent: 'space-between',
    alignItems: "center",
    marginLeft: 20,
    height: 50,
  },
  payTitle: {
    fontSize: 12,
    color: "#222222",
    marginLeft: 20,
  },
  payButton: {
    backgroundColor: "#46DFE8",
    borderRadius: 2,
    width: 60,
    height: 30,
    padding: 5,
    elevation: 10,
    outlineProvider: 'bounds',
    marginRight: 20
  },
  payButtonText: {
    color: "#FFFFFF",
    alignSelf: "center",
    fontSize: 14,
    fontWeight: "bold"
  },
};
