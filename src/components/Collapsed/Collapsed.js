import React, { Component } from 'react';
import { View, TouchableOpacity, Animated } from 'react-native';
import { List, ListItem, Avatar } from 'react-native-elements';
import { Container, H3, Text, Title, Body, Left, Right } from 'native-base';
import { Header, Button } from 'react-native-elements';
import styles from './styles';
import Icon from 'react-native-vector-icons/EvilIcons';
import HTMLView from 'react-native-htmlview';

class collapsed extends Component {
  constructor(props) {
    super(props);

    this.state = {
      expanded: false,
      animation: new Animated.Value(0),
    };
  }

  componentDidMount() {
    Animated.spring(this.state.animation, {
      toValue: 25,
    }).start();
  }

  toggle = () => {
    const initialValue = this.state.expanded
      ? this.state.maxHeight + this.state.minHeight
      : this.state.minHeight;
    const finalValue = this.state.expanded
      ? this.state.minHeight
      : this.state.maxHeight + this.state.minHeight;

    this.setState({
      expanded: !this.state.expanded,
    });

    this.state.animation.setValue(initialValue);
    Animated.spring(this.state.animation, {
      toValue: finalValue,
    }).start();
  };

  _setMaxHeight = (event) => {
    this.setState({
      maxHeight: event.nativeEvent.layout.height,
    });
  };

  _setMinHeight = (event) => {
    this.setState({
      minHeight: event.nativeEvent.layout.height,
    });
  };

  render() {
    if (!this.props.description || this.props.description === 'NULL') {
      return null;
    }
    return (
      <Animated.View style={[styles.container, { height: this.state.animation }]}>
        <View style={styles.titleContainer} onLayout={this._setMinHeight}>
          <Text style={styles.title}>{this.props.title}</Text>
          <TouchableOpacity onPress={this.toggle}>
            <Icon
              style={{
                fontSize: 23,
                color: '#46DFE8',
              }}
              name={this.state.expanded ? 'minus' : 'plus'}
            />
          </TouchableOpacity>
        </View>

        <View onLayout={this._setMaxHeight}>
          <HTMLView value={this.props.description} />
        </View>
      </Animated.View>
    );
  }
}
export default collapsed;
