import React from 'react';
import {
  ScrollView,
  View,
  TextInput,
  ImageBackground,
  Text,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import { slice, append } from 'ramda';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Modal from 'react-native-modal';
import Button from '../../components/common/Button';

const FilterModal = ({
  isModalVisible,
  setIsModalVisible,
  filters,
  onPressFilter,
  containerStyle,
}: Object) => (
  <Modal
    isVisible={isModalVisible}
    // animationInTiming={1000}
    // animationOutTiming={1000}
    // backdropTransitionInTiming={1000}
    // backdropTransitionOutTiming={1000}
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
        style={{ flexDirection: 'row', marginTop: 34, marginHorizontal: 25 }}
      >
        {getCountyFilters(filters).map((text, index) => (
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
    </View>
  </Modal>
);

const getCountyFilters = filters => {
  const data = filters.reduce((result, text, index) => {
    const array = text.split(':');
    if (array.length > 1) {
      result[array[0]] = result[array[0]]
        ? append(array[1], result[array[0]])
        : [array[1]];
    }
    return result;
  }, {});
  return data.country;
};

export default FilterModal;
