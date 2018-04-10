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
import { withNavigation } from 'react-navigation';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MyOrderTab from '../../../components/MyOrderTab/MyOrderTab';

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
  _openDrawer() {
    const { navigate } = this.props.navigation;
    navigate('DrawerOpen');
    // navigation.navigate('DrawerOpen')
  }
  render() {
    return (
     
        <View style={styles.container}>
          <StatusBar barStyle="light-content" />
          <View style={styles.HeaderView}>

            <View style={styles.HeaderInner}>
              <TouchableOpacity
                onPress={() => this._openDrawer()}
              >
                <Image
                  style={{ height: 30, width: 30 }}
                  source={require('src/assets/images/Myorder/burgermenu.png')}
                  resizeMode="cover"
                />
              </TouchableOpacity>
              <Text style={styles.OrderText}>My Orders</Text>
            </View>
            <View style={styles.tabView}>
            
            <MyOrderTab />

          </View>

          </View>
          

          
        </View>
      
    );
  }
}
export default MyOrderPlan;
