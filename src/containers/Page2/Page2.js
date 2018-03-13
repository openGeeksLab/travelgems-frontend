import React, { Component } from "react";

import { Container, Title,
  Content, Button, Text, Left,
  Body, Right, View } from "native-base";
import { TouchableOpacity } from "react-native"
import { Header, Icon } from "react-native-elements";
import styles from "./styles";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { show } from 'redux-modal';
import ListModal from '../../components/modalbox/listModal';

class Page2 extends Component {

  handleOpen = name => () => {
    this.props.show(name, { message: `This is a ${name} modal` })
  };

  render() {
    return (
      <Container style={styles.container}>
        <Header
        leftComponent={<TouchableOpacity transparent onPress={() => this.props.navigation.navigate("DrawerOpen")}>
                      <Icon name="menu" color="#fff"/>
                    </TouchableOpacity>}
        centerComponent={<Title>Page2</Title>}
        rightComponent={<Icon name='home' type='home' color='#fff' onPress={() => this.props.navigation.navigate("Home")} /> }
      />

        <View padder>
          <ListModal />
          <Button block style={styles.btnShowModal} onPress={this.handleOpen('basicModal')}>
            <Text>Basic Modal</Text>
          </Button>
          <Button block style={styles.btnShowModal} onPress={this.handleOpen('topModal')}>
            <Text>Position Top</Text>
          </Button>
          <Button block style={styles.btnShowModal} onPress={this.handleOpen('centerModal')}>
            <Text>Position Center</Text>
          </Button>
          <Button block style={styles.btnShowModal} onPress={this.handleOpen('bottomModal')}>
            <Text>Position Bottom</Text>
          </Button>
          <Button block style={styles.btnShowModal} onPress={this.handleOpen('scrollModal')}>
            <Text>Scroll Modal</Text>
          </Button>
        </View>
      </Container>
    );
  }
}

export default connect(null, dispatch => bindActionCreators({ show }, dispatch))(Page2)
