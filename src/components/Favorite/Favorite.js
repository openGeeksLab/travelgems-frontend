import React, { Component } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/Entypo';
import styles from './styles';

class Favorite extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favorite: this.props.favorite,
    };
  }
  render() {
    return (
      <TouchableOpacity
        style={[{ backgroundColor: 'transparent' }, this.props.style]}
        onPress={() => {
          this.setState((prevState, props) => ({
            favorite: !prevState.favorite,
          }));
        }}
      >
        {this.props.color === 'white' ? (
          this.state.favorite ? (
            <Icon style={styles.heart} name="heart" />
          ) : (
            <Icon style={styles.heart} name="heart-outlined" />
          )
        ) : this.state.favorite ? (
          <Icon style={styles.heartBlue} name="heart" />
        ) : (
          <Icon style={styles.heartBlue} name="heart-outlined" />
        )}
      </TouchableOpacity>
    );
  }
}
Favorite.defaultProps = { favorite: false, color: 'white' };
export default Favorite;
