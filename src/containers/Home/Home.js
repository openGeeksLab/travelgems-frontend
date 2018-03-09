import WarplyMobileSDK from '../../services/WarplyMobileSDK';
import Config from 'react-native-config';
import React, { Component } from "react";
import { Image, View, StatusBar, Linking, TouchableOpacity } from "react-native";
import { List, ListItem, Avatar, Icon } from "react-native-elements"
import { Container, H3, Text, Title, Body, Left, Right } from "native-base";
import { Header,Button } from "react-native-elements";
import styles from "./styles";

const launchscreenBg = require("../../../assets/img/launchscreen-bg.png");
class Home extends Component {
  mobileApi = {};
  tryEndpoint (apiEndpoint) {
    console.log('home');
    const { label, endpoint, args = [''] } = apiEndpoint
    this.mobileApi.postContext({"offers":{"action":"get_inbox"}}).then(result=>{
      offers = result.data.context.MAPP_OFFER
      this.setState({offers:offers})
    })
  }
  constructor (props) {
    super(props)
    this.state = {
      offers:[]
    }

    this.mobileApi = WarplyMobileSDK.create();
    this.mobileApi.register().then((response) => {
      if (response.status==200 && response.ok && response.hasOwnProperty('data') && response.data.hasOwnProperty('context')){
        console.log('registered OK');
        this.mobileApi.setWebId(response.data.context.web_id);
        this.mobileApi.setApiKey(response.data.context.api_key)
        // web_id = response.data.context.web_id;
        this.tryEndpoint('');
      }
    })

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
      <List containerStyle={{marginTop:80}}>
        {
          this.state.offers.map((data, i) => (
             <ListItem
               roundAvatar
               avatar={<Avatar
                  small
                  source={{uri: data.logo_url}}
                  overlayContainerStyle={{backgroundColor: 'transparent'}}
                  activeOpacity={1}
                  containerStyle={{}}
                />}
               key={i}
               title={data.title}
               subtitle = {data.subtitle}
               onPress={() => this.props.navigation.navigate("Webview",{url:data.index_url})}
             />
           ))
        }
      </List>
      </Container>
    );
  }
}

export default Home;
