import Config from 'react-native-config';
import React, { Component } from "react";
import { Image, View, StatusBar, Linking, TouchableOpacity,ScrollView } from "react-native";
import { Icon } from "react-native-elements"
import { Container, H3, Text, Title, Body, Left, Right,List, ListItem} from "native-base";
import { Header, Button } from "react-native-elements";
import Backgroundimage from '../../components/Backgroundimage/Backgroundimage';
import styles from "./styles";
import Widetile from '../../components/Widetile/Widetile';

const gridImage = 'https://www.olympicholidays.com/media/20570/fiskardo_kefalonia_greece.jpg?center=0.37948717948717947,0.51&mode=crop&quality=70&width=550&height=358&rnd=131302560700000000';

class Activities extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  static navigationOptions = {
    tabBarLabel: 'Activities',
    tabBarIcon: ({ tintColor }) => (
      <Icon name='flash-on' type='home' color='#fff' />
    )
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
      <ScrollView style={{}}>
        <List>
          <ListItem style={{margin:0,padding:0,marginLeft:0,paddingLeft:15,paddingRight:15,borderBottomWidth:0}}>
            <Widetile title="title" subtitle="subtitle" img="https://www.olympicholidays.com/media/20570/fiskardo_kefalonia_greece.jpg?center=0.37948717948717947,0.51&mode=crop&quality=70&width=550&height=358&rnd=131302560700000000"/>
          </ListItem>
          <ListItem style={{margin:0,padding:0,marginLeft:0,paddingLeft:15,paddingRight:15,borderBottomWidth:0}}>
            <Widetile title="title" subtitle="subtitle" img="https://www.olympicholidays.com/media/20570/fiskardo_kefalonia_greece.jpg?center=0.37948717948717947,0.51&mode=crop&quality=70&width=550&height=358&rnd=131302560700000000"/>
          </ListItem>
        </List>
      </ScrollView>
      </Container>
    );
  }
}

export default Activities;
