import React, { Component } from 'react';
import { Image } from 'react-native';
import { Content, Container } from 'native-base';
import { List, ListItem, Avatar, Icon } from 'react-native-elements';
import styles from './styles';

const drawerImage = require('src/assets/images/logo-kitchen-sink.png');

const datas = [
  {
    name: 'Home',
    route: 'Home',
    icon: 'home',
    bg: '#C5F442',
  },

  {
    name: 'Questionnaire',
    route: 'Questionnaire',
    icon: '',
    bg: '#00BFFF',
  },
  {
    name: 'TravelGems',
    route: 'Mytravelgems',
    icon: '',
    bg: '#00BFFF',
  },
];

const SideBar = ({ navigation }) => (
  <Container>
    <Content bounces={true} style={styles.container}>
      <List containerStyle={{ marginTop: 80 }}>
        {datas.map((data, i) => (
          <ListItem
            roundAvatar
            avatar={
              <Avatar
                small
                icon={{ name: data.icon, color: 'black' }}
                overlayContainerStyle={{ backgroundColor: 'transparent' }}
                activeOpacity={1}
                containerStyle={{}}
              />
            }
            key={i}
            title={data.name}
            onPress={() => navigation.navigate(data.route)}
          />
        ))}
      </List>
    </Content>
  </Container>
);

export default SideBar;
