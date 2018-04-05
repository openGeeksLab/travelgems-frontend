import React, { Component } from 'react';
import { View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Tile } from 'react-native-elements';
import {
  Container,
  Header,
  Content,
  Thumbnail,
  Text,
  Title,
} from 'native-base';
import styles from './styles';
import Dates from 'react-native-dates';
import Modal from 'react-native-modal';
import moment from 'moment';

class DaterangeModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: this.props.isModalVisible,
      date: null,
      focus: 'startDate',
      startDate: null,
      endDate: null,
    };
  }
  _toggleModal = () =>
    this.setState({ isModalVisible: !this.state.isModalVisible });
  render() {
    console.log('date range render');
    const isDateBlocked = date => date.isBefore(moment(), 'day');

    const onDatesChange = ({ startDate, endDate, focusedInput }) =>
      this.setState({ ...this.state, focus: focusedInput }, () =>
        this.setState({ ...this.state, startDate, endDate }),
      );

    const onDateChange = ({ date }) => this.setState({ ...this.state, date });
    return (
      <Modal
        isVisible={this.state.isModalVisible}
        animationInTiming={1000}
        animationOutTiming={1000}
        backdropTransitionInTiming={1000}
        backdropTransitionOutTiming={1000}
      >
        <View
          style={{
            backgroundColor: 'white',
            padding: 10,
            justifyContent: 'center',
            borderRadius: 4,
            borderColor: 'rgba(0, 0, 0, 0.1)',
          }}
        >
          <TouchableOpacity onPress={this._toggleModal}>
            <Text>Hide me!</Text>
          </TouchableOpacity>
          <View style={{}}>
            <Dates
              onDatesChange={onDatesChange}
              isDateBlocked={isDateBlocked}
              startDate={this.state.startDate}
              endDate={this.state.endDate}
              focusedInput={this.state.focus}
              range
            />

            {this.state.date && (
              <Text style={styles.date}>
                {this.state.date && this.state.date.format('LL')}
              </Text>
            )}
            <Text
              style={[
                styles.date,
                this.state.focus === 'startDate' && styles.focused,
              ]}
            >
              {this.state.startDate && this.state.startDate.format('LL')}
            </Text>
            <Text
              style={[
                styles.date,
                this.state.focus === 'endDate' && styles.focused,
              ]}
            >
              {this.state.endDate && this.state.endDate.format('LL')}
            </Text>
          </View>
        </View>
      </Modal>
    );
  }
}
DaterangeModal.defaultProps = {};
export default DaterangeModal;
