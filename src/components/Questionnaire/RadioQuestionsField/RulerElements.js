import React, { Component } from 'react';
import { View } from 'react-native';
import styles from './styles';

class RulerElements extends Component {
  OnePart = () => (
    <View style={styles.rulerContainer}>
      <View style={styles.rulerElementLong} />
      <View style={[styles.rulerElementShort, { marginRight: 8 }]} />
      <View style={[styles.rulerElementShort, { marginRight: 5 }]} />
    </View>
  );

  render() {
    return (
      <View style={styles.rulerContainer}>
        {this.OnePart()}
        {this.OnePart()}
        {this.OnePart()}
        {this.OnePart()}
        {this.OnePart()}
        {this.OnePart()}
        {this.OnePart()}
        {this.OnePart()}
        <View style={[styles.rulerElementLong, { marginRight: 0 }]} />
      </View>
    );
  }
}

export default RulerElements;
