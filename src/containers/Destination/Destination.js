import React from 'react';
import R from 'ramda';
import { Image, View, Dimensions, ScrollView } from 'react-native';
import { Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/EvilIcons';
import IconEntypo from 'react-native-vector-icons/Entypo';

import { Container } from 'native-base';
import MapView, { Marker } from 'react-native-maps';

import Carousel, { Pagination } from 'react-native-snap-carousel';
import { compose, withHandlers } from 'recompose';
import { connect } from 'react-redux';
import Collapsed from '../../components/Collapsed/Collapsed';
import MoreTextView from '../../components/Collapsed/MoreTextView';
import { destinationsByIdSelector, activitiesSelector } from './selector';

import styles from './styles';
import Favorite from '../../components/Favorite/Favorite';
import HorizontalScroll from '../../components/HorizontalScroll/HorizontalScroll';

const horizontalMargin = 0;
const sliderWidth = Dimensions.get('window').width;
const slideWidth = sliderWidth;
const itemWidth = slideWidth + horizontalMargin * 2;

const battleItems = [
  { prize: 50, imageName: 'prize50' },
  { prize: 200, imageName: 'prize200' },
  { prize: 200, imageName: 'prize200' },
  { prize: 200, imageName: 'prize200' },
];

const InfoRowView = ({ title, description }) =>
  (description && description !== 'NULL' ? (
    <View style={styles.infoRowContainer}>
      <Icon
        style={{
          fontSize: 30,
          color: '#46DFE8',
        }}
        name="image"
      />
      <View style={styles.infoRowTextContainer}>
        <Text
          style={{
            color: '#A1A1A1',
            fontWeight: 'normal',
            fontSize: 13,
          }}
        >
          {title}
        </Text>
        <IconEntypo
          style={{
            fontSize: 13,
            color: '#222222',
          }}
          name="chevron-thin-right"
        />
      </View>
    </View>
  ) : null);

const BattleItem = ({ imageName = '' }) => (
  <View style={styles.slide}>
    <View style={styles.slideInnerContainer}>
      <Image
        style={{ flex: 1, alignSelf: 'stretch' }}
        source={{
          uri:
            'https://www.olympicholidays.com/media/20570/fiskardo_kefalonia_greece.jpg?center=0.37948717948717947,0.51&mode=crop&quality=70&width=550&height=358&rnd=131302560700000000',
        }}
      />
    </View>
  </View>
);

const Destination = ({ destination, activities }) => {
  console.log('activities ===', activities);
  return (
    <Container>
      <ScrollView style={styles.scrollView}>
        <View style={styles.caroselContainer}>
          <Carousel
            data={battleItems}
            renderItem={item => <BattleItem item={item} />}
            sliderWidth={sliderWidth}
            itemWidth={itemWidth}
          />
          <Pagination
            dotsLength={4}
            containerStyle={styles.paginationView}
            dotColor="white"
            inactiveDotColor="white"
            inactiveDotOpacity={1}
            inactiveDotScale={0.6}
          />
        </View>
        <View style={styles.cardContainer}>
          <View style={styles.rowContainer}>
            <Text
              style={{
                color: '#222222',
                fontWeight: 'bold',
                fontSize: 32,
              }}
            >
              {destination.name}
            </Text>
            <Favorite color="blue" />
          </View>
          <Text
            style={{
              color: '#A1A1A1',
              fontWeight: 'bold',
              fontSize: 14,
              marginBottom: 17,
            }}
          >
            {R.path(['extra_fields', 'country'], destination)}
          </Text>
          <MoreTextView description={destination.description} />
        </View>
        <View style={styles.columnTravelContainer}>
          <Text
            style={{
              color: '#222222',
              fontWeight: 'bold',
              fontSize: 24,
              marginTop: 16,
            }}
          >
            Travel Info
          </Text>

          {[
            { id: 'location', title: 'Location' },
            { id: 'climate', title: 'Climate' },
            { id: 'accommodation', title: 'Where to stay' },
            { id: 'getting_there', title: 'Getting there' },
            { id: 'getting_around', title: 'Getting around' },
            { id: 'handy_details', title: 'Handy details' },
          ].map(({ id, title }) => (
            <Collapsed
              key={id}
              title={title}
              description={R.path(['extra_fields', 'travel_info', id], destination)}
            />
          ))}
        </View>

        <MapView
          style={styles.mapView}
          region={{
            latitude: R.path(['extra_fields', 'latitude'], destination),
            longitude: R.path(['extra_fields', 'longitude'], destination),
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
        >
          <Marker
            // image={stopMarker}
            // anchor={{ x: 0.5, y: 0.5 }}
            coordinate={{
              latitude: R.path(['extra_fields', 'latitude'], destination),
              longitude: R.path(['extra_fields', 'longitude'], destination),
            }}
          />
        </MapView>

        <View style={styles.columnContainer}>
          <Text
            style={{
              color: '#222222',
              fontWeight: 'bold',
              fontSize: 24,
              marginTop: 16,
            }}
          >
            Essential Info
          </Text>

          {[
            { id: 'food', title: 'Great Food' },
            { id: 'adventures', title: 'Adventure and Sports' },
            { id: 'culture', title: 'Culture and History' },
            { id: 'nature', title: 'Nature' },
            { id: 'lifestyle', title: 'Lifestyle' },
          ].map(({ id, title }) => (
            <InfoRowView
              key={id}
              title={title}
              description={R.path(['extra_fields', 'essential_info', id], destination)}
            />
          ))}
        </View>
        <HorizontalScroll
          containerStyle={{ margin: 0, marginLeft: 28, marginTop: 20 }}
          activities={activities}
          title={destination.name}
        />
        <View style={styles.columnContainer}>
          <Text
            style={{
              color: '#222222',
              fontWeight: 'bold',
              fontSize: 24,
              marginTop: 20,
            }}
          >
            Our Curators
          </Text>
          <Text
            style={{
              color: '#A1A1A1',
              fontWeight: 'normal',
              fontSize: 13,
              marginTop: 16,
            }}
          >
            {R.path(['extra_fields', 'curators'], destination)}
          </Text>
        </View>
        <View style={styles.tailorPLan}>
          <View style={styles.columnContainer}>
            <Text
              style={{
                color: '#222222',
                fontWeight: 'bold',
                fontSize: 24,
              }}
            >
              Tailor Made Plan
            </Text>
            <Text
              style={{
                color: '#A1A1A1',
                fontWeight: 'normal',
                fontSize: 13,
              }}
            >
              1-12 days
            </Text>
          </View>
          <View style={styles.getPlanView}>
            <Text
              style={{
                color: 'white',
                fontWeight: 'normal',
                fontSize: 14,
              }}
            >
              GET PLAN
            </Text>
          </View>
        </View>
        <View style={styles.bottomLineView} />
      </ScrollView>
    </Container>
  );
};

export default compose(
  connect(
    state => ({
      destination: destinationsByIdSelector(state, '24ed67928db14878b7730baf09f479a2'),
      activities: activitiesSelector(state, '24ed67928db14878b7730baf09f479a2'),
    }),
    {},
  ),
  withHandlers({
    onPressItem: ({ navigation }) => (item) => {
      navigation.navigate('MyScheduleDetail', {
        selectedPerson: item,
      });
    },
  }),
)(Destination);
