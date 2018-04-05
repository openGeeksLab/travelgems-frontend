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
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

const SearchBarResult = ({
  onPressFilter,
  onLeftPress,
  filterText,
}: Object) => (
  <View
    style={{
      marginLeft: 16,
      marginTop: 19,
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

const SearchBar = ({ onPressFilter }) => (
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
const Search = props =>
  props.filterText ? <SearchBarResult {...props} /> : <SearchBar {...props} />;
export default Search;
