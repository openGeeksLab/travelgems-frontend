import { StyleSheet } from 'react-native';
const React = require("react-native");
const { Dimensions, Platform } = React;
export default StyleSheet.create({
    container: {
backgroundColor:"white",
        flex: 1


    },

    HeaderView: {
        //backgroundColor: 'red',
        height: Dimensions.get("window").height,
        width: Dimensions.get("window").width,
        backgroundColor: '#041DB2',
       // justifyContent: 'space-between',

    },
    HeaderInner: {
        flexDirection: 'row',
        top: 45,
        justifyContent: 'space-between',
        width: Dimensions.get("window").width / 1.6,
        marginLeft: 20

    },
    tabView: {
        //     position: 'absolute',
        //     top: 90,
          width: Dimensions.get("window").width,
        //    height: Dimensions.get("window").height,
       backgroundColor:'#041DB2',
        marginBottom: 40,
        height: Dimensions.get("window").height,
        marginTop: 85,
        // marginLeft: 20,
        // marginRight: 20,




    },

    OrderText: {
        fontSize: 24,
        color: '#F2F2F2'

    },


});
