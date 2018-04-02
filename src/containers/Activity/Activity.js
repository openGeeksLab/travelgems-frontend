import Config from 'react-native-config';
import React from 'react';
import {
  Image,
  View,
  StatusBar,
  Linking,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from 'react-native';
import { Icon } from 'react-native-elements';
import { compose, withHandlers } from 'recompose';
import { connect } from 'react-redux';
import { Container, Text } from 'native-base';
import R from 'ramda';
import Backgroundimage from '../../components/Backgroundimage/Backgroundimage';
import CustomHeader from '../../components/CustomHeader/CustomHeader';
import Collapsed from '../../components/Collapsed/Collapsed';
import styles from './styles';
import DaterangeModal from '../../components/DaterangeModal/DaterangeModal';

const Activity = ({ isModalVisible, activity }) => (
  <Container style={{ backgroundColor: 'white' }}>
    <DaterangeModal isModalVisible={isModalVisible} styles={{ height: 400 }} />
    <CustomHeader />

    <ScrollView>
      <Backgroundimage
        containStyle={{
          position: 'absolute',
          left: 0,
          right: 0,
          height: 300,
        }}
      />
      <View style={styles.imageText}>
        <Text style={styles.imageTitle}>Jeep Safari in the{'\n'}National Park</Text>
        <Text style={styles.imageSubtitle}>Kefalonia</Text>
      </View>

      <View>
        <View style={styles.gridRow}>
          <View style={styles.gridItem}>
            <Icon name="schedule" color="#15ABC2" />
            <Text style={styles.gridTitle}>TITLE</Text>
            <Text style={styles.gridSubtitle}>Subtitle</Text>
          </View>
          <View style={styles.gridItem}>
            <Icon name="language" color="#15ABC2" />
            <Text style={styles.gridTitle}>TITLE</Text>
            <Text style={styles.gridSubtitle}>Subtitle</Text>
          </View>
          <View style={styles.gridItem}>
            <Icon name="people" color="#15ABC2" />
            <Text style={styles.gridTitle}>TITLE</Text>
            <Text style={styles.gridSubtitle}>Subtitle</Text>
          </View>
        </View>
        <View style={styles.gridRow}>
          <View style={styles.gridItem}>
            <Icon name="directions-car" color="#15ABC2" />
            <Text style={styles.gridTitle}>TITLE</Text>
            <Text style={styles.gridSubtitle}>Subtitle</Text>
          </View>
          <View style={styles.gridItem}>
            <Icon name="done" color="#15ABC2" />
            <Text style={styles.gridTitle}>TITLE</Text>
            <Text style={styles.gridSubtitle}>Subtitle</Text>
          </View>
          <View style={styles.gridItem}>
            <Icon name="euro-symbol" color="#15ABC2" />
            <Text style={styles.gridTitle}>TITLE</Text>
            <Text style={styles.gridSubtitle}>Subtitle</Text>
          </View>
        </View>
      </View>

      <View style={{ marginHorizontal: 32 }}>
        <Text style={styles.infoViewTitle}>Info</Text>
        {[
          { id: 'short_description', title: 'At a glance' },
          // { id: 'Itenerary', title: 'Itenerary' },
          { id: 'cancellation', title: 'Cancellation' },
          { id: 'content', title: 'Important info' },
          { id: 'details', title: 'Handy details' },
        ].map(({ id, title }) => (
          <Collapsed key={id} title={title} description={R.path(['extra_fields', id], activity)} />
        ))}
      </View>
      <View style={{ marginHorizontal: 32, borderTopWidth: 1, borderTopColor: '#95989A' }}>
        <View style={{ marginHorizontal: 32 }}>
          <Text>From</Text>
          <Text>From</Text>
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
        <View style={styles.bottomLineView} />
      </View>
    </ScrollView>
  </Container>
);
export default compose(
  connect(
    state => ({
      activity: state.content.activitiesById[state.content.activitiesArray[1].uuid],
      moreActivities:
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
)(Activity);
