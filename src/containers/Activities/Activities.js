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
import { filter, contains, replace } from 'ramda';
import { compose, withHandlers, withState } from 'recompose';
import { connect } from 'react-redux';
import { FilterActivities } from 'src/components/FilterModal';
import Widetile from 'src/components/Widetile/Widetile';
import SearchBar from 'src/components/SearchBar';
import {
  getTextFilterHelper,
  arrayContainsArray,
  valueIsTrue,
} from 'src/selectors';
import Header from 'src/components/Header';
import { filtersSelector } from './selector';

const Acitivities = ({
  navigation,
  isModalVisible,
  setIsModalVisible,
  activitiesFilters,
  filteredActivity,
  filterText,
  onPressFilter,
}: Object) => (
  <View>
    <FilterActivities
      containerStyle={{ marginTop: 55 }}
      isModalVisible={isModalVisible}
      setIsModalVisible={setIsModalVisible}
      filters={activitiesFilters}
      onPressFilter={onPressFilter}
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
    <Header navigation={navigation} title="Activities" />
    <SearchBar
      filterText={filterText}
      onPressFilter={() => {
        setIsModalVisible(true);
      }}
    />
    <FlatList
      onEndReachedThreshold={0.5}
      data={filteredActivity}
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
            onPress={() => {
              navigation.navigate('Activity', { activity });
            }}
          />
        );
      }}
    />
  </View>
);

export default compose(
  connect(
    state => ({
      activities: state.content.activitiesArray,
      activitiesFilters: filtersSelector(state),
    }),
    {},
  ),
  withState('isModalVisible', 'setIsModalVisible', false),
  withState(
    'filteredActivity',
    'setFilteredActivity',
    ({ activities }) => activities,
  ),
  withHandlers({
    onPressFilter: ({ activities, setFilteredActivity }) => filters => {
      const result = filter(activity => {
        const contryFilter = getTextFilterHelper({
          country: filters.country,
        });

        let isPriceTrue = false;
        const priceFilter = valueIsTrue(filters.price);
        if (priceFilter.length > 0) {
          const priceNumb = replace(/^\D+/g, '', priceFilter[0]);
          if (priceFilter[0].includes('>=')) {
            isPriceTrue = activity.price > priceNumb;
          } else {
            isPriceTrue = activity.price < priceNumb;
          }
        } else {
          isPriceTrue = true;
        }

        const typeFilter = getTextFilterHelper({
          type: filters.type,
        });

        //Because type is multiple select then it difference when filter
        const isHasType = !typeFilter
          ? true
          : typeFilter.length > 0
            ? contains(
                activity.tags.filter(val => val.includes('type'))[0],
                typeFilter,
              )
            : true;

        return (
          arrayContainsArray(activity.tags, contryFilter) &&
          isHasType &&
          isPriceTrue
        );
      }, activities);
      setFilteredActivity(result);
    },
  }),
)(Acitivities);
