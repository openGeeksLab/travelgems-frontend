import Config from 'react-native-config';
import React, { Component } from "react";
import { Image, View, StatusBar, Linking, TouchableOpacity, ImageBackground, ScrollView } from "react-native";
import { List, ListItem, Avatar, Icon } from "react-native-elements"
import { Container, H3, Text, Title, Body, Left, Right } from "native-base";
import { Header, Button } from "react-native-elements";
import Backgroundimage from '../../components/Backgroundimage/Backgroundimage';
import { MaterialIcons } from 'react-native-vector-icons/MaterialIcons';
import styles from "./styles";

const gridImage = 'https://www.olympicholidays.com/media/20570/fiskardo_kefalonia_greece.jpg?center=0.37948717948717947,0.51&mode=crop&quality=70&width=550&height=358&rnd=131302560700000000';

class Activity extends Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }
  render() {
    return (
      <Container>
        <Header
        leftComponent={<TouchableOpacity transparent onPress={() => this.props.navigation.navigate("DrawerOpen")}>
                      <Icon name="menu" color="#fff"/>
                    </TouchableOpacity>}
        centerComponent={<Title>travelgems</Title>}
        rightComponent={<Icon name='home' type='home' color='#fff' onPress={() => this.props.navigation.navigate("Home")} /> }
      />
        <Backgroundimage/>
        <View style={styles.imageText}>
            <Text style={styles.imageTitle}>Jeep Safari in the{'\n'}National Park</Text>
            <Text style={styles.imageSubtitle}>Kefalonia</Text>
          </View>
        <ScrollView>
          <View>
            <View style={styles.gridRow}>
              <View style={styles.gridItem}>
                <Icon name="language" color="#15ABC2" />
                <Text style={styles.gridTitle}>TITLE</Text>
                <Text style={styles.gridSubtitle}>Subtitle</Text>
              </View>
              <View style={styles.gridItem}>
              <Icon name="language" color="#15ABC2" />
                <Text style={styles.gridTitle}>TITLE</Text>
                <Text style={styles.gridSubtitle}>Subtitle</Text>
              </View>
              <View style={styles.gridItem}>
                <Image source={{ uri: gridImage }} style={styles.gridImage}></Image>
                <Text style={styles.gridTitle}>TITLE</Text>
                <Text style={styles.gridSubtitle}>Subtitle</Text>
              </View>
            </View>
            <View style={styles.gridRow}>
              <View style={styles.gridItem}>
                <Image source={{ uri: gridImage }} style={styles.gridImage}></Image>
                <Text style={styles.gridTitle}>TITLE</Text>
                <Text style={styles.gridSubtitle}>Subtitle</Text>
              </View>
              <View style={styles.gridItem}>
                <Image source={{ uri: gridImage }} style={styles.gridImage}></Image>
                <Text style={styles.gridTitle}>TITLE</Text>
                <Text style={styles.gridSubtitle}>Subtitle</Text>
              </View>
              <View style={styles.gridItem}>
                <Image source={{ uri: gridImage }} style={styles.gridImage}></Image>
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

export default Activity;
