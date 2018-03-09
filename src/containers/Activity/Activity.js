import WarplyMobileSDK from '../../services/WarplyMobileSDK';
import Config from 'react-native-config';
import React, { Component } from "react";
import { Image, View, StatusBar, Linking, TouchableOpacity } from "react-native";
import { List, ListItem, Avatar, Icon } from "react-native-elements"
import { Container, H3, Text, Title, Body, Left, Right } from "native-base";
import { Header,Button } from "react-native-elements";
import styles from "./styles";

class Activity extends Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }
  render() {
    return (
      <Container>
            <Text>Activity!</Text>
      </Container>
    );
  }
}

export default Activity;
