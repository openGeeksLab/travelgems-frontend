import { StyleSheet } from 'react-native';
const React = require("react-native");
const { Dimensions, Platform } = React;
export default StyleSheet.create({
    container: {
        marginTop:20,
        backgroundColor: '#fff',


    },
    ImageView: {
        //  backgroundColor: 'red',
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height / 2.5,

    },
    Image: {
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height / 2.5,
    },
    
    Arrowimage: {
        backgroundColor: 'transparent',
        position: 'absolute',
        top: 40,
        paddingLeft: 20,
    },
    ImageTextView: {
        backgroundColor: 'transparent',
        position: 'absolute',
        top: 185,
        paddingLeft: 35,


    },
    ImageText: {
        fontSize: 32,
        color: "#ffffff"
    },
    ImageText1: {
        fontSize: 14,
        color: "#ffffff",
        fontWeight: 'bold'
    },
    ChildViewText: {

        fontSize: 16,
        fontWeight: 'bold',
        color: '#222222'

    },
    ChildView1Text: {
        color: '#15ABC2',
        fontWeight: 'bold',
        fontSize: 24


    },
    ChildView1Text1: {
         fontSize: 16, 
        fontWeight: 'bold',
         color: '#222222',
          marginTop: 15 

    },
    parrentViewText: {
        width: Dimensions.get("window").width / 1.3,
        marginLeft: 35,
        marginTop: 15,



    }
});
