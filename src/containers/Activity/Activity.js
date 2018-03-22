import Config from 'react-native-config';
import React, { Component } from "react";
import { Image, View, StatusBar, Linking, TouchableOpacity, ImageBackground, ScrollView } from "react-native";
import { List, ListItem, Avatar, Icon } from "react-native-elements"
import { Container, H3, Text, Title, Body, Left, Right } from "native-base";
import { Header, Button } from "react-native-elements";
import Backgroundimage from '../../components/Backgroundimage/Backgroundimage';
import CustomHeader from '../../components/CustomHeader/CustomHeader';
import Collapsed from '../../components/Collapsed/Collapsed';
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
      <Container style={{backgroundColor: 'white'}}>
        <Backgroundimage />
        <CustomHeader />
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
            <Collapsed title='At a glance'>
            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</Text>
             </Collapsed>
            <Collapsed title='Itenerary'>
            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</Text>
             </Collapsed>
            <Collapsed title='Cancellation'>
            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</Text>
             </Collapsed>
            <Collapsed title='Important info'>
            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</Text>
             </Collapsed>
            <Collapsed title='Handy details'>
            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</Text>
             </Collapsed>
          </View>
        </ScrollView>
      </Container>
    );
  }
}

export default Activity;
