import Config from 'react-native-config';
import React, { Component } from "react";
import { Image, View, ListView, StatusBar, Linking, TouchableOpacity, ScrollView } from "react-native";
import { List, ListItem, Avatar, Icon } from "react-native-elements"
import { Container, H3, Text, Title, Body, Left, Right } from "native-base";
import { Header, Button } from "react-native-elements";
import styles from "./styles";
import IconFeather from 'react-native-vector-icons/Feather';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


class DayPlan extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <StatusBar barStyle="light-content" />
                    <View style={styles.ImageView}><Image
                        style={styles.Image}
                        source={require('/Volumes/DATA/TravelGemsCode/travelgems/src/assets/images/water-nature.jpg')}
                        resizeMode='cover'/>
                        </View><View style={styles.Arrowimage}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Mytravelgems')}>
                            <Image
                                style={{ height: 35, width: 35 }}
                                source={require('/Volumes/DATA/TravelGemsCode/travelgems/src/assets/images/DayPlan/Backiconwhite.png')}
                                resizeMode='cover' />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.ImageTextView}>
                        <Text style={styles.ImageText}>Bythisma</Text>
                        <Text style={styles.ImageText1}>Beach</Text>
                    </View>

                    <View style={styles.parrentViewText}>
                        <View>
                            <Text style={styles.ChildViewText}>BYTHISMA is moderately accessible through a rough mud road.
                            Be prepared for a shingle beach . Waters are relatively shallow ideal for all types of swimmers.It is relatively windy especially during August.</Text>
                        </View>
                        <View style={{ marginTop: 20, justifyContent: 'space-between' }}>
                            <Text style={styles.ChildView1Text}>Size & Crowd</Text>
                            <Text style={styles.ChildView1Text1}>With respect to its size it is a moderately large beach up to 600m long.Crowd includes mainly young people without children.</Text></View>
                        <View style={{ marginTop: 20, justifyContent: 'space-between' }}>
                            <Text style={styles.ChildView1Text}>At the Beach</Text>
                            <Text style={styles.ChildView1Text1}>With respect to its size it is a moderately large beach up to 600m long.Crowd includes mainly young people without children.How about sunbeds? None at all.As far as water sports are concerned there are none available. Changing rooms? Unfortunately no.
                         Showers are not available. Moderate access for people with disabilities. There is no lifeguard present. No accessible toilets.
                         As far as children are concerned this beach is not at all child friendly.</Text>

                        </View>
                    </View>
                </View>
            </ScrollView>
        )
    }
}
export default DayPlan;
