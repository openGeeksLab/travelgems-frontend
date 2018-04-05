import Config from 'react-native-config';
import React, { Component } from "react";
import { Image, View, StatusBar, Linking, TouchableOpacity, ScrollView } from "react-native";
import { List, ListItem, Avatar, Icon } from "react-native-elements"
import { Container, H3, Text, Title, Body, Left, Right } from "native-base";
import { Header, Button } from "react-native-elements";
import styles from "./styles";
import HorizontalScroll from '../../components/HorizontalScroll/HorizontalScroll';
import Smalltile from '../../components/Smalltile/Smalltile';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { show } from 'redux-modal';

class Profile extends Component {
  constructor(props) {
    super(props)

    let favouriteDestinations = this.props.favouriteDestinations;
    let profileBadges = this.props.profileBadges;
    let profileInfo = this.props.profileInfo;
    let firstName = this.props.profileInfo["firstname"];
    let lastName = this.props.profileInfo["lastname"];
    let displayName = this.props.profileInfo["display_name"];
    let imageUrl = this.props.profileInfo["image_url"];
    // let imageUrl = 'http://via.placeholder.com/92x92';
    let profileImage;
    let fullName;

    if (imageUrl)
      profileImage = [{ uri: imageUrl }];
    else
      profileImage = require('../../assets/images/Profile/defaultProfilePhoto.png');

    if (!firstName && !lastName)
      fullName = displayName;
    else if (firstName && !lastName)
      fullName = firstName;
    else if (!firstName && lastName)
      fullName = lastName;
    else
      fullName = firstName + " " + lastName;

    this.state = {
      lines: [],
      favouriteDestinations: favouriteDestinations,
      profileBadges: profileBadges,
      profileInfo: [],
      fullName: fullName,
      profileImage: profileImage
    }
    // debugger;
  }
  static navigationOptions = {
    tabBarLabel: 'Profile',
    tabBarIcon: ({ tintColor }) => (
      <Icon name='person' type='home' color='#fff' />
    )
  }

  render() {
    return (
      <Container>
        <View style={styles.profileInfo}>
          <Image style={styles.profileImage} source={this.state.profileImage}></Image>
          <Text style={styles.profileText}>{this.state.fullName}</Text>
          <TouchableOpacity style={styles.profileButton}>
            <Text style={styles.textButton}>Edit Travel Profile</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.profileCategories}>
          {
            this.state.profileBadges.map((i) => (
              <View style={styles.categoriesImageInfo}>
                <Image style={styles.categoriesImage} source={{ uri: 'http://via.placeholder.com/57x57' }}></Image>
                <Text style={styles.categoriesText}>{i}</Text>
              </View>
            ))
          }
          {/* <View style={styles.categoriesImageInfo}>
            <Image style={styles.categoriesImage} source={{ uri: 'http://via.placeholder.com/57x57' }}></Image>
            <Text style={styles.categoriesText}>PUBLIC</Text>
            <Text style={styles.categoriesText}>TRANSPORTATION</Text>
          </View>
          <View style={styles.categoriesImageInfo}>
            <Image style={styles.categoriesImage} source={{ uri: 'http://via.placeholder.com/57x57' }}></Image>
            <Text style={styles.categoriesText}>CHRISTMAS</Text>
            <Text style={styles.categoriesText}>HOLIDAYS</Text>
          </View> */}
        </View>

        <View style={styles.wishlist}>
          <View style={styles.wishlistHeaders}>
            <Title style={styles.title}>Wishlist</Title>
            <Text style={styles.titleButton}>View All</Text>
          </View>
          <View>
            <ScrollView horizontal style={styles.horizontalScroll}>
              {
                this.state.favouriteDestinations.map((item, j) => (
                  <View style={{ width: 150, height: 150 }}>
                    <Smalltile title={item.name} subtitle={item.country} img={item.img_preview} />
                  </View>
                ))
              }
            </ScrollView>
          </View>
        </View>
      </Container>
    );
  }
}

// export default Profile;
export default connect(function (state) {
  return {
    favouriteDestinations: state.profile.favouriteDestinations,
    profileBadges: state.profile.profileBadges,
    profileInfo: state.profile.profileInfo
  }
},
  dispatch => bindActionCreators({ show }, dispatch))(Profile)
