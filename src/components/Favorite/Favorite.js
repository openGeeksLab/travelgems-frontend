import React, { Component } from "react";
import {View,Image,TouchableOpacity} from "react-native";
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
			<TouchableOpacity style={styles.heartview} onPress={() => {
				this.setState((prevState, props) => {
				  return {favorite: ! prevState.favorite};
				});
  		}}>
          {
						this.props.color === 'white'
						?
							(
								this.state.favorite
								? <Icon style={styles.heart} name='heart' />
								: <Icon style={styles.heart} name='heart-outlined' />
							)
						:
						(
							this.state.favorite
							? <Icon style={styles.heartBlue} name='heart' />
							: <Icon style={styles.heartBlue} name='heart-outlined' />
						)
					}
      </TouchableOpacity>
		);
	}
}
Favorite.defaultProps = {favorite:false};
export default Favorite;
