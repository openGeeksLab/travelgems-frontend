import { StyleSheet } from 'react-native';
const React = require("react-native");
const { Dimensions, Platform } = React;
export default StyleSheet.create({
    container: {

        backgroundColor: '#fff',


    },
    HeaderView: {
        //  backgroundColor: 'red',

        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height / 3.6,
        backgroundColor: '#041DB2',
        justifyContent: 'space-between',

    },
    HeaderInner: {
        flexDirection: 'row',
        top: 60,
        justifyContent: 'space-between',
        width: Dimensions.get("window").width / 1.6,
        marginLeft: 20

    },
    tabView: {
        marginBottom: 40,
        height: Dimensions.get("window").height,
        marginTop: 90,
        marginLeft: 20,
        marginRight: 20,




    },

    OrderText: {
        fontSize: 24,
        color: '#F2F2F2'

    },


});
