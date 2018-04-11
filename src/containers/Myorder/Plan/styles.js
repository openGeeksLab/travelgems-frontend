import { StyleSheet } from 'react-native';
const React = require("react-native");
const { Dimensions, Platform } = React;
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        marginTop: 20

    },
    image: {

        height: 130,
        width: 160


    },

    GridTextView: {

        marginTop: 4,
        marginLeft: 5,


    },
    TextGrid: {

        fontSize: 20,
        color: "#222222"

    },
    TextGrid1: {

        fontSize: 13,
        color: "#A1A1A1",



    },
    GridStyle: {

        margin: 20,
        height: Dimensions.get("window").height,
        marginBottom: Platform.OS === 'android' ? 220 : 180,


    }

});
