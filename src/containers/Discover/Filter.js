import React from 'react';
import {
  FlatList,
  View,
  TextInput,
  ImageBackground,
  Text,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';

import EntypoIcon from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { filter, path, splitEvery, keys } from 'ramda';
import { compose, withProps, withState } from 'recompose';
import { connect } from 'react-redux';
import { FilterDestinations } from 'src/components/FilterModal';
import Smalltile from 'src/components/Smalltile/Smalltile';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import SearchBar from 'src/components/SearchBar';

const Filter = ({
  navigation,
  isModalVisible,
  setIsModalVisible,
  destinationsFilters,
  filteredDestination,
  filterText,
  setFilterText,
}: Object) => (
  <View style={{ marginBottom: 100 }}>
    <FilterDestinations
      containerStyle={{ marginTop: 55 }}
      isModalVisible={isModalVisible}
      setIsModalVisible={setIsModalVisible}
      filters={destinationsFilters}
      onPressFilter={filter => {
        setFilterText(countryTextFilterHelper(filter));
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

    <SearchBar
      containerStyle={{ marginTop: 55 }}
      filterText={filterText}
      onPressFilter={() => {
        setIsModalVisible(true);
      }}
      onLeftPress={() => {
        navigation.goBack();
      }}
    />
    <FlatList
      onEndReachedThreshold={0.5}
      data={splitEvery(2, filteredDestination)}
      keyExtractor={(item, index) => index}
      renderItem={({ item, index }) => {
        return (
          <View
            style={{ flexDirection: 'row', marginLeft: 20, marginTop: 22 }}
            key={index}
          >
            {item.map(destination => (
              <Smalltile
                key={destination.id}
                title={destination.name}
                subtitle={path(['extra_fields', 'country'], destination)}
                img={destination.img_preview}
                favourite={destination.favourite}
                onPress={() => {
                  navigation.navigate('Destination', { destination });
                }}
              />
            ))}
          </View>
        );
      }}
    />
  </View>
);

const countryTextFilterHelper = filter => {
  let text = null;
  if (filter.country) {
    keys(filter.country).forEach(key => {
      if (filter.country[key]) {
        text = key;
        return;
      }
    });
  }
  return text;
};

export default compose(
  withState('isModalVisible', 'setIsModalVisible', false),
  withState(
    'filterText',
    'setFilterText',
    ({ navigation: { state: { params: { filter } } } }) => {
      return countryTextFilterHelper(filter);
    },
  ),
  connect(
    state => ({
      destinations: state.content.destinationsArray,
      destinationsFilters: state.content.destinationsFilters,
    }),
    {},
  ),
  withProps(({ destinations, filterText }) => ({
    filteredDestination: filter(destination => {
      return path(['extra_fields', 'country'], destination) === filterText;
    }, destinations),
  })),
)(Filter);
