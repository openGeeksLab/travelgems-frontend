import React from 'react';
import { View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { getPriceTextActivity } from 'src/selectors';
import { Title } from 'native-base';
import Smalltile from '../Smalltile/Smalltile';

const HorizontalScroll = ({ activities, title, containerStyle }) => (
  <View style={[{ margin: 15 }, containerStyle]}>
    <Title style={{ color: 'black', textAlign: 'left' }}>
      Activities in {title}
    </Title>
    <ScrollView horizontal style={{ height: 200, marginTop: 20 }}>
      {activities &&
        activities.map(activity => (
          <Smalltile
            key={activity.uuid}
            title={activity.name}
            subtitle={getPriceTextActivity(activity)}
            subtitleStyle={{ color: '#46DFE8', fontSize: 9 }}
            titleStyle={{ fontSize: 15 }}
            img={activity.inner_photo}
          />
        ))}
    </ScrollView>
  </View>
);

export default HorizontalScroll;
