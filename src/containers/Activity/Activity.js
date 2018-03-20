import Config from 'react-native-config';
import React, { Component } from "react";
import { Image, View, StatusBar, Linking, TouchableOpacity, ImageBackground, ScrollView } from "react-native";
import { List, ListItem, Avatar, Icon } from "react-native-elements"
import { Container, H3, Text, Title, Body, Left, Right } from "native-base";
import { Header, Button } from "react-native-elements";
import Backgroundimage from '../../components/Backgroundimage/Backgroundimage';
import { MaterialIcons } from 'react-native-vector-icons/MaterialIcons';
import styles from "./styles";

class Activity extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  render() {
    return (
      <Container>
        <View>
          <Icon name="keyboard-arrow-left" color="#FFFFFF" />
          <Icon name="schedule" color="#FFFFFF" />
          <Icon name="favorite-border" color="#FFFFFF" />
        </View>
        <Backgroundimage />
        <View style={styles.imageText}>
          <Text style={styles.imageTitle}>Jeep Safari in the{'\n'}National Park</Text>
          <Text style={styles.imageSubtitle}>Kefalonia</Text>
        </View>
        <ScrollView>
          <View>
            <View style={styles.gridRow}>
              <View style={styles.gridItem}>
                <Icon name="schedule" color="#15ABC2" />
                <Text style={styles.gridTitle}>TITLE</Text>
                <Text style={styles.gridSubtitle}>Subtitle</Text>
              </View>
              <View style={styles.gridItem}>
                <Icon name="language" color="#15ABC2" />
                <Text style={styles.gridTitle}>TITLE</Text>
                <Text style={styles.gridSubtitle}>Subtitle</Text>
              </View>
              <View style={styles.gridItem}>
                <Icon name="people" color="#15ABC2" />
                <Text style={styles.gridTitle}>TITLE</Text>
                <Text style={styles.gridSubtitle}>Subtitle</Text>
              </View>
            </View>
            <View style={styles.gridRow}>
              <View style={styles.gridItem}>
                <Icon name="directions-car" color="#15ABC2" />
                <Text style={styles.gridTitle}>TITLE</Text>
                <Text style={styles.gridSubtitle}>Subtitle</Text>
              </View>
              <View style={styles.gridItem}>
                <Icon name="done" color="#15ABC2" />
                <Text style={styles.gridTitle}>TITLE</Text>
                <Text style={styles.gridSubtitle}>Subtitle</Text>
              </View>
              <View style={styles.gridItem}>
                <Icon name="euro-symbol" color="#15ABC2" />
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
