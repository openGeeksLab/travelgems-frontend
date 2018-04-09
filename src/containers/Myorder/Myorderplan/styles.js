import { StyleSheet } from 'react-native';
const React = require("react-native");
const { Dimensions, Platform } = React;
export default StyleSheet.create({
    container: {

        backgroundColor: '#fff',


    },
    ImageView: {
        //  backgroundColor: 'red',
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height / 3.6,
        backgroundColor: '#041DB2'

    },

    Arrowimage: {
        backgroundColor: 'transparent',
        width: Dimensions.get("window").width / 1.5,
        position: 'absolute',
        top: 50,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingLeft: 20,
    },
    OrderText:{
        fontSize:24,
        color:'#F2F2F2'

    },
    ImageTextView: {
        backgroundColor: 'transparent',
        position: 'absolute',
        top: 185,
        paddingLeft: 35,


    },
    tabView:{
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

});
