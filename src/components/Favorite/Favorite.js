import React, { Component } from "react";
import {View,Image} from "react-native";
import { Tile } from "react-native-elements"
import { Container, Header, Content, Thumbnail, Text, Title } from 'native-base';
import styles from "./styles";
import Icon from 'react-native-vector-icons/Entypo';

class Favorite extends Component {
	constructor(props) {
		super(props);
		this.state = {
			favorite: this.props.favorite
		};
	}

	render() {
		return (
			<View style={styles.heartview}>
          {
						this.state.favorite
						? <Icon style={styles.heart} name='heart' />
						: <Icon style={styles.heart} name='heart-outlined' />
					}
      </View>
		);
	}
}
Favorite.defaultProps = {favorite:false};
export default Favorite;
