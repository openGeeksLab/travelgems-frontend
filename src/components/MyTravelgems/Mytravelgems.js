import Config from 'react-native-config';
import React, { Component } from "react";
import { Image, View, ListView, StatusBar, Linking, TouchableOpacity } from "react-native";
import { List, ListItem, Avatar, Icon } from "react-native-elements"
import { Container, H3, Text, Title, Body, Left, Right } from "native-base";
import { Header, Button } from "react-native-elements";
import styles from "./styles";
import AgendaScreen from "./AgendaScreen";
import IconFeather from 'react-native-vector-icons/Feather';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
/*
This ListData array is used to show the static Listview data 
*/
const ListData = [
    {
        image: <IconMaterialCommunityIcons name="beach" size={40}
            style={{ marginTop: 8, color: '#000000' }}
        />,
        title: 'Beach',
        subtitle: "8 items"
    },
    {
        image: <IconMaterialCommunityIcons name="beach" size={40}
            style={{ marginTop: 8, color: '#000000' }}
        />,
        title: 'Helocopter',
        subtitle: "11 items"
    },
    {
        image: <IconMaterialCommunityIcons name="tower-beach" size={40}
            style={{ marginTop: 8, color: '#000000' }}
        />,
        title: 'Beach Bars & Cafe',
        subtitle: "12 items"
    },

    {
        image: <IconMaterialCommunityIcons name="beach" size={40}
            style={{ marginTop: 8, color: '#000000' }}
        />,
        title: 'Great Food',
        subtitle: "13 items"
    },
    {
        image: <IconMaterialCommunityIcons name="tower-beach" size={40}
            style={{ marginTop: 8, color: '#000000' }}
        />,
        title: 'Great Food',
        subtitle: "14 items"
    },
];
class Mytravelgems extends Component {
    constructor(props) {
        super(props)
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            dataSource: ds.cloneWithRows(ListData),
        };
    }

    _onText() {
        alert("Coming soon")

    }
    render() {
        return (
            <View style={styles.container}>
                <StatusBar barStyle="light-content" />
                <View style={styles.headerStyle}>
                    <View style={styles.headerInnerView}>
                        <TouchableOpacity onPress={this._onText}>
                            <IconFeather name="arrow-left" size={26}
                                style={{ paddingLeft: 20, marginTop: 5 }}
                                color="white" />
                        </TouchableOpacity>
                        <Text style={styles.headerInnerViewText}>Kefalonia</Text>
                        <Text style={styles.headerInnerViewText1}>TAILOR MADE PLAN</Text>
                    </View>



                </View>
                <AgendaScreen />
                <View style={styles.daysView}>
                    <IconEntypo name="dot-single" size={20}
                        style={{ marginTop: 3 }}
                        color="#FE1E9A" />
                    <Text style={{ color: '#222222', fontSize: 16 }}>3 Days</Text>
                </View>


                <ListView
                    //backgroundColor={'red'}
                    showsVerticalScrollIndicator={false}
                    //removeClippedSubViews={false}
                    vertical={true}
                    dataSource={this.state.dataSource}
                    // onEndReached={alert("S")}
                    renderRow={(rowData) =>
                        <View style={styles.listParentView}>
                            <View style={styles.listChildView}><Text>{rowData.image}</Text></View>
                            <View style={styles.listChildView1}><Text style={{ fontSize: 16, color: '#222222' }}>{rowData.title}</Text><Text style={{ fontSize: 14, color: '#A1A1A1' }}>{rowData.subtitle}</Text></View>
                            <View style={styles.listChildView2}><TouchableOpacity onPress={this._onText}>
                                <IconEntypo name="chevron-with-circle-right" size={30}
                                    style={{ marginTop: 5 }}
                                    color="rgba(70, 223, 232, 1)" />
                            </TouchableOpacity></View>
                        </View>
                    } />

            </View>

        );
    }
}

export default Mytravelgems;
