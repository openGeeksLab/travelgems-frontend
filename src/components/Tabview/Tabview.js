import React, { Component } from "react";
import { Image, View, StatusBar, Linking, TouchableOpacity } from "react-native";

import { Container, H3, Text, Title, Body, Left, Right } from "native-base";
import { Header, Icon,Button } from "react-native-elements";
import styles from "./styles";
const launchscreenBg = require("../../../assets/img/launchscreen-bg.png");
import { TabNavigator } from 'react-navigation';
import Discover from '../../containers/Discover/Discover';
import Activities from '../../containers/Activities/Activities'
import Orders from '../../containers/Orders/Orders';
import Profile from '../../containers/Profile/Profile';
import Cart from '../../containers/Cart/Cart';

var Tabview = TabNavigator({
  Tab1:{screen: Discover},
  Tab2:{screen: Activities},
  Tab3:{screen: Orders},
  Tab4:{screen: Profile},
  Tab5:{screen: Cart}
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
        paddingTop:10
      }
    }
  }
);
Tabview.navigationOptions = {
  title: "tab example"
}
export default Tabview;
