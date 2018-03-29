import React, { Component } from 'react';
import { View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Tile } from 'react-native-elements';
import { Container, Header, Content, Thumbnail, Text, Title } from 'native-base';
import styles from './styles';
import { withNavigation } from 'react-navigation';
import Smalltile from '../Smalltile/Smalltile';

class HorizontalScroll extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  onPressViewAll() {
    this.props.navigation.navigate('Activity', { name: this.props.title });
  }
  render() {
    return (
      <View style={[{ margin: 15 }, this.props.containerStyle]}>
        <Title style={{ color: 'black', textAlign: 'left' }}>Activities in Kefalonia</Title>
        <ScrollView horizontal style={{ height: 150 }}>
          <View style={{ width: 150, height: 150 }}>
            <Smalltile
              title="title"
              subtitle="subtitle"
              img="https://www.olympicholidays.com/media/20570/fiskardo_kefalonia_greece.jpg?center=0.37948717948717947,0.51&mode=crop&quality=70&width=550&height=358&rnd=131302560700000000"
            />
          </View>
          <View style={{ width: 150, height: 150 }}>
            <Smalltile
              title="title"
              subtitle="subtitle"
              img="https://www.olympicholidays.com/media/20570/fiskardo_kefalonia_greece.jpg?center=0.37948717948717947,0.51&mode=crop&quality=70&width=550&height=358&rnd=131302560700000000"
            />
          </View>
          <View style={{ width: 150, height: 150 }}>
            <Smalltile
              title="title"
              subtitle="subtitle"
              img="https://www.olympicholidays.com/media/20570/fiskardo_kefalonia_greece.jpg?center=0.37948717948717947,0.51&mode=crop&quality=70&width=550&height=358&rnd=131302560700000000"
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}
HorizontalScroll.defaultProps = {};
export default withNavigation(HorizontalScroll);
