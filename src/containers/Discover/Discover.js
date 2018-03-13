import WarplyMobileSDK from '../../services/WarplyMobileSDK';
import Config from 'react-native-config';
import React, { Component } from "react";
import { Image, View, StatusBar, Linking, TouchableOpacity } from "react-native";
import { List, ListItem, Avatar, Icon } from "react-native-elements"
import { Container, H3, Text, Title, Body, Left, Right } from "native-base";
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Header,Button } from "react-native-elements";
import styles from "./styles";
import ParallaxScroll from '@monterosa/react-native-parallax-scroll';

import Smalltile from '../../components/Smalltile/Smalltile'
class Discover extends Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }
  static navigationOptions = {
    tabBarLabel:'Discover',
    tabBarIcon:({tintColor}) =>(
      <Icon name='home' type='home' color='#fff' />
    )
  }
  render() {
    return (
      <Container>
        <Grid>
          <Row>
            <Col><Smalltile title='Kos' subtitle='Greece' img='https://facebook.github.io/react-native/docs/assets/favicon.png'/></Col>
            <Col><Smalltile title='Zakynthos' subtitle='Greece '/></Col>
          </Row>
          <Row>
            <Col><Smalltile title='Crete' subtitle='Greece'/></Col>
            <Col><Smalltile title='Meteora' subtitle='Greece'/></Col>
          </Row>
        </Grid>
      </Container>
    );
  }
}

export default Discover;
