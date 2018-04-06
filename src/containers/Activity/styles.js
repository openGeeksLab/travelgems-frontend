const React = require('react-native');

const { StyleSheet, Dimensions, Platform } = React;

const deviceHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  content: {
    flex: 1,
  },
  imageContainer: {
    position: 'absolute',
  },
  logoContainer: {
    flex: 1,
    marginTop: Dimensions.get('window').height / 8,
    marginBottom: 30,
  },
  logo: {
    position: 'absolute',
    left: Platform.OS === 'android' ? 40 : 50,
    top: Platform.OS === 'android' ? 35 : 60,
    width: 280,
    height: 100,
  },
  text: {
    color: '#D8D8D8',
    bottom: 6,
    marginTop: 5,
  },
  imageText: {
    marginTop: 281,
    backgroundColor: 'transparent',
  },
  imageTitle: {
    fontSize: 28,
    marginHorizontal: 30,
  },
  imageSubtitle: {
    fontSize: 12,
    marginLeft: 30,
    opacity: 0.5,
  },
  gridRow: {
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: 30,
  },
  gridItem: {
    flex: 1 / 3,
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
    textAlign: 'center',
    alignSelf: 'center',
  },
  infoViewTitle: {
    fontSize: 24,
  },
  getPlanView: {
    backgroundColor: '#46DFE8',
    marginRight: 30,
    paddingHorizontal: 10,
    alignItems: 'center',
    height: 37,
    borderRadius: 3,
    justifyContent: 'center',
  },
  bottomLineView: {
    marginHorizontal: 120,
    backgroundColor: '#F2F2F2',
    height: 1,
    marginVertical: 34,
  },
});
