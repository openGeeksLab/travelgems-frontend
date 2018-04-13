import { StyleSheet } from 'react-native';
const React = require("react-native");
const { Dimensions, Platform } = React;
export default StyleSheet.create({

    container: {
        flex: 1,
    },
    map: {
        height: 200,
        width: 300,
        backgroundColor: 'lightgray',
        alignSelf: 'stretch',
        marginVertical: 24,

    },
    buttonContainer: {
        backgroundColor: '#FFBA35',
        paddingVertical: 10,
        borderRadius: 50,
        marginVertical: 5,
        marginHorizontal: 10
    },
    buttonText: {
        textAlign: 'center',
        color: '#000000',
        fontWeight: '700',
        fontSize: 20
    },

});


