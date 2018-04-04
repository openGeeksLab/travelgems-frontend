import React, { Component } from 'react';
import { View, ImageBackground, TouchableOpacity } from 'react-native';

import { Text, Title } from 'native-base';
import styles from './styles';
import Icon from 'react-native-vector-icons/Entypo';
import Favorite from '../../components/Favorite/Favorite';
import { withNavigation } from 'react-navigation';

class Smalltile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  onPress() {
    console.log('test');
    this.props.navigation.navigate('Destination', { name: this.props.title });
  }
  render() {
    return (
      <View style={styles.component}>
        <TouchableOpacity
          style={styles.image}
          onPress={() => {
            this.onPress();
          }}
        >
          <ImageBackground
            style={styles.image}
            borderRadius={2}
            resizeMode="contain"
            source={{ uri: this.props.img }}
          >
            <Favorite style={styles.heart} favorite={this.props.favorite} />
          </ImageBackground>
        </TouchableOpacity>

        <Title style={styles.title}>{this.props.title}</Title>
        <Text style={styles.subtitle}>{this.props.subtitle}</Text>
      </View>
    );
  }
}
Smalltile.defaultProps = {
  img: 'https://facebook.github.io/react-native/docs/assets/favicon.png',
};
export default withNavigation(Smalltile);
