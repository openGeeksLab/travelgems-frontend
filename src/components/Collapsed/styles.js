import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    overflow: 'hidden',
    marginTop: 10,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    paddingBottom: 10,
  },
  title: {
    flex: 1,
    color: '#A1A1A1',
    fontWeight: 'normal',
  },
  moreText: {
    flex: 1,
    color: '#46DFE8',
    fontWeight: 'normal',
    fontSize: 14,
  },
  button: { flexDirection: 'row' },
});
