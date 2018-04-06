import React, { Component } from 'react';
import { View } from 'react-native';
import moment from 'moment';
import PropTypes from 'prop-types';
import CalendarPicker from '../../components/react-native-calendar-picker/CalendarPicker/index';
import { COLOR_WHITE, COLOR_TURQUOISE } from '../../constants/Styles';
import styles from './styles';

class QCalendar extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { onDateChange } = this.props;

    return (
      <View style={styles.container}>
        <CalendarPicker
          onDateChange={onDateChange}
          minDate={moment()}
          allowRangeSelection
          textStyle={{
            // fontFamily: 'Cochin',
            color: COLOR_WHITE,
          }}
          selectedRangeStartStyle={styles.selectedRangeStartStyle}
          selectedRangeStyle={styles.selectedRangeStyle}
          selectedRangeEndStyle={styles.selectedRangeEndStyle}
          selectedDayStyle={styles.selectedDayStyle}
          selectedDayColor={COLOR_TURQUOISE}
          selectedDayTextColor={COLOR_WHITE}
          todayBackgroundColor={COLOR_TURQUOISE}
        />
      </View>
    );
  }
}

QCalendar.defaultProps = {
  onDateChange: () => {},
};

QCalendar.propTypes = {
  onDateChange: PropTypes.func,
};

export default QCalendar;
