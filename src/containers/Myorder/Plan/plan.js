import Config from 'react-native-config';
import React, { Component } from 'react';
import {
  Image,
  View,
  ListView,
  StatusBar,
  Linking,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { List, ListItem, Avatar, Icon } from 'react-native-elements';
import { Container, H3, Text, Title, Body, Left, Right } from 'native-base';
import { Header, Button } from 'react-native-elements';
import styles from './styles';
import IconFeather from 'react-native-vector-icons/Feather';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import GridView from "react-native-easy-grid-view";
const ListData = [
  {
     image: require('../../../assets/images/water-nature.jpg'),
    title: 'Spetses',
    subtitle: 'Beach',
  },
  {
     image: require('../../../assets/images/water-nature.jpg'),
    title: 'Jeep Safari ',
    subtitle: 'Greece',
  },
  {
     image: require('../../../assets/images/water-nature.jpg'),
    title: 'Kos',
    subtitle: 'Greece',
  },

  {
    image: require('../../../assets/images/water-nature.jpg'),
    title: 'Kos',
    subtitle: 'Greece',
  },
  {
     image: require('../../../assets/images/water-nature.jpg'),
    title: 'Kos',
    subtitle: 'Greece',
  },
  {
    image: require('../../../assets/images/water-nature.jpg'),
    title: 'Kos',
    subtitle: 'Greece',
  },
  {
    image: require('../../../assets/images/water-nature.jpg'),
   title: 'Jeep Safari ',
   subtitle: 'Greece',
 },
 {
    image: require('../../../assets/images/water-nature.jpg'),
   title: 'Kos',
   subtitle: 'Greece',
 },

 {
   image: require('../../../assets/images/water-nature.jpg'),
   title: 'Kos',
   subtitle: 'Greece',
 },
 {
    image: require('../../../assets/images/water-nature.jpg'),
   title: 'Kos',
   subtitle: 'Greece',
 },
 {
   image: require('../../../assets/images/water-nature.jpg'),
   title: 'Kos',
   subtitle: 'Greece',
 },
];


class Plan extends Component {
  constructor(props) {
    super(props);
    var ds = new GridView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      status: undefined,
      isLoading: false,
      dataSource: ds.cloneWithCells(
        ListData, 2),
      cellWidth: 8,
      cellHeight: 8,
    }
  }
  static navigationOptions = {

    tabBarLabel: 'Tailor Made Plans',
  };

  _renderCell(cell) {
    return <View onLayout={event => {
      var width = event.nativeEvent.layout.width;
      if (this.state.cellWidth != width) {
        this.setState({ cellWidth: width })
      }
      if (this.state.cellHeight != width) {
        this.setState({ cellHeight: width })
      }
    }}>
      <View >
        {/* resizeMode={Image.resizeMode.stretch} source={cell.image}> */}
        < Image style={styles.image}
          source={cell.image}>
        </Image>
        <View style={styles.GridTextView}>
          <Text style={styles.TextGrid}>{cell.title}</Text>
          <Text style={styles.TextGrid1}>{cell.subtitle}</Text>
        </View>
      </View>
    </View>
  }
  render() {
    return (
     
        <View style={styles.container}>
        {/* <ScrollView>
          <View style={{ marginTop: 10 }}> */}
            <GridView dataSource={this.state.dataSource}
              spacing={5}
              style={styles.GridStyle}
              renderCell={this._renderCell.bind(this)}

            />

          </View>
        //   </ScrollView>
        // </View>
  

    );
  }
}
export default Plan;
