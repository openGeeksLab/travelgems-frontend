import { StyleSheet } from 'react-native';
// import { platform } from 'os';
const React = require("react-native");
const { Dimensions, Platform } = React;
export default StyleSheet.create({
    container: {

        backgroundColor: '#fff',
        marginTop: 20,
        flex: 1

    },
    itemView: {
        flexDirection: 'column',
        marginTop: 20,
        marginLeft: 45
    },
    listViewText: {
        color: '#222222',
        fontSize: 13

    },
    listViewText1: {
        color: '#A1A1A1',
        fontSize: 13
    },
    imageView: {

        alignItems: 'center'

    },
    image: {
        height: 150,
        width: 300,
        borderRadius: 6,
    },
    listParentView: {

        marginTop: 30,
    },
    ListStyle: {
        height: Dimensions.get("window").height,
        marginBottom:Platform.OS === 'android' ? 220: 180,
    }



});
