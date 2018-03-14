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
      <View style={styles.component}>
        <Image
            style={styles.image}
           resizeMode="contain"
          source={{uri: this.props.img}}
        />
				<Icon style={styles.heart} name='heart-outlined' />
        <Title style={styles.title}>{this.props.title}</Title>
        <Text style={styles.subtitle}>{this.props.subtitle}</Text>
      </View>
		);
	}
}
Smalltile.defaultProps = {img: 'https://facebook.github.io/react-native/docs/assets/favicon.png'};
export default Smalltile;
