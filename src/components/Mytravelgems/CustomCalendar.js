
import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';
import { Agenda,LocaleConfig } from 'react-native-calendars';
export default class CustomCalendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: {}
    };
  }

  render() {
    return (
      <Agenda
      markedDates={{
        '2018-04-04': { marked: true},
        '2012-05-17': {marked: true},
        '2012-05-18': {disabled: true}
      }}

        theme={{
          
          dayTextColor: '#222222',
          textDayFontSize: 16,
          selectedDayTextColor: '#000000',
          agendaDayTextColor: 'red',
          agendaDayNumColor: 'green',
          agendaTodayColor: 'red',
          agendaKnobColor: 'grey',
        
        }}
        items={this.state.items}
       onDayPress={(day) => { this.selectDay(day) }}/>
    );
  }
  selectDay(day) {
  //  alert(JSON.stringify(day.day))

  }
  
}

