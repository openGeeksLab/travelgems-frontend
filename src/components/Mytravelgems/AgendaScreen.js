
import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';
import { Agenda } from 'react-native-calendars';

export default class AgendaScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: {}
    };
  }

  render() {
    return (
      <Agenda
      markingType={'dot'}
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
       // loadItemsForMonth={this.loadItems.bind(this)}
        //renderItem={this.renderItem.bind(this)}
        //renderEmptyDate={this.renderEmptyDate.bind(this)}
        rowHasChanged={this.rowHasChanged.bind(this)}
        onDayPress={(day) => { this.selectDay(day) }}/>
    );
  }
  selectDay(day) {
  //  alert(JSON.stringify(day.day))

  }
  loadItems(day) {
    setTimeout(() => {
      for (let i = -15; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = this.timeToString(time);
        if (!this.state.items[strTime]) {
          this.state.items[strTime] = [];
          const numItems = Math.floor(Math.random() * 5);
          for (let j = 0; j < numItems; j++) {
            this.state.items[strTime].push({
              name: 'Item for ' + strTime,
              height: Math.max(50, Math.floor(Math.random() * 150))
            });
          }
        }
      }
       const newItems = {};
      Object.keys(this.state.items).forEach(key => { newItems[key] = this.state.items[key]; });
      this.setState({
        items: newItems
      });
    }, 1000);
   
  }

  


  rowHasChanged(r1, r2) {
    return r1.name !== r2.name;
  }

  timeToString(time) {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
  }
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'red',
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17
  },
  emptyDate: {
    height: 15,
    flex: 1,
    paddingTop: 30
  }
});
