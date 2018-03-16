import { StyleSheet, Platform, Dimensions } from "react-native";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

export default {
  container   : {
      backgroundColor: '#fff',
      margin:10,
      overflow:'hidden'
  },
  titleContainer : {
      flexDirection: 'row'
  },
  title       : {
      flex    : 1,
      padding : 10,
      color   :'#2a2f43',
      fontWeight:'bold'
  },
  button      : {

  },
  buttonImage : {
      width   : 30,
      height  : 25
  },
  body        : {
      padding     : 10,
      paddingTop  : 0
  }
};
