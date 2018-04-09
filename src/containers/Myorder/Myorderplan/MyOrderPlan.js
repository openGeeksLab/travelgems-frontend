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
//import MyOrderTab from '../../Component/MyOrderTab/MyOrderTab';

class MyOrderPlan extends Component {
  constructor(props) {
    super(props);
  }
  static navigationOptions = {
    tabBarLabel: 'Orders',
    tabBarIcon: ({ tintColor }) => (
      <Icon name="favorite" type="home" color="#fff" />
    ),
  };
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <StatusBar barStyle="light-content" />
          <View style={styles.ImageView} />
          <View style={styles.Arrowimage}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Mytravelgems')}
            >
              <Image
                style={{ height: 35, width: 35 }}
                source={require('src/assets/images/Myorder/burgermenu.png')}
                resizeMode="cover"
              />
            </TouchableOpacity>
            <Text style={styles.OrderText}>My Orders</Text>
          </View>
          {/* <MyOrderTab/> */}
        </View>
      </ScrollView>
    );
  }
}
export default MyOrderPlan;
