import React from 'react';
import { View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { getPriceTextActivity } from 'src/selectors';
import { Title } from 'native-base';
import Smalltile from '../Smalltile/Smalltile';

const ActivityView = ({ activity }) => (
  <View style={{ width: 150, height: 150 }}>
    <Smalltile
      title={activity.name}
      subtitle={getPriceTextActivity(activity)}
      img={activity.inner_photo}
    />
  </View>
);

const HorizontalScroll = ({ activities, title, containerStyle }) => (
  <View style={[{ margin: 15 }, containerStyle]}>
    <Title style={{ color: 'black', textAlign: 'left' }}>
      Activities in {title}
    </Title>
    <ScrollView horizontal style={{ height: 150 }}>
      {activities &&
        activities.map(activity => (
          <ActivityView activity={activity} key={activity.uuid} />
        ))}
    </ScrollView>
  </View>
);

export default HorizontalScroll;
