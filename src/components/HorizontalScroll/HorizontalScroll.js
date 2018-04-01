import React, { Component } from 'react';
import { View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Tile } from 'react-native-elements';
import { Container, Header, Content, Thumbnail, Text, Title } from 'native-base';
import Smalltile from '../Smalltile/Smalltile';

const ItemView = ({ name, price }) => (
  <View style={{ width: 150, height: 150 }}>
    <Smalltile
      title={name}
      subtitle={price}
      img="https://www.olympicholidays.com/media/20570/fiskardo_kefalonia_greece.jpg?center=0.37948717948717947,0.51&mode=crop&quality=70&width=550&height=358&rnd=131302560700000000"
    />
  </View>
);

const HorizontalScroll = ({ activities, title, containerStyle }) => (
  <View style={[{ margin: 15 }, containerStyle]}>
    <Title style={{ color: 'black', textAlign: 'left' }}>Activities in {title}</Title>
    <ScrollView horizontal style={{ height: 150 }}>
      {activities && activities.map(item => <ItemView {...item} key={item.id} />)}
    </ScrollView>
  </View>
);

export default HorizontalScroll;
