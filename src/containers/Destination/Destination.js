import Config from 'react-native-config';
import React, { Component } from 'react';
import ReadMore from 'react-native-read-more-text';
import { Image, View, StatusBar, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import { List, ListItem, Text, Avatar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/EvilIcons';
import IconEntypo from 'react-native-vector-icons/Entypo';
import { Container, H3, Title, Body, Left, Right } from 'native-base';
import HorizontalScroll from '../../components/HorizontalScroll/HorizontalScroll';
import { Header, Button, Card } from 'react-native-elements';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import Backgroundimage from '../../components/Backgroundimage/Backgroundimage';
import styles from './styles';
import Favorite from '../../components/Favorite/Favorite';

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
const RowView = ({ title }) => (
  <View
    style={{
      flexDirection: 'row',
      alignSelf: 'stretch',
      justifyContent: 'space-between',
      marginTop: 16,
    }}
  >
    <Text
      style={{
        color: '#A1A1A1',
        fontWeight: 'normal',
        fontSize: 13,
      }}
    >
      {title}
    </Text>
    <Icon
      style={{
        fontSize: 23,
        color: '#46DFE8',
      }}
      name="plus"
    />
  </View>
);
const InfoRowView = ({ title }) => (
  <View
    style={{
      flexDirection: 'row',
      alignSelf: 'stretch',
      marginTop: 16,
      alignItems: 'center',
    }}
  >
    <Icon
      style={{
        fontSize: 30,
        color: '#46DFE8',
      }}
      name="image"
    />
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        alignSelf: 'stretch',
        justifyContent: 'space-between',
        borderBottomColor: 'rgba(112, 112, 112, 0.2)',
        borderBottomWidth: 1,
      }}
    >
      <Text
        style={{
          color: '#A1A1A1',
          fontWeight: 'normal',
          fontSize: 13,
          marginLeft: 20,
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
);
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
const Destination = () => (
  <Container>
    <ScrollView style={{ backgroundColor: '#FFFFFF' }}>
      <View
        style={{
          height: 400,
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          backgroundColor: '#FFFFFF',
        }}
      >
        <Carousel
          data={battleItems}
          renderItem={item => <BattleItem item={item} />}
          sliderWidth={sliderWidth}
          itemWidth={itemWidth}
        />
        <Pagination
          dotsLength={4}
          containerStyle={{
            backgroundColor: 'transparent',
            top: 200,
            height: 100,
            width: sliderWidth,
            position: 'absolute',
          }}
          dotColor="white"
          inactiveDotColor="white"
          inactiveDotOpacity={1}
          inactiveDotScale={0.6}
        />
      </View>
      <View
        style={{
          flexDirection: 'column',
          backgroundColor: '#FFFFFF',
          marginTop: 281,
          marginHorizontal: 23,
          padding: 17,
          elevation: 1,
          shadowOffset: { width: 0, height: 5 },
          shadowColor: 'black',
          shadowOpacity: 0.15,
        }}
      >
        <View style={{ flexDirection: 'row', alignSelf: 'stretch' }}>
          <Text
            style={{
              color: '#222222',
              fontWeight: 'bold',
              fontSize: 32,
            }}
          >
            Kefalonia
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
          GREECE
        </Text>
        <ReadMore
          numberOfLines={4}
          renderTruncatedFooter={handlePress => (
            <Text style={{ color: '#46DFE8', marginTop: 5 }} onPress={handlePress}>
              More
            </Text>
          )}
          renderRevealedFooter={handlePress => (
            <Text style={{ color: '#46DFE8', marginTop: 5 }} onPress={handlePress}>
              Less
            </Text>
          )}
        >
          <Text style={styles.cardText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum
          </Text>
        </ReadMore>
      </View>
      <View
        style={{
          flexDirection: 'column',
          marginTop: 24,
          marginHorizontal: 28,
        }}
      >
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
        <RowView title="Location" />

        <Text
          style={{
            marginTop: 16,
            color: '#222222',
            fontWeight: 'normal',
            fontSize: 15,
          }}
        >
          Kefalonia is the largest of the Ionian islands, situated off the north-western coast of
          Greece. Its nearest neighbour, lying to its west across a channel that measures just 2km
          from the town of Fiskardo, is Ithaki (Ithaca). To the north is Lefkada and to the south
          Zakynthos. The weather is generally mild on the Ionian islands, with long sunny summers
          and rainy winters, but with its high mountain peaks, Kefalonia does often see snowfall in
          the colder months (January-February). As a large and developed island, Kefalonia offers a
          varied selection of towns and resorts, each with their own allure.
        </Text>
        {['Climate', 'Where to stay', 'Getting there', 'Getting around', 'Handy details'].map((text, index) => <RowView key={index} title={text} />)}
      </View>

      <View
        style={{
          height: 245,
          backgroundColor: 'lightgray',
          alignSelf: 'stretch',
          marginVertical: 24,
        }}
      >
        <Text>Map view</Text>
      </View>
      <View
        style={{
          flexDirection: 'column',
          marginHorizontal: 40,
        }}
      >
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

        {['Great Food', 'Adventure and Sports', 'Culture and History', 'Nature', 'Lifestyle'].map((text, index) => <InfoRowView key={index} title={text} />)}
        <HorizontalScroll containerStyle={{ margin: 0, marginTop: 20 }} />
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
          Regina Kouri | Spyros Antonellos | Giola Gyftoula | Vaggelis Ladas | Nitsa Botsa
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 24,
          borderTopColor: 'rgba(112, 112, 112, 0.2)',
          borderTopWidth: 1,
          justifyContent: 'space-between',
        }}
      >
        <View
          style={{
            flexDirection: 'column',
            marginLeft: 28,
          }}
        >
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
        <View
          style={{
            backgroundColor: '#46DFE8',
            paddingHorizontal: 5,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
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
      <View
        style={{
          marginHorizontal: 120,
          backgroundColor: '#F2F2F2',
          height: 1,
          marginVertical: 34,
        }}
      />
    </ScrollView>
  </Container>
);

export default Destination;
