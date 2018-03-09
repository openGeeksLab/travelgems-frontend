import React, { Component } from "react";
import { Image, View, StatusBar, Linking, TouchableOpacity } from "react-native";

import { Container, H3, Text, Title, Body, Left, Right } from "native-base";
import { Header, Icon,Button } from "react-native-elements";
import styles from "./styles";
const launchscreenBg = require("../../../assets/img/launchscreen-bg.png");
import { TabNavigator } from 'react-navigation';

class HomeScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel:'mytab1',
    tabBarIcon:({tintColor}) =>(
      <Icon name='home' type='home' color='#fff' />
    )
  }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
      </View>
    );
  }
}

class SettingsScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel:'mytab2'
  }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    );
  }
}


var TabPage = TabNavigator({
  Tab1:{screen: HomeScreen},
  Tab2:{screen: SettingsScreen}
  },
  {
    tabBarPosition: 'bottom',
    swipeEnabled: true,
    animationEnabled: true,
    tabBarOptions:{
      activeTintColor: 'white',
      activeBackgroundColor:'grey',
      inactiveTintColor:'black',
      labelStyle:{
        fontSize:16,
        padding:10
      }
    }
  }
);
TabPage.navigationOptions = {
  title: "tab example"
}
export default TabPage;
