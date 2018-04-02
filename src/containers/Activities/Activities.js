import Config from 'react-native-config';
import React, {Component,} from 'react';
import {
  Image,
  View,
  StatusBar,
  Linking,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import {Icon,} from 'react-native-elements';
import {
  Container,
  H3,
  Text,
  Title,
  Body,
  Left,
  Right,
  List,
  ListItem,
  Button,
} from 'native-base';
import {Header,} from 'react-native-elements';
import Backgroundimage from '../../components/Backgroundimage/Backgroundimage';
import styles from './styles';
import Widetile from '../../components/Widetile/Widetile';
import CheckBox from 'react-native-check-box';

const gridImage =
  'https://www.olympicholidays.com/media/20570/fiskardo_kefalonia_greece.jpg?center=0.37948717948717947,0.51&mode=crop&quality=70&width=550&height=358&rnd=131302560700000000';


import Modal from 'react-native-modal';

class Activities extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      isModalVisible: false,
      filters: [{
        id: 1,
        label: 'value1',
        checked: true,
      },
      {
        id: 2,
        label: 'value2',
        checked: false,
      },
      {
        id: 3,
        label: 'value3',
        checked: false,
      },
      {
        id: 4,
        label: 'value4',
        checked: true,
      },
      ],
    };
  }
  _toggleModal = () =>
    this.setState({
      isModalVisible: !this.state.isModalVisible,
    });
  static navigationOptions = {
    tabBarLabel: 'Activities',
    tabBarIcon: ({
      tintColor,
    }) => (<Icon name ="flash-on"
      type= "home"
      color= "#fff"
    />
    ),
  }
  onSearchChange(text) {
    this.setState({
      text,
    });
    console.log(this.state);
  }
  changeSelection(id) {
    this.setState({
      filters: this.state.filters.map((item, i) => {
        if (item.id === id) {
          item.checked = !item.checked
        }
        return item;
      }),
    });
    console.log(this.state.filters);
  }
  render() {
    return (<Container style= {
            styles.container
          }
      >
        <Header leftComponent= {<TouchableOpacity
transparent
onPress = {
              () => this.props.navigation.navigate("DrawerOpen")
            }
          >
            <Icon name ="menu"
              color ="#fff"
            />
                                   </TouchableOpacity>}
            centerComponent ={<Title > Activities </Title>}
            rightComponent= {<Icon
name= "home"
                type= "home"
                color ="#fff"
                onPress ={
                  () => this.props.navigation.navigate('Home')
                }
              />}
          />
        <Modal
                  isVisible= {
                  this.state.isModalVisible
                }
                  animationInTiming ={
                  1000
                }
                  animationOutTiming= {
                  1000
                }
                  backdropTransitionInTiming= {
                  1000
                }
                  backdropTransitionOutTiming= {
                  1000
                }
                >
                  <View style ={
                  {
                    backgroundColor: 'white',
                    padding: 10,
                    justifyContent: 'center',
                    borderRadius: 4,
                    borderColor: 'rgba(0, 0, 0, 0.1)',
                  }
                }
                > {
                  this.state.filters.map((item, i) => (<CheckBox key ={
                      item.id
                    }
                    style ={
                      {
                        flex: 1,
                        padding: 10,
                      }
                    }
                    onClick ={
                      () => this.changeSelection(item.id)
                    }
                    isChecked ={
                      item.checked
                    }
                    leftText ={
                      item.label
                    }
                  />
                  ))
                } <TouchableOpacity onPress= {
                  this._toggleModal
                }
                >
                  <Text > Hide me! 
                </Text> 
                  </TouchableOpacity> 
                </View> 
                </Modal> <View style= {
                  styles.SearchStyle
                }
                >
                  <Icon name= "search"
                  style ={
                  styles.SearchIcon
                }
                /> <TextInput
                  style ={
                  {
                    flex: 1,
                  }
                }
                  onChangeText ={
                  (text) => {
                    this.onSearchChange(text);
                  }
                }
                  placeholder= "Search"
                  underlineColorAndroid= "transparent"
                />
                  <Icon name ="menu"
                  style ={
                  styles.FilterIcon
                }
                  onPress= {
                  this._toggleModal
                }
                /> 
                        </View> <ScrollView style= {
                  {}
                }
                >
                  <List >
                  <ListItem style= {
                  {
                    margin: 0,
                    padding: 0,
                    marginLeft: 0,
                    paddingLeft: 15,
                    paddingRight: 15,
                    borderBottomWidth: 0,
                  }
                }
                >
                  <Widetile title ="title"
                  subtitle ="subtitle"
                  img ="https://www.olympicholidays.com/media/20570/fiskardo_kefalonia_greece.jpg?center=0.37948717948717947,0.51&mode=crop&quality=70&width=550&height=358&rnd=131302560700000000"
                />
                </ListItem> <ListItem style ={
                  {
                    margin: 0,
                    padding: 0,
                    marginLeft: 0,
                    paddingLeft: 15,
                    paddingRight: 15,
                    borderBottomWidth: 0,
                  }
                }
                >
                  <Widetile title ="title"
                  subtitle= "subtitle"
                  img ="https://www.olympicholidays.com/media/20570/fiskardo_kefalonia_greece.jpg?center=0.37948717948717947,0.51&mode=crop&quality=70&width=550&height=358&rnd=131302560700000000"
                />
                           </ListItem> 
                </List> </ScrollView> 
               </Container>
    );
  }
}


export default Activities;
