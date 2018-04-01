const React = require('react-native');

const { StyleSheet, Dimensions, Platform } = React;

const horizontalMargin = 0;
const sliderWidth = Dimensions.get('window').width;
const slideWidth = sliderWidth;
const itemWidth = slideWidth + horizontalMargin * 2;

export default {
  content: {
    flex: 1,
  },
  slide: {
    width: itemWidth,
    flex: 1,
    alignSelf: 'stretch',
    paddingHorizontal: horizontalMargin,
  },
  slideInnerContainer: {
    width: slideWidth,
    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor: 'gray',
    flex: 1,
  },
  imageButton: {
    width: slideWidth,
  },
  caroselContainer: {
    height: 400,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: '#FFFFFF',
  },
  paginationView: {
    backgroundColor: 'transparent',
    top: 200,
    height: 100,
    width: sliderWidth,
    position: 'absolute',
  },
  cardContainer: {
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    marginTop: 281,
    marginHorizontal: 23,
    padding: 17,
    elevation: 1,
    shadowOffset: { width: 0, height: 5 },
    shadowColor: 'black',
    shadowOpacity: 0.15,
  },
  mapView: {
    height: 245,
    backgroundColor: 'lightgray',
    alignSelf: 'stretch',
    marginVertical: 24,
  },
  tailorPLan: {
    flexDirection: 'row',
    marginTop: 24,
    borderTopColor: 'rgba(112, 112, 112, 0.2)',
    borderTopWidth: 1,
    justifyContent: 'space-between',
    paddingTop: 20,
  },
  getPlanView: {
    backgroundColor: '#46DFE8',
    paddingHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoRowTextContainer: {
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'space-between',
    borderBottomColor: 'rgba(112, 112, 112, 0.2)',
    borderBottomWidth: 1,
    marginLeft: 20,
  },
  bottomLineView: {
    marginHorizontal: 120,
    backgroundColor: '#F2F2F2',
    height: 1,
    marginVertical: 34,
  },
  columnContainer: {
    flexDirection: 'column',
    marginLeft: 28,
  },

  columnTravelContainer: {
    flexDirection: 'column',
    marginTop: 24,
    marginHorizontal: 28,
  },
  rowContainer: { flexDirection: 'row', alignSelf: 'stretch' },
  scrollView: { backgroundColor: '#FFFFFF' },
  infoRowContainer: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    marginTop: 16,
    alignItems: 'center',
  },
  rowViewContainer: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  cardText: {
    alignSelf: 'stretch',
    flex: 1,
    width: 200,
    height: 200,
  },
};
