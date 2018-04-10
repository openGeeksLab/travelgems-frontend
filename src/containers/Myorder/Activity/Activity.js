import Config from 'react-native-config';
import React, { Component } from 'react';
import {
    Image,
    View,
    ListView,
    StatusBar,
    Linking,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import { List, ListItem, Avatar, Icon } from 'react-native-elements';
import { Container, H3, Text, Title, Body, Left, Right } from 'native-base';
import { Header, Button } from 'react-native-elements';
import styles from './styles';
import IconFeather from 'react-native-vector-icons/Feather';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MyOrderTab from '../../../components/MyOrderTab/MyOrderTab';
const ListData = [
    {
        image: require('../../../assets/images/drawer-cover.png'),
        title: 'Bythisma',
        subtitle: 'Beach',
    },
    {
        image: require('../../../assets/images/drawer-cover.png'),
        title: 'Jeep Safari in the National....',
        subtitle: 'Restaurant',
    },
    {
        image: require('../../../assets/images/drawer-cover.png'),
        title: 'Jeep Safari in the National...',
        subtitle: 'Restaurant',
    },


];

class Activity extends Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2,
        });
        this.state = {
            dataSource: ds.cloneWithRows(ListData),
        };
    }
    static navigationOptions = {
        tabBarLabel: 'Activities',


    };
    render() {
        return (
            <ScrollView
                showsVerticalScrollIndicator={false}>
                <View style={styles.container}>
                    <ListView
                        showsVerticalScrollIndicator={false}
                        vertical={true}
                        dataSource={this.state.dataSource}
                        renderRow={rowData => (<View style={styles.listParentView}>
                            <View>
                                <Image style={styles.image}
                                    source={rowData.image}>
                                </Image>
                            </View>
                            <View style={styles.itemView}>
                                <Text style={styles.listViewText}>{rowData.title}</Text>
                                <Text>{rowData.title}</Text>
                            </View></View>
                        )} /></View>
            </ScrollView>
        );
    }
}
export default Activity;
