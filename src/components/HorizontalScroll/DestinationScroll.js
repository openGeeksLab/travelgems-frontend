import React from 'react';
import { View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { getPriceTextActivity } from 'src/selectors';
import { Title } from 'native-base';
import Smalltile from '../Smalltile/Smalltile';

const DestinationView = ({ destination }) => (
  <View style={{ width: 150, height: 150 }}>
    <Smalltile
      title={destination.name}
      subtitle={getPriceTextActivity(destination)}
      img={destination.inner_photo}
    />
  </View>
);

const DestinationScroll = ({ destinations, title, containerStyle }) => (
  <View style={[{ margin: 15 }, containerStyle]}>
    <Title style={{ color: 'black', textAlign: 'left' }}>
      Activities in {title}
    </Title>
    <ScrollView horizontal style={{ height: 150 }}>
      {destinations &&
        destinations.map(destination => (
          <DestinationView destination={destination} key={destination.uuid} />
        ))}
    </ScrollView>
  </View>
);

export default DestinationScroll;
