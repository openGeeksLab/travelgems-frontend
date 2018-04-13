import React from 'react';
import {
  FlatList,
  View,
  TextInput,
  ImageBackground,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

const SearchBarResult = ({
  onPressFilter,
  onLeftPress,
  filterText,
  containerStyle,
}: Object) => (
  <View
    style={[
      {
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
      },
      containerStyle,
    ]}
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

    <TouchableOpacity onPress={onPressFilter}>
      <Image
        style={{ height: 35, width: 35 }}
        source={require('src/assets/images/Destination/filter_icon.png')}
        resizeMode="cover"
      />
    </TouchableOpacity>
  </View>
);

const SearchBar = ({
  onSearchText,
  onPressFilter,
  placeholder = 'Type a destination?',
}) => (
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
        marginLeft: 5,
        fontSize: 25,
        color: '#000000',
      }}
      name={'search'}
    />
    <TextInput
      style={{ fontSize: 16, flex: 1 }}
      placeholderTextColor="rgba(0, 0, 0, 0.58)"
      placeholder={placeholder}
      returnKeyType="search"
      onSubmitEditing={event => {
        onSearchText(event.nativeEvent.text);
      }}
    />
    <TouchableOpacity onPress={onPressFilter}>
      <Image
        style={{ height: 35, width: 35 }}
        source={require('src/assets/images/Destination/filter_icon.png')}
        resizeMode="cover"
      />
    </TouchableOpacity>
  </View>
);

const Search = props =>
  props.filterText ? <SearchBarResult {...props} /> : <SearchBar {...props} />;
export default Search;
