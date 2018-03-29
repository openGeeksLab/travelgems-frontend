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
};
