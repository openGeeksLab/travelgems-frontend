const React = require('react-native');

const { StyleSheet } = React;

export default {
  container: {
    flex: 1,
  },
  component: {
    flex: 1,
    height: 200,
    marginRight: 10,
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
  },
  heart: {
    position: 'absolute',
    right: 15,
    top: 15,
  },
};
