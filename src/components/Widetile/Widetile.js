import React, { Component } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { Tile } from 'react-native-elements';
import {
  Container,
  Header,
  Content,
  Thumbnail,
  Text,
  Title,
} from 'native-base';
import styles from './styles';
import Icon from 'react-native-vector-icons/Entypo';
import Favorite from '../../components/Favorite/Favorite';
import { withNavigation } from 'react-navigation';
const Widetile = ({ favorite, img, title, subtitle, onPress }) => (
  <View style={styles.component}>
    <TouchableOpacity style={styles.image} onPress={onPress}>
      <Image
        style={styles.image}
        borderRadius={5}
        resizeMode="cover"
        source={{ uri: img }}
      />
    </TouchableOpacity>
    <Favorite style={styles.heart} favorite={favorite} />
    <Title style={styles.title}>{title}</Title>
    <Text style={styles.subtitle}>{subtitle}</Text>
  </View>
);
Widetile.defaultProps = {
  img: 'https://facebook.github.io/react-native/docs/assets/favicon.png',
};
export default Widetile;
