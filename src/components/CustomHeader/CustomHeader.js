import React, { Component } from 'react';
import { AppRegistry, View, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { MaterialIcons } from 'react-native-vector-icons/MaterialIcons';
import Favorite from '../../components/Favorite/Favorite';
import styles from './styles';
import { withNavigation } from 'react-navigation';

const CustomHeader = ({ navigation }) => (
  <View style={styles.customHeader}>
    <TouchableOpacity style={styles.headerIcon1}>
      <Icon
        name="arrow-back"
        color="#FFFFFF"
        onPress={() => navigation.goBack()}
      />
    </TouchableOpacity>

    <View style={styles.headerIcon3}>
      <Icon name="launch" color="#FFFFFF" />
      <Favorite style={styles.headerIcon2} />
    </View>
  </View>
);

export default withNavigation(CustomHeader);
