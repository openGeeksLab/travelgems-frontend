import React from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Text,
} from 'react-native';
import { getPriceTextActivity } from 'src/selectors';
import { Title } from 'native-base';
import Favorite from '../../components/Favorite/Favorite';

const styles = StyleSheet.create({
  container: {
    width: 230,
    height: 295,
    backgroundColor: 'white',
    marginRight: 16,
    borderRadius: 5,

    elevation: 1,
    shadowOffset: { width: 0, height: 5 },
    shadowColor: 'black',
    shadowOpacity: 0.15,
  },

  title: {
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'left',
    color: 'black',
  },
  subtitle: {
    color: 'gray',
  },
  image: {
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    overflow: 'hidden',
    height: 230,
    width: 230,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignSelf: 'stretch',
  },
  heart: {
    marginRight: 9,
    marginTop: 9,
  },
});

const ActivityView = ({ activity, onPress, favorite }) => (
  <View>
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.image}
        onPress={() => {
          onPress();
        }}
      >
        <Image
          style={styles.image}
          resizeMode="cover"
          source={{ uri: activity.inner_photo }}
        />
      </TouchableOpacity>
      <View
        style={{
          marginLeft: 16,
          marginTop: 15,
          flexDirection: 'row',
          alignSelf: 'stretch',
          justifyContent: 'space-between',
        }}
      >
        <View style={{ flexDirection: 'column', flex: 1 }}>
          <Title style={styles.title}>{activity.name}</Title>
          <Text style={styles.subtitle}>{getPriceTextActivity(activity)}</Text>
        </View>
        <Favorite style={styles.heart} favorite={favorite} color="blue" />
      </View>
    </View>
  </View>
);

const HorizontalScroll = ({ activities, containerStyle }) => (
  <ScrollView
    horizontal
    style={[{ height: 300, marginLeft: 15 }, containerStyle]}
  >
    {activities &&
      activities.map(activity => (
        <ActivityView activity={activity} key={activity.uuid} />
      ))}
  </ScrollView>
);

export default HorizontalScroll;
