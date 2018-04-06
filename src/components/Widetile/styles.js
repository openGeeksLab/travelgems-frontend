const React = require('react-native');

const { StyleSheet } = React;

export default StyleSheet.create({
  component: {
    flex: 1,
    height: 200,
    marginHorizontal: 25,
  },
  title: {
    padding: 0,
    textAlign: 'left',
    color: 'black',
  },
  subtitle: {
    color: 'gray',
    textAlign: 'left',
    width: '100%',
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
});
