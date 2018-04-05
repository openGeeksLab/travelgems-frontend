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
import { filter, path, splitEvery } from 'ramda';
import { compose, withProps, withState } from 'recompose';
import { connect } from 'react-redux';
import FilterModal from './FilterModal';
import Smalltile from 'src/components/Smalltile/Smalltile';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

const SearchBar = ({ onPressFilter, onLeftPress, filterText }) => (
  <View
    style={{
      marginLeft: 16,
      marginTop: 55,
      marginHorizontal: 13,
      height: 50,
      backgroundColor: 'white',
      borderColor: '#9C9CDD',
      borderWidth: 1,
      borderRadius: 2,
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
    }}
  >
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Ionicons
        style={{
          marginLeft: 16,
          fontSize: 30,
          color: 'rgba(34, 34, 34, 1)',
        }}
        name={'ios-arrow-round-back'}
        onPress={onLeftPress}
      />
      <Text
        style={{ color: 'rgba(0, 0, 0, 0.58)', fontSize: 16, marginLeft: 10 }}
      >
        Filtered by
      </Text>
      <SimpleLineIcons name="arrow-right" color="rgba(0, 0, 0, 1)" size={12} />
      {filterText && (
        <Text
          style={{
            color: '#15ABC2',
            fontSize: 16,
            marginLeft: 16,
          }}
        >
          {filterText}
        </Text>
      )}
    </View>

    <Icon
      style={{
        fontSize: 23,
        color: '#46DFE8',
      }}
      name={'search'}
      onPress={onPressFilter}
    />
  </View>
);

const Filter = ({
  navigation,
  isModalVisible,
  setIsModalVisible,
  destinationsFilters,
  filteredDestination,
  filterText,
  setFilterText,
}: Object) => (
  <View>
    <FilterModal
      containerStyle={{ marginTop: 55 }}
      isModalVisible={isModalVisible}
      setIsModalVisible={setIsModalVisible}
      filters={destinationsFilters}
      onPressFilter={text => {
        setFilterText(text);
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
              />
            ))}
          </View>
        );
      }}
    />
  </View>
);

Filter.navigationOptions = {
  tabBarLabel: 'Discover',
  tabBarIcon: ({ tintColor }) => {
    return <Icon name="place" type="home" color="#fff" />;
  },
};

export default compose(
  withState('isModalVisible', 'setIsModalVisible', false),
  withState(
    'filterText',
    'setFilterText',
    ({ navigation: { state: { params: { text } } } }) => text,
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
      console.log(
        'path  destination) ===',
        path(['extra_fields', 'country'], destination, filterText),
      );

      return path(['extra_fields', 'country'], destination) === filterText;
    }, destinations),
  })),
)(Filter);
