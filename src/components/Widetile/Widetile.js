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
class Widetile extends Component {
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
          <Image
            style={styles.image}
            borderRadius={5}
            resizeMode="cover"
            source={{ uri: this.props.img }}
          />
        </TouchableOpacity>
        <Favorite style={styles.heart} favorite={this.props.favorite} />
        <Title style={styles.title}>{this.props.title}</Title>
        <Text style={styles.subtitle}>{this.props.subtitle}</Text>
      </View>
    );
  }
}
Widetile.defaultProps = {
  img: 'https://facebook.github.io/react-native/docs/assets/favicon.png',
};
export default withNavigation(Widetile);
