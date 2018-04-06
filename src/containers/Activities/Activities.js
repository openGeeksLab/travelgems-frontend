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
import { FilterActivities } from 'src/components/FilterModal';
import Widetile from 'src/components/Widetile/Widetile';
import SearchBar from 'src/components/SearchBar';

const Header = ({ navigation }) => (
  <View
    style={{
      paddingTop: 50,
      paddingHorizontal: 26,
      backgroundColor: '#041DB2',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    }}
  >
    <EntypoIcon
      name="menu"
      color="#fff"
      size={24}
      onPress={() => navigation.navigate('DrawerOpen')}
    />

    <Text style={{ color: 'white', fontSize: 24 }}>Activities</Text>
    <Icon name="close" color="#fff" size={24} />
  </View>
);

const Acitivities = ({
  navigation,
  isModalVisible,
  setIsModalVisible,
  activitiesFilters,
  filteredDestination,
  filterText,
  setFilterText,
}: Object) => (
  <View>
    <FilterActivities
      containerStyle={{ marginTop: 55 }}
      isModalVisible={isModalVisible}
      setIsModalVisible={setIsModalVisible}
      filters={activitiesFilters}
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
        height: 165,
        position: 'absolute',
      }}
    />
    <Header navigation={navigation} />
    <SearchBar
      filterText={filterText}
      onPressFilter={() => {
        setIsModalVisible(true);
      }}
      onLeftPress={() => {
        setFilterText(null);
      }}
    />
    <FlatList
      onEndReachedThreshold={0.5}
      data={filteredDestination}
      keyExtractor={(item, index) => index}
      renderItem={({ item }) => {
        const activity = item;
        return (
          <Widetile
            key={activity.uuid}
            title={activity.name}
            subtitle={activity.category_name}
            img={activity.inner_photo}
            favourite={activity.favourite}
          />
        );
      }}
    />
  </View>
);

export default compose(
  withState('isModalVisible', 'setIsModalVisible', false),
  withState('filterText', 'setFilterText', null),
  connect(
    state => ({
      activities: state.content.activitiesArray,
      activitiesFilters: state.content.activitiesFilters,
    }),
    {},
  ),
  withProps(({ activities, filterText }) => ({
    filteredDestination: filterText
      ? filter(activity => {
          return path(['extra_fields', 'country'], activity) === filterText;
        }, activities)
      : activities,
  })),
)(Acitivities);
