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

class Plan extends Component {
  constructor(props) {
    super(props);
  }
  static navigationOptions = {
 
    tabBarLabel: 'Tailor Made Plans',
  };
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
        <Text> Plan</Text>
        </View>
      </ScrollView>
    );
  }
}
export default Plan;
