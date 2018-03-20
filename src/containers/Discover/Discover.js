import Config from 'react-native-config';
import React, { Component } from "react";
import { Image, View, StatusBar, Linking, TouchableOpacity,ScrollView } from "react-native";
import { List, ListItem, Avatar, Icon } from "react-native-elements"
import { Container, H3, Text, Title, Body, Left, Right } from "native-base";
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Header,Button } from "react-native-elements";
import styles from "./styles";
import { MaterialIcons } from 'react-native-vector-icons/MaterialIcons';

import Smalltile from '../../components/Smalltile/Smalltile';
import HorizontalScroll from '../../components/HorizontalScroll/HorizontalScroll';
const lines = [
  {
    id:1,
    items:[
      {id:1,img:'https://facebook.github.io/react-native/docs/assets/favicon.png',title:'Kefalonia','subtitle':'Greece','favorite':true},
      {id:2,img:'https://facebook.github.io/react-native/docs/assets/favicon.png',title:'Kos','subtitle':'Greece'}
    ]
  },
  {
    id:2,
    items:[
      {id:3,img:'https://facebook.github.io/react-native/docs/assets/favicon.png',title:'Kos','subtitle':'Greece'},
      {id:4,img:'https://facebook.github.io/react-native/docs/assets/favicon.png',title:'Kos','subtitle':'Greece'}
    ]
  },
  {
    id:3,
    items:[
      {id:5,img:'https://facebook.github.io/react-native/docs/assets/favicon.png',title:'Kos','subtitle':'Greece'},
      {id:6,img:'https://facebook.github.io/react-native/docs/assets/favicon.png',title:'Kos','subtitle':'Greece'}
    ]
  },
]
class Discover extends Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }
  static navigationOptions = {
    tabBarLabel:'Discover',
    tabBarIcon:({tintColor}) =>{
      return <Icon name='place' type='home' color='#fff' />
  }
  }
  render() {
    return (
      <Container>
        <Header
        leftComponent={<TouchableOpacity transparent onPress={() => this.props.navigation.navigate("DrawerOpen")}>
                      <Icon name="menu" color="#fff"/>
                    </TouchableOpacity>}
        centerComponent={<Title>travelgems</Title>}
        rightComponent={<Icon name='home' type='home' color='#fff' onPress={() => this.props.navigation.navigate("Home")} /> }
      />
      <HorizontalScroll />
      <ScrollView>
        {
          lines.map((line,i) =>(
              <View style={styles.gridRow} key={i}>
                {
                  line.items.map((item,j)=>(
                    <View style={styles.gridItem} key={item.id}>
                      <Smalltile title={item.title} subtitle={item.subtitle} img={item.img} favorite={item.favorite}/>
                    </View>
                  ))
                }
              </View>
          ))
        }
      </ScrollView>
      </Container>
    );
  }
}

export default Discover;
