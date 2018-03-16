import React, { Component } from 'react';
import {
  AppRegistry,
  Image
} from 'react-native';

const remote = 'https://www.olympicholidays.com/media/20570/fiskardo_kefalonia_greece.jpg?center=0.37948717948717947,0.51&mode=crop&quality=70&width=550&height=358&rnd=131302560700000000';

export default class Backgroundimage extends Component {
  render() {
    const resizeMode = 'cover';

    return (
        <Image
          style={{
            flex: 1,
            resizeMode,
          }}
          source={{ uri: remote }}
        />
    );
  }
}
