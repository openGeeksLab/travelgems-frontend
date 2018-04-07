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
import { withNavigation } from 'react-navigation';

const Header = ({ navigation, title }) => (
  <View
    style={{
      paddingTop: 28,
      paddingHorizontal: 20,
      backgroundColor: '#041DB2',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    }}
  >
    <TouchableOpacity onPress={() => navigation.navigate('DrawerOpen')}>
      <Image
        style={{ height: 35, width: 35 }}
        source={require('src/assets/images/burger_menu.png')}
        resizeMode="cover"
      />
    </TouchableOpacity>

    <Text style={{ color: 'white', fontSize: 24 }}>{title}</Text>
    <View />
  </View>
);

export default withNavigation(Header);
