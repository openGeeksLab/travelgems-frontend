import React, { Component } from 'react';
import {AppRegistry, View } from 'react-native';
import { Icon } from "react-native-elements"
import { MaterialIcons } from 'react-native-vector-icons/MaterialIcons';
import Favorite from '../../components/Favorite/Favorite';
import styles from "./styles";

export default class CustomHeader extends Component {
  render() {

    return (
      <View style={styles.customHeader}>
          <View style={styles.headerIcon1}><Icon name="arrow-back" color="#FFFFFF" /></View>
          <View style={styles.headerIcon2}><Icon name="launch" color="#FFFFFF" /></View>
          {/* <View style={styles.headerIcon3}><Icon name="favorite-border" color="#FFFFFF" /></View> */}
          <View style={styles.headerIcon3}><Favorite /></View>
        </View>
    );
  }
}
