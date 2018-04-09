import { StyleSheet } from 'react-native';
const React = require("react-native");
const { Dimensions, Platform } = React;
export default StyleSheet.create({
    container: {

        backgroundColor: '#fff',
        marginTop: 20,

    },
    itemView: {
        flexDirection: 'column',
        marginTop: 20



    },
    listViewText: {
        color: '#222222'


    },
    image: {
        height: 150,
        width: 300,

    },
    listParentView: {


        marginTop: 30,
        //justifyContent: 'center',
        alignItems: 'center',



    },



});
