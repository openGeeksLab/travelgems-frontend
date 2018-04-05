

import { COLOR_TURQUOISE } from '../../constants/Styles';
const React = require("react-native");
const { StyleSheet, Dimensions, Platform } = React;
export default {
    container: {
        flex: 1,

    },
    headerStyle: {
        backgroundColor: '#041DB2',
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height / 5.7,
        justifyContent: 'center',
        alignItems: 'center',

    },
    headerInnerView: {
        width: Dimensions.get("window").width,
        flexDirection: 'row'
    },
    headerInnerViewText: {
        marginLeft: Dimensions.get("window").width / 10,
        fontSize: 24,
        color: '#ffffff',
        fonntWeight: 'bold'
    },
    headerInnerViewText1: {
        fontSize: 14,
        marginLeft: Dimensions.get("window").width / 30,
        marginTop: 10,
        fonntWeight: 'bold',
        color: 'rgba(21, 171, 194, 1)',


    },
    listParentView: {

        paddingLeft: 20,
        marginTop: 30,
        //justifyContent:'center',
        alignItems: 'center',
        width: Dimensions.get("window").width / .95,
        height: Dimensions.get("window").height / 7,
        flexDirection: 'row'

    },
    listChildView: {
        justifyContent: 'flex-start',
        width: 50,



    },
    listChildView1: {
        width: 150,
        flexDirection: 'column',
        marginLeft: Dimensions.get("window").width / 10,
    },
    listChildView2: {

        marginLeft: Dimensions.get("window").width / 6,

    },
    CalendarView: {

        width: Dimensions.get("window").width,
        backgroundColor: 'red',
        height: 250


    },
    daysView: {
        alignItems: 'center',
        paddingLeft: 20,
        height: 30,

        flexDirection: 'row',

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


