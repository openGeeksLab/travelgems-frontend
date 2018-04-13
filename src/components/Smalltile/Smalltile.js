import React, { Component } from 'react';
import { View, ImageBackground, TouchableOpacity } from 'react-native';

import { Text, Title } from 'native-base';
import styles from './styles';
import Icon from 'react-native-vector-icons/Entypo';
import Favorite from '../../components/Favorite/Favorite';

const Smalltile = ({
  titleStyle,
  favorite,
  img,
  subtitleStyle,
  subtitle,
  title,
  onPress,
}: Object) => (
  <View style={styles.component}>
    <TouchableOpacity style={styles.image} onPress={onPress}>
      <ImageBackground
        style={styles.image}
        borderRadius={3}
        resizeMode="cover"
        source={{ uri: img }}
      >
        <Favorite style={styles.heart} favorite={favorite} />
      </ImageBackground>
    </TouchableOpacity>

    <Title style={[styles.title, titleStyle]}>{title}</Title>
    <Text style={[styles.subtitle, subtitleStyle]}>{subtitle}</Text>
  </View>
);

Smalltile.defaultProps = {
  img: 'https://facebook.github.io/react-native/docs/assets/favicon.png',
};
export default Smalltile;
