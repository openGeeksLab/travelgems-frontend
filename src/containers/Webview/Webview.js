import React, { Component } from "react";

import { Container, Title,
  Content, Button, Text, Left,
  Body, Right, View } from "native-base";
import { TouchableOpacity, WebView } from "react-native"
import { Header, Icon } from "react-native-elements";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { show } from 'redux-modal';

class Webview extends Component {

  constructor (props) {
    super(props)
    this.state =props.navigation.state.params
  }

  render() {
    return (
         <WebView
           source={{uri: this.state.url}}
         />
       );
  }
}

export default connect(null, dispatch => bindActionCreators({ show }, dispatch))(Webview)
