import React from 'react';
import {
  ScrollView,
  View,
  TouchableOpacity,
  TextInput,
  ImageBackground,
  Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';

import EntypoIcon from 'react-native-vector-icons/Entypo';

import R from 'ramda';
import { compose, withHandlers } from 'recompose';
import { connect } from 'react-redux';

import DestinationScroll from '../../components/HorizontalScroll/DestinationScroll';
import ActivityScroll from '../../components/HorizontalScroll/ActivityScroll';

const Header = ({ navigation }) => (
  <View
    style={{
      paddingTop: 28,
      paddingHorizontal: 26,
      backgroundColor: '#041DB2',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    }}
  >
    <TouchableOpacity
      transparent
      onPress={() => navigation.navigate('DrawerOpen')}
    >
      <EntypoIcon name="menu" color="#fff" size={24} />
    </TouchableOpacity>
    <Text style={{ color: 'white', fontSize: 24 }}>Discover</Text>
  </View>
);
const SearchBar = () => (
  <View
    style={{
      marginTop: 19,
      marginHorizontal: 13,
      height: 50,
      backgroundColor: 'white',
      borderColor: '#9C9CDD',
      borderWidth: 1,
      borderRadius: 2,
      alignItems: 'center',
      flexDirection: 'row',
    }}
  >
    <Icon
      style={{
        fontSize: 23,
        color: '#46DFE8',
      }}
      name={'search'}
    />
    <TextInput
      style={{ fontSize: 16, flex: 1 }}
      placeholderTextColor="rgba(0, 0, 0, 0.58)"
      placeholder="Type a destination?"
    />
  </View>
);

const Discover = ({ destinations, activities, navigation }) => (
  <ScrollView>
    <ImageBackground
      style={{
        backgroundColor: '#041DB2',
        top: 0,
        left: 0,
        right: 0,
        height: 181,
        position: 'absolute',
      }}
    />
    <Header navigation={navigation} />
    <SearchBar />
    <ActivityScroll
      containerStyle={{
        margin: 0,

        marginTop: 20,
      }}
      activities={activities}
      title={'destination.name'}
    />
    <DestinationScroll
      containerStyle={{
        margin: 0,
        marginLeft: 28,
        marginTop: 20,
      }}
      destinations={destinations}
      title={'destination.name'}
    />
  </ScrollView>
);

Discover.navigationOptions = {
  tabBarLabel: 'Discover',
  tabBarIcon: ({ tintColor }) => {
    return <Icon name="place" type="home" color="#fff" />;
  },
};

export default compose(
  connect(
    state => ({
      destinations: R.slice(0, 15, state.content.destinationsArray),
      activities: R.slice(0, 15, state.content.activitiesArray),
    }),
    {},
  ),
  withHandlers({
    onPressItem: ({ navigation }) => item => {
      navigation.navigate('MyScheduleDetail', {
        selectedPerson: item,
      });
    },
  }),
)(Discover);
