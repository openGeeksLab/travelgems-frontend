import React, { Component } from 'react';
import {AppRegistry, View, TouchableOpacity } from 'react-native';
import { Icon } from "react-native-elements"
import { MaterialIcons } from 'react-native-vector-icons/MaterialIcons';
import Favorite from '../../components/Favorite/Favorite';
import styles from "./styles";
import { withNavigation } from 'react-navigation';

class CustomHeader extends Component {
  render() {

    return (
      <View style={styles.customHeader}>
          <TouchableOpacity style={styles.headerIcon1}><Icon name="arrow-back" color="#FFFFFF"  onPress={() => this.props.navigation.goBack()} /></TouchableOpacity>
          <View style={styles.headerIcon2}><Icon name="launch" color="#FFFFFF" /></View>
          {/* <View style={styles.headerIcon3}><Icon name="favorite-border" color="#FFFFFF" /></View> */}
          <View style={styles.headerIcon3}><Favorite /></View>
        </View>
    );
  }
}
export default withNavigation(CustomHeader);