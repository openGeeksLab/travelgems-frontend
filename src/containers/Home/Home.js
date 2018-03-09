import WarplyMobileSDK from '../../services/WarplyMobileSDK';
import Config from 'react-native-config';
import React, { Component } from "react";
import { Image, View, StatusBar, Linking, TouchableOpacity } from "react-native";
import { List, ListItem, Avatar, Icon } from "react-native-elements"
import { Container, H3, Text, Title, Body, Left, Right } from "native-base";
import { Header,Button } from "react-native-elements";
import styles from "./styles";
import Tabview from "../../components/Tabview/Tabview"

const launchscreenBg = require("../../../assets/img/launchscreen-bg.png");
class Home extends Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <Container>
        <Header
        leftComponent={<TouchableOpacity transparent onPress={() => this.props.navigation.navigate("DrawerOpen")}>
                      <Icon name="menu" color="#fff"/>
                    </TouchableOpacity>}
        centerComponent={<Title>HomePage</Title>}
        rightComponent={<Icon name='home' type='home' color='#fff' onPress={() => this.props.navigation.navigate("DrawerOpen")} /> }
      />
      <Tabview />
      </Container>
    );
  }
}

export default Home;
