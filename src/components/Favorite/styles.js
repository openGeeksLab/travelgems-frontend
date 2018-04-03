const React = require('react-native');

import { COLOR_TURQUOISE } from '../../constants/Styles';

const { StyleSheet } = React;

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  component: {
    flex: 1,
    height: 200,
    padding: 5,
  },
  title: {
    padding: 0,
    textAlign: 'left',
    color: 'black',
  },
  subtitle: {
    color: 'gray',
  },
  image: {
    flex: 1,
    height: undefined,
    width: undefined,
    padding: 0,
    marginTop: 5,
    borderRadius: 5,
  },
  heart: {
    fontSize: 23,
    color: 'white',
  },

  heartBlue: {
    fontSize: 23,
    color: COLOR_TURQUOISE,
  },
});
