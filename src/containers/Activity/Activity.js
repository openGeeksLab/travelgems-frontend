import React from 'react';
import { View, ScrollView } from 'react-native';
import { Icon } from 'react-native-elements';
import { compose, withHandlers } from 'recompose';
import { connect } from 'react-redux';
import { Container, Text } from 'native-base';
import R from 'ramda';
import { activityByIdSelector } from './selector';
import { activitiesSelector } from '../Destination/selector';
import Backgroundimage from '../../components/Backgroundimage/Backgroundimage';
import CustomHeader from '../../components/CustomHeader/CustomHeader';
import Collapsed from '../../components/Collapsed/Collapsed';
import styles from './styles';
import DaterangeModal from '../../components/DaterangeModal/DaterangeModal';
import HorizontalScroll from '../../components/HorizontalScroll/HorizontalScroll';
import { getPriceTextActivity } from '../../selectors';

const Activity = ({ isModalVisible, activity, moreActivities }) => (
  <Container
    style={{
      backgroundColor: 'white',
    }}
  >
    <DaterangeModal
      isModalVisible={isModalVisible}
      styles={{
        height: 400,
      }}
    />
    <CustomHeader />
    <ScrollView>
      <Backgroundimage
        containStyle={{
          position: 'absolute',
          left: 0,
          right: 0,
          height: 300,
        }}
        blur={true}
      />
      <View style={styles.imageText}>
        <Text style={styles.imageTitle}>{activity.name}</Text>
        <Text style={styles.imageSubtitle}>{activity.category_name}</Text>
      </View>
      <View style={{ marginVertical: 19 }}>
        <View
          style={[
            styles.gridRow,
            {
              borderBottomWidth: 1,
              borderBottomColor: 'rgba(34, 34, 34, 0.1)',
            },
          ]}
        >
          <View
            style={[
              styles.gridItem,
              {
                borderRightWidth: 1,
                borderRightColor: 'rgba(34, 34, 34, 0.1)',
              },
            ]}
          >
            <Icon name="schedule" color="#15ABC2" size={30} />
            <Text style={styles.gridTitle}>DURATION</Text>
            <Text style={styles.gridSubtitle}>
              {R.path(['extra_fields', 'duration'], activity)}
            </Text>
          </View>
          <View
            style={[
              styles.gridItem,
              {
                borderRightWidth: 1,
                borderRightColor: 'rgba(34, 34, 34, 0.1)',
              },
            ]}
          >
            <Icon name="language" color="#15ABC2" size={30} />
            <Text style={styles.gridTitle}>LANGUAGE</Text>
            <Text style={styles.gridSubtitle}>
              {R.path(['extra_fields', 'language'], activity)}
            </Text>
          </View>
          <View style={styles.gridItem}>
            <Icon name="people" color="#15ABC2" size={30} />
            <Text style={styles.gridTitle}>PARTICIPANTS</Text>
            <Text style={styles.gridSubtitle}>
              {R.path(['extra_fields', 'participants'], activity)}
            </Text>
          </View>
        </View>
        <View style={styles.gridRow}>
          <View
            style={[
              styles.gridItem,
              {
                borderRightWidth: 1,
                borderRightColor: 'rgba(34, 34, 34, 0.1)',
              },
            ]}
          >
            <Icon
              name="directions-car"
              color="#15ABC2"
              size={30}
              containerStyle={{ marginTop: 10 }}
            />
            <Text style={styles.gridTitle}>TRANSORTATION</Text>
            <Text style={styles.gridSubtitle}>
              {R.path(['extra_fields', 'transfer'], activity)}
            </Text>
          </View>
          <View
            style={[
              styles.gridItem,
              {
                borderRightWidth: 1,
                borderRightColor: 'rgba(34, 34, 34, 0.1)',
              },
            ]}
          >
            <Icon
              name="done"
              color="#15ABC2"
              size={30}
              containerStyle={{ marginTop: 10 }}
            />
            <Text style={styles.gridTitle}>CONFIRMATION</Text>
            <Text style={styles.gridSubtitle}>
              {R.path(['extra_fields', 'confirmation'], activity)}
            </Text>
          </View>
          <View style={styles.gridItem}>
            <Icon
              name="euro-symbol"
              color="#15ABC2"
              size={30}
              containerStyle={{ marginTop: 10 }}
            />
            <Text style={styles.gridTitle}>REFUND</Text>
            <Text style={styles.gridSubtitle}>
              {R.path(['extra_fields', 'refund'], activity)}
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          marginHorizontal: 32,
        }}
      >
        <Text style={styles.infoViewTitle}>Info</Text>
        {[
          {
            id: 'short_description',
            title: 'At a glance',
          },
          // { id: 'Itenerary', title: 'Itenerary' },
          {
            id: 'cancellation',
            title: 'Cancellation',
          },
          {
            id: 'content',
            title: 'Important info',
          },
          {
            id: 'details',
            title: 'Handy details',
          },
        ].map(({ id, title }) => (
          <Collapsed
            key={id}
            title={title}
            description={R.path(['extra_fields', id], activity)}
          />
        ))}
      </View>
      {moreActivities && (
        <HorizontalScroll
          containerStyle={{ margin: 0, marginLeft: 28, marginTop: 20 }}
          activities={moreActivities}
          title={activity.category_name}
        />
      )}
      <View
        style={{
          marginTop: 25,
          paddingTop: 20,
          borderTopWidth: 1,
          borderTopColor: 'rgba(149, 152, 154, 0.25)',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <View
          style={{
            marginHorizontal: 32,
            flexDirection: 'column',
          }}
        >
          <Text
            style={{
              color: 'rgba(34, 34, 34, 0.45)',
              fontWeight: 'normal',
              fontSize: 11,
            }}
          >
            From
          </Text>
          <Text
            style={{
              color: '#222222',
              fontWeight: 'bold',
              fontSize: 18,
            }}
          >
            {getPriceTextActivity(activity)}
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
            BOOK NOW
          </Text>
        </View>
      </View>
      <View style={styles.bottomLineView} />
    </ScrollView>
  </Container>
);
export default compose(
  connect(
    state => ({
      activity: activityByIdSelector(state, 'a14572be64a44a86a9335d98dea03802'),
      moreActivities: activitiesSelector(
        state,
        '24ed67928db14878b7730baf09f479a2',
      ),
    }),
    {},
  ),
  withHandlers({
    onPressItem: ({ navigation }) => item => {
      navigation.navigate('MyScheduleDetail', {
        selectedPerson: item,
      });
    },
  }),
)(Activity);
