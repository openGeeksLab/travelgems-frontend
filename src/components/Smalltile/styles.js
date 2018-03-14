const React = require("react-native");

const { StyleSheet } = React;

export default {
  container: {
    flex: 1,
  },
  component:{
    flex:1,
    height:200,
    padding:5
  },
  title:{
    padding:0,
    textAlign:"left",
    color:"black"
  },
  subtitle: {
    color: 'gray',
  },
  image:{
    flex:1,
    height: undefined,
    width: undefined,
    padding:0,
    marginTop:5,
    borderRadius:5
  },
  heart:{
    fontSize:23,
    color:"white",
    position:"absolute",
    right:10,
    top:10
  }
};
