import React from 'react';
import {
  ScrollView,
  View,
  TouchableOpacity,
  ImageBackground,
  Text,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import { slice, keys, lensPath, set, view } from 'ramda';

import { compose, withHandlers, withState } from 'recompose';
import FeatherIcon from 'react-native-vector-icons/Feather';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Modal from 'react-native-modal';
import Button from 'src/components/common/Button';

const styles = StyleSheet.create({
  component: {
    flex: 1,
    height: 200,
    marginHorizontal: 25,
  },
  buttonApply: {
    borderTopColor: 'rgba(161, 161, 161, 0.3)',
    borderTopWidth: 1.6,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
    marginTop: 30,
  },
  title: { marginVertical: 24, fontSize: 14, color: '#A1A1A1' },
  rowView: { flexDirection: 'row' },
  heart: {
    position: 'absolute',
    right: 15,
    top: 15,
  },
});

const getFiltersObject = filters => {
  const data = filters.reduce((result, text, index) => {
    const array = text.split(':');
    if (array.length > 1) {
      result[array[0]] = result[array[0]]
        ? { ...result[array[0]], [array[1]]: false }
        : { [array[1]]: false };
    }
    return result;
  }, {});
  return data;
};

const capitalizeFirstLetter = string =>
  string.charAt(0).toUpperCase() + string.slice(1);

const renderItemsForKey = ({
  key,
  filterObject,
  setFilterObject,
  customItem,
  isMultipleSelect,
}) =>
  filterObject[key] &&
  keys(filterObject[key]).map((text, index) => {
    const lens = lensPath([key, text]);
    const isSelect = view(lens, filterObject);
    const onPress = () => {
      if (isMultipleSelect) {
        setFilterObject(set(lens, !isSelect, filterObject));
      } else {
        const keyFilterObject = keys(filterObject[key]).reduce(
          (result, keyText) => {
            result[keyText] = text === keyText;
            return result;
          },
          {},
        );
        setFilterObject({ ...filterObject, [key]: keyFilterObject });
      }
    };

    return customItem ? (
      <View key={index}>
        {customItem({
          index,
          text: capitalizeFirstLetter(text),
          isSelect,
          onPress,
        })}
      </View>
    ) : (
      <Button
        key={index}
        style={{ marginRight: 20, height: 30 }}
        text={capitalizeFirstLetter(text)}
        isSelect={isSelect}
        onPress={onPress}
      />
    );
  });

const FilterModal = ({
  isModalVisible,
  setIsModalVisible,
  onPressFilter,
  containerStyle,
  filterObject,
  children,
}: Object) => (
  <Modal
    isVisible={isModalVisible}
    style={{
      flexDirection: 'column',
      justifyContent: 'flex-start',
      margin: 0,
      padding: 0,
    }}
    animationIn={'fadeIn'}
    animationOut={'fadeOut'}
    onBackdropPress={() => {
      setIsModalVisible(false);
    }}
  >
    <View
      style={[
        {
          marginTop: 70,
          marginHorizontal: 13,
          backgroundColor: 'white',

          borderRadius: 4,
          justifyContent: 'flex-end',
        },
        containerStyle,
      ]}
    >
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 14,
          marginHorizontal: 28,
        }}
      >
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={{ color: 'rgba(0, 0, 0, 0.58)', fontSize: 16 }}>
            Filtered by
          </Text>
          <SimpleLineIcons
            name="arrow-right"
            color="rgba(0, 0, 0, 1)"
            size={12}
          />
        </View>

        <TouchableOpacity
          onPress={() => {
            setIsModalVisible(false);
          }}
        >
          <Text style={{ color: '#46DFE8', fontSize: 14 }}> Cancel</Text>
        </TouchableOpacity>
      </View>

      {children}
      <TouchableOpacity
        style={styles.buttonApply}
        onPress={() => {
          setIsModalVisible(false);
          onPressFilter(filterObject);
        }}
      >
        <Text style={{ fontSize: 16, color: '#46DFE8' }}>APPLY</Text>
      </TouchableOpacity>
    </View>
  </Modal>
);

const FilterDestinationsView = props => {
  const { setIsModalVisible, filterObject, setFilterObject } = props;
  return (
    <FilterModal {...props}>
      <View
        style={{
          flexDirection: 'column',
          marginHorizontal: 25,
        }}
      >
        <Text style={styles.title}>Country</Text>
        <View style={styles.rowView}>
          {renderItemsForKey({ key: 'country', filterObject, setFilterObject })}
        </View>
      </View>
    </FilterModal>
  );
};

const TypeItem = ({ index, text, isSelect, onPress }: Object) => {
  return (
    <TouchableOpacity
      key={index}
      style={{
        marginRight: 20,
        height: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}
      onPress={onPress}
    >
      <Text
        style={{
          fontSize: 16,
          color: '#222222',
          alignSelf: 'stretch',
        }}
      >
        {text}
      </Text>
      {isSelect && <FeatherIcon name="check" color="#15ABC2" size={12} />}
    </TouchableOpacity>
  );
};

const FilterActivitiesView = props => {
  const { filterObject, setFilterObject } = props;

  return (
    <FilterModal
      {...props}
      containerStyle={{
        marginVertical: 70,
        paddingBottom: 0,
        alignSelf: 'stretch',
        flex: 1,
      }}
    >
      <View
        style={{
          flexDirection: 'column',
          marginHorizontal: 25,
          flex: 1,
          alignSelf: 'stretch',
        }}
      >
        <Text style={styles.title}>Country</Text>
        <View style={styles.rowView}>
          {renderItemsForKey({ key: 'country', filterObject, setFilterObject })}
        </View>
        <Text style={styles.title}>Price</Text>
        <View style={{ height: 30, width: '100%' }}>
          <ScrollView horizontal>
            {renderItemsForKey({
              key: 'price',
              filterObject,
              setFilterObject,
            })}
          </ScrollView>
        </View>

        <View
          style={{
            marginTop: 30,
            backgroundColor: 'rgba(112, 112, 112, 0.2)',
            height: 1,
            width: '100%',
          }}
        />
        <Text style={styles.title}>Type of activity</Text>
        <View
          style={{
            margin: 0,
            flex: 1,
          }}
        >
          <ScrollView>
            {renderItemsForKey({
              key: 'type',
              filterObject,
              setFilterObject,
              isMultipleSelect: true,
              customItem: props => <TypeItem {...props} />,
            })}
          </ScrollView>
        </View>
      </View>
    </FilterModal>
  );
};

const enhance = compose(
  withState('filterObject', 'setFilterObject', ({ filters }) =>
    getFiltersObject(filters),
  ),
);

export const FilterActivities = enhance(FilterActivitiesView);
export const FilterDestinations = enhance(FilterDestinationsView);
