import React from 'react';
import { View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { getPriceTextActivity } from 'src/selectors';
import { Title } from 'native-base';
import { path } from 'ramda';
import Smalltile from '../Smalltile/Smalltile';

const DestinationScroll = ({
  destinations,
  title,
  containerStyle,
  onPress,
}) => (
  <View style={[{ margin: 15 }, containerStyle]}>
    <Title style={{ color: 'black', textAlign: 'left', marginBottom: 17 }}>
      Top Destinations
    </Title>
    <ScrollView horizontal style={{ height: 210 }}>
      {destinations &&
        destinations.map(destination => (
          <Smalltile
            key={destination.id}
            title={destination.name}
            subtitle={path(['extra_fields', 'country'], destination)}
            img={destination.img_preview}
            favourite={destination.favourite}
            onPress={() => onPress(destination)}
          />
        ))}
    </ScrollView>
  </View>
);

export default DestinationScroll;
