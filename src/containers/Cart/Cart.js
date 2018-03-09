import WarplyMobileSDK from '../../services/WarplyMobileSDK';
import Config from 'react-native-config';
import React, { Component } from "react";
import { Image, View, StatusBar, Linking, TouchableOpacity } from "react-native";
import { List, ListItem, Avatar, Icon } from "react-native-elements"
import { Container, H3, Text, Title, Body, Left, Right } from "native-base";
import { Header,Button } from "react-native-elements";
import styles from "./styles";

class Cart extends Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }
  static navigationOptions = {
    tabBarLabel:'Cart',
    tabBarIcon:({tintColor}) =>(
      <Icon name='home' type='home' color='#fff' />
    )
  }
  render() {
    return (
      <Container>
            <Text>Cart!</Text>
      </Container>
    );
  }
}

export default Cart;
