import Config from 'react-native-config';
import React, { Component } from "react";
import { Image, View, StatusBar, Linking, TouchableOpacity } from "react-native";
import { List, ListItem, Avatar, Icon } from "react-native-elements"
import { Container, H3, Text, Title, Body, Left, Right } from "native-base";
import { Header, Button } from "react-native-elements";
import styles from "./styles";

class Cart extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  static navigationOptions = {
    tabBarLabel: 'Cart',
    tabBarIcon: ({ tintColor }) => (
      <Icon name='shopping-cart' type='home' color='#fff' />
    )
  }
  render() {
    return (
      <Container>

        <View style={styles.header}>
          <Text style={styles.headerText}>Cart</Text>
        </View>

        <View style={styles.plans}>
          <Text style={styles.planHeader}>Tailor Made Plans</Text>

          <View style={styles.planChoices}>
            <Image style={styles.planImage} source={require('D:/Πάνος/Android Studio Projects/REACT/Travelgems/src/assets/images/Mytravelgems/Rightarrowcircled.png')}></Image>
            <View style={styles.planHeader}>
              <Text style={styles.planHeaderTitle}>Kefalonia</Text>
              <Text style={styles.planHeaderSubtitle}>Greece</Text>
            </View>
            <Text style={styles.planHeaderAmount}>275 &#36;</Text>
          </View>
          <View style={styles.planChoices}>
            <Image style={styles.planImage} source={require('D:/Πάνος/Android Studio Projects/REACT/Travelgems/src/assets/images/Mytravelgems/Rightarrowcircled.png')}></Image>
            <View style={styles.planHeader}>
              <Text style={styles.planHeaderTitle}>Kos</Text>
              <Text style={styles.planHeaderSubtitle}>Greece</Text>
            </View>
            <Text style={styles.planHeaderAmount}>349 &#36;</Text>
          </View>

          <Text style={styles.planHeader}>Activities</Text>

          <View style={styles.planChoices}>
            <Image style={styles.planImage} source={require('D:/Πάνος/Android Studio Projects/REACT/Travelgems/src/assets/images/Mytravelgems/Rightarrowcircled.png')}></Image>
            <View style={styles.planHeader}>
              <Text style={styles.planHeaderTitle}>Jeep Safari</Text>
              <Text style={styles.planHeaderSubtitle}>Kefalonia</Text>
            </View>
            <Text style={styles.planHeaderAmount}>975 &#36;</Text>
          </View>
        </View>

        <View style={styles.planChoicesAmount}>
          <Text style={styles.planChoicesAmountTitle}>Total Amount</Text>
          <Text style={styles.planChoicesAmountSubtitle}>1983 &#36;</Text>
        </View>

        <View style={styles.planChoicesPromoCode}>
          <Text style={styles.planChoicesPromoCodeTitle}>Use Promo Code</Text>
        </View>

        <View style={styles.pay}>
          <Text style={styles.payTitle}>Your card will be charged &#36;1983</Text>
          <TouchableOpacity style={styles.payButton}>
            <Text style={styles.payButtonText}>PAY</Text>
          </TouchableOpacity>
        </View>

      </Container>
    );
  }
}

export default Cart;
