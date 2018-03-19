import Config from 'react-native-config';
import React, { Component } from "react";
import { Image, View, StatusBar, Linking, TouchableOpacity,ScrollView } from "react-native";
import { List, ListItem, Text,Avatar, Icon } from "react-native-elements"
import { Container, H3,Title, Body, Left, Right } from "native-base";
import { Header,Button,Card } from "react-native-elements";
import Backgroundimage from '../../components/Backgroundimage/Backgroundimage';
import styles from "./styles";
import Collapsed from '../../components/Collapsed/Collapsed';

class Destination extends Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }
  render() {
    return (
      <Container>
        <ScrollView>
        <View style={{height:300}}>
            <Backgroundimage/>
        </View>
        <Card title={this.props.navigation.state.params.name}
          titleStyle ={{textAlign:"left",color:"black"}}
          style={{margin:0,position:"absolute",top:100}}
          >
          <View>
            <Text>Kefalonia’s natural charms (and turbulent past) have provided inspiration to wordsmiths from Lord Byron to Louis de Bernieres. The great Philhellene... Byron... stayed on the island for 4 months during the Greek War of Independence; his... sojourn is marked by a plaque at his favourite vantage point, inscribed with his quote: “If I am a poet, I owe it to the air of Greece.”</Text>
            <Collapsed title='lalalal'>
               <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
             </Collapsed>
          </View>
        </Card>
      </ScrollView>
      </Container>
    );
  }
}

export default Destination;
