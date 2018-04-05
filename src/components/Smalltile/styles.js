const React = require('react-native');

const { StyleSheet } = React;

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  component: {
    width: 150,
    height: 200,
    marginRight: 16,
  },
  title: {
    marginTop: 18,
    textAlign: 'left',
    color: 'black',
  },
  subtitle: {
    color: 'gray',
  },
  image: {
    height: 120,
    width: 150,
    overflow: 'hidden',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  heart: {
    marginRight: 9,
    marginTop: 9,
  },
});
