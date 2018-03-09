import React, { Component } from "react";
import { Image } from "react-native";
import { Content, Container } from "native-base";
import { List, ListItem, Avatar, Icon } from "react-native-elements"
import styles from "./styles";

const drawerImage = require("../../../assets/img/logo-kitchen-sink.png");

const datas = [
	{
		name: "Home",
		route: "Home",
		icon: "home",
		bg: "#C5F442",
	},
  {
    name: "ModalBox",
    route: "Page2",
    icon: "",
    bg: "#00BFFF",
    types: 5
  }
];

class SideBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			shadowOffsetWidth: 1,
			shadowRadius: 4,
		};
	}

	render() {
		return (
			<Container>
				<Content bounces={true} style={styles.container}>
					<List containerStyle={{marginTop:80}}>
						{
							datas.map((data, i) => (
								 <ListItem
									 roundAvatar
									 avatar={<Avatar
										  small
										  icon={{name: data.icon,color:'black'}}
											overlayContainerStyle={{backgroundColor: 'transparent'}}
										  activeOpacity={1}
										  containerStyle={{}}
										/>}
									 key={i}
									 title={data.name}
									 onPress={() => this.props.navigation.navigate(data.route)}
								 />
							 ))
						}
					</List>
				</Content>
			</Container>
		);
	}
}

export default SideBar;
