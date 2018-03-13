import WarplyMobileSDK from '../../services/WarplyMobileSDK';
import Config from 'react-native-config';
import React, { Component } from "react";
import { Image, View, StatusBar, Linking, TouchableOpacity,ScrollView } from "react-native";
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
        <ScrollView>
          <Grid>
            <Row>
              <Col style={{ width:"50%" }}><Smalltile title='Kos' subtitle='Greece' img='https://facebook.github.io/react-native/docs/assets/favicon.png'/></Col>
              {/* <Col style={{ width:"50%" }}><Smalltile title='Zakynthos' subtitle='Greece '/></Col> */}
              <Col style={{ width:"50%" }}><Smalltile title='Zakynthos2' subtitle='Greece '/></Col>
            </Row>
          </Grid>
        </ScrollView>
      </Container>
    );
  }
}

export default Discover;
