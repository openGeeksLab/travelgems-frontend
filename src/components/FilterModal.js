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
import { slice, append } from 'ramda';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Modal from 'react-native-modal';
import Button from 'src/components/common/Button';

const FilterModal = ({
  isModalVisible,
  setIsModalVisible,
  filters,
  onPressFilter,
  containerStyle,
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
          paddingBottom: 20,
          borderRadius: 4,
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
        <Icon
          name="close"
          color="#15ABC2"
          size={24}
          onPress={() => {
            setIsModalVisible(false);
          }}
        />
      </View>
      <View
        style={{
          flexDirection: 'column',
          marginHorizontal: 25,
          flex: 1,
          alignSelf: 'stretch',
        }}
      >
        {children}
      </View>
    </View>
  </Modal>
);

export const FilterDestinations = props => {
  const { setIsModalVisible, filters, onPressFilter } = props;
  const countryFilter = getFiltersObject(filters).country;
  return (
    <FilterModal {...props}>
      <Text style={styles.title}>County</Text>
      <View style={styles.rowView}>
        {countryFilter &&
          countryFilter.map((text, index) => (
            <Button
              key={index}
              style={{ marginRight: 20, height: 30 }}
              text={text}
              onPress={() => {
                onPressFilter(text);
                setIsModalVisible(false);
              }}
            />
          ))}
      </View>
    </FilterModal>
  );
};

export const FilterActivities = props => {
  const { setIsModalVisible, filters, onPressFilter } = props;
  const filterObject = getFiltersObject(filters);
  const countryFilter = filterObject.country;
  const priceFilter = filterObject.price;
  const typeFilter = filterObject.type;
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
      <Text style={styles.title}>County</Text>
      <View style={styles.rowView}>
        {countryFilter &&
          countryFilter.map((text, index) => (
            <Button
              key={index}
              style={{ marginRight: 20, height: 30 }}
              text={text}
              onPress={() => {
                onPressFilter(text);
              }}
            />
          ))}
      </View>
      <Text style={styles.title}>Price</Text>
      <View style={{ height: 30, width: '100%' }}>
        <ScrollView horizontal>
          {priceFilter &&
            priceFilter.map((text, index) => (
              <Button
                key={index}
                style={{ marginRight: 20, height: 30 }}
                text={text}
                onPress={() => {
                  onPressFilter(text);
                }}
              />
            ))}
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
          {typeFilter &&
            typeFilter.map((text, index) => (
              <TouchableOpacity
                key={index}
                style={{ marginRight: 20, height: 30 }}
                onPress={() => {
                  setIsModalVisible(false);
                }}
              >
                <Text>{text}</Text>
              </TouchableOpacity>
            ))}
        </ScrollView>
      </View>
      <TouchableOpacity
        style={{ marginRight: 20, height: 30 }}
        onPress={() => {
          setIsModalVisible(false);
        }}
      >
        <Text>APPLY</Text>
      </TouchableOpacity>
    </FilterModal>
  );
};

const getFiltersObject = filters => {
  const data = filters.reduce((result, text, index) => {
    const array = text.split(':');
    if (array.length > 1) {
      result[array[0]] = result[array[0]]
        ? append(array[1], result[array[0]])
        : [array[1]];
    }
    return result;
  }, {});
  return data;
};

const styles = StyleSheet.create({
  component: {
    flex: 1,
    height: 200,
    marginHorizontal: 25,
  },
  title: { marginVertical: 24, fontSize: 14, color: '#A1A1A1' },
  subtitle: {
    color: 'gray',
    textAlign: 'left',
    width: '100%',
  },
  rowView: { flexDirection: 'row' },
  heart: {
    position: 'absolute',
    right: 15,
    top: 15,
  },
});
