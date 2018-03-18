import Config from 'react-native-config';
import React, { Component } from "react";
import { Image, View, StatusBar, Linking, TouchableOpacity,StyleSheet,TouchableHighlight,Animated } from "react-native";
import { List, ListItem, Avatar } from "react-native-elements"
import { Container, H3, Text, Title, Body, Left, Right } from "native-base";
import { Header,Button } from "react-native-elements";
import styles from "./styles";
import Icon from 'react-native-vector-icons/Entypo';

class collapsed extends Component {
  constructor (props) {
    super(props)
    this.icons = {
                'up'    : <Icon name='arrow-bold-up' />,
                'down'  : <Icon name='arrow-bold-down' />
            };

            this.state = {
                title       : props.title,
                expanded    : true,
                animation   : new Animated.Value()
            };

  }
  toggle(){
         let initialValue    = this.state.expanded? this.state.maxHeight + this.state.minHeight : this.state.minHeight,
             finalValue      = this.state.expanded? this.state.minHeight : this.state.maxHeight + this.state.minHeight;

         this.setState({
             expanded : !this.state.expanded
         });

         this.state.animation.setValue(initialValue);
         Animated.spring(
             this.state.animation,
             {
                 toValue: finalValue
             }
         ).start();
     }

     _setMaxHeight(event){
         this.setState({
             maxHeight   : event.nativeEvent.layout.height
         });
     }

     _setMinHeight(event){
         this.setState({
             minHeight   : event.nativeEvent.layout.height
         });
     }

     render(){
         let icon = this.icons['down'];

         if(this.state.expanded){
             icon = this.icons['up'];
         }

         return (
             <Animated.View
                 style={[styles.container,{height: this.state.animation}]}>
                 <View style={styles.titleContainer} onLayout={this._setMinHeight.bind(this)}>
                     <Text style={styles.title}>{this.state.title}</Text>
                     <TouchableHighlight
                         style={styles.button}
                         onPress={this.toggle.bind(this)}
                         underlayColor="#f1f1f1">
                         {icon}
                     </TouchableHighlight>
                 </View>

                 <View style={styles.body} onLayout={this._setMaxHeight.bind(this)}>
                     {this.props.children}
                 </View>

             </Animated.View>
         );
     }
}
export default collapsed;
