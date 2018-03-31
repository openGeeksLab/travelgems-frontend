import Config from 'react-native-config';
import React, { Component } from "react";
import { Image, View, StatusBar, Linking, TouchableOpacity,ScrollView } from "react-native";
import { List, ListItem, Avatar, Icon } from "react-native-elements"
import { Container, H3, Text, Title, Body, Left, Right } from "native-base";
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Header,Button } from "react-native-elements";
import styles from "./styles";
import { MaterialIcons } from 'react-native-vector-icons/MaterialIcons';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { show } from 'redux-modal';
import Smalltile from '../../components/Smalltile/Smalltile';
import HorizontalScroll from '../../components/HorizontalScroll/HorizontalScroll';

class Discover extends Component {
  constructor (props) {
    super(props)
    let self = this;

    let destinations = this.props.destinations;
    this.state = {
      lines:[],
      destinations:destinations
    }
  }
  static navigationOptions = {
    tabBarLabel:'Discover',
    tabBarIcon:({tintColor}) =>{
      return <Icon name='place' type='home' color='#fff' />
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
      <HorizontalScroll />
      <ScrollView>
        <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}>
          {
            this.state.destinations.map((item,j)=>(
              <View style={{width:"50%",height:170,padding:5}} key={item.id}>
                <Smalltile title={item.name} subtitle={item.subtitle} img={item.img} favorite={item.favorite}/>
              </View>
            ))
          }
        </View>
      </ScrollView>
      </Container>
    );
  }
}
// export default Discover;
export default connect(function(state){return {destinations:state.content.destinationsArray}}, dispatch => bindActionCreators({ show }, dispatch))(Discover)
