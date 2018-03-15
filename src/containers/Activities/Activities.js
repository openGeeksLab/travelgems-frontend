import WarplyMobileSDK from '../../services/WarplyMobileSDK';
import Config from 'react-native-config';
import React, { Component } from "react";
import { Image, View, StatusBar, Linking, TouchableOpacity, ImageBackground, ScrollView } from "react-native";
import { List, ListItem, Avatar, Icon } from "react-native-elements"
import { Container, H3, Text, Title, Body, Left, Right } from "native-base";
import { Header, Button } from "react-native-elements";
import styles from "./styles";

class Activities extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  static navigationOptions = {
    tabBarLabel: 'Activities',
    tabBarIcon: ({ tintColor }) => (
      <Icon name='home' type='home' color='#fff' />
    )
  }
  render() {
    return (
      <Container>
        <ImageBackground source={{ uri: 'https://via.placeholder.com/410x300' }}
          style={styles.imageBackground} >
          <View style={styles.imageText}>
            <Text style={styles.imageTitle}>Jeep Safari in the{'\n'}National Park</Text>
            <Text style={styles.imageSubtitle}>Kefalonia</Text>
          </View>
        </ImageBackground>
        <ScrollView>
          <View>
            <View style={styles.gridRow}>
              <View style={styles.gridItem}>
                <Image source={{ uri: 'https://via.placeholder.com/31x31' }} style={styles.gridImage}></Image>
                <Text style={styles.gridTitle}>TITLE</Text>
                <Text style={styles.gridSubtitle}>Subtitle</Text>
              </View>
              <View style={styles.gridItem}>
                <Image source={{ uri: 'https://via.placeholder.com/31x31' }} style={styles.gridImage}></Image>
                <Text style={styles.gridTitle}>TITLE</Text>
                <Text style={styles.gridSubtitle}>Subtitle</Text>
              </View>
              <View style={styles.gridItem}>
                <Image source={{ uri: 'https://via.placeholder.com/31x31' }} style={styles.gridImage}></Image>
                <Text style={styles.gridTitle}>TITLE</Text>
                <Text style={styles.gridSubtitle}>Subtitle</Text>
              </View>
            </View>
            <View style={styles.gridRow}>
              <View style={styles.gridItem}>
                <Image source={{ uri: 'https://via.placeholder.com/31x31' }} style={styles.gridImage}></Image>
                <Text style={styles.gridTitle}>TITLE</Text>
                <Text style={styles.gridSubtitle}>Subtitle</Text>
              </View>
              <View style={styles.gridItem}>
                <Image source={{ uri: 'https://via.placeholder.com/31x31' }} style={styles.gridImage}></Image>
                <Text style={styles.gridTitle}>TITLE</Text>
                <Text style={styles.gridSubtitle}>Subtitle</Text>
              </View>
              <View style={styles.gridItem}>
                <Image source={{ uri: 'https://via.placeholder.com/31x31' }} style={styles.gridImage}></Image>
                <Text style={styles.gridTitle}>TITLE</Text>
                <Text style={styles.gridSubtitle}>Subtitle</Text>
              </View>
            </View>
          </View>

          <View>
            <Text style={styles.infoViewTitle}>Info</Text>
          </View>
        </ScrollView>
      </Container>
    );
  }
}

export default Activities;
