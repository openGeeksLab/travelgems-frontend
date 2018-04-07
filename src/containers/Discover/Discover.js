import React from 'react';
import {
  ScrollView,
  View,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';

import EntypoIcon from 'react-native-vector-icons/Entypo';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Modal from 'react-native-modal';
import { slice, append } from 'ramda';
import { compose, withHandlers, withState } from 'recompose';
import { connect } from 'react-redux';

import DestinationScroll from '../../components/HorizontalScroll/DestinationScroll';
import ActivityScroll from '../../components/HorizontalScroll/ActivityScroll';
import { FilterDestinations } from 'src/components/FilterModal';
import SearchBar from 'src/components/SearchBar';
import Header from 'src/components/Header';

const Discover = ({
  destinations,
  activities,
  navigation,
  isModalVisible,
  setIsModalVisible,
  destinationsFilters,
}: Object) => (
  <ScrollView>
    <FilterDestinations
      isModalVisible={isModalVisible}
      setIsModalVisible={setIsModalVisible}
      filters={destinationsFilters}
      onPressFilter={filter => {
        navigation.navigate('Filter', { filter });
      }}
    />
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
    <Header navigation={navigation} title="Discover" />
    <SearchBar
      onPressFilter={() => {
        setIsModalVisible(true);
      }}
    />
    <ActivityScroll
      containerStyle={{
        margin: 0,

        marginTop: 20,
      }}
      onPress={activity => {
        navigation.navigate('Activity', { activity });
      }}
      activities={activities}
    />
    <DestinationScroll
      containerStyle={{
        margin: 0,
        marginLeft: 28,
        marginTop: 20,
      }}
      onPress={destination => {
        navigation.navigate('Destination', { destination });
      }}
      destinations={destinations}
    />
  </ScrollView>
);

export default compose(
  withState('isModalVisible', 'setIsModalVisible', false),
  connect(
    state => ({
      destinations: slice(0, 15, state.content.destinationsArray),
      activities: slice(0, 15, state.content.activitiesArray),
      destinationsFilters: state.content.destinationsFilters,
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
