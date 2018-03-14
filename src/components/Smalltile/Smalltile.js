import React, { Component } from "react";
import {View,Image} from "react-native";
import { Tile } from "react-native-elements"
import { Container, Header, Content, Thumbnail, Text, Title } from 'native-base';
import styles from "./styles";
import Icon from 'react-native-vector-icons/Entypo';

class Smalltile extends Component {
	constructor(props) {
		super(props);
		this.state = {

		};
	}

	render() {
		return (
      <View style={{flex:1,height:200,padding:5}}>
        <Image
            style={{flex:1, height: undefined, width: undefined,padding:0,marginTop:5,borderRadius:5}}
           resizeMode="contain"
          source={{uri: this.props.img}}
        />
        <Title style={{padding:0,textAlign:"left",color:"black"}}>{this.props.title}</Title>
        <Text>{this.props.subtitle}</Text>
      </View>
		);
	}
}
Smalltile.defaultProps = {img: 'https://facebook.github.io/react-native/docs/assets/favicon.png'};
export default Smalltile;
