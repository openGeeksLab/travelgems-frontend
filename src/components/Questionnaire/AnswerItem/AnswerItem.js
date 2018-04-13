import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SingleItem from '../SingleItem/SingleItem';
import MultipleItem from '../MultipleItem/MultipleItem';
import QCalendar from '../CalendarItem/CalendarItem';
import RangeSlider from '../RangeSlider/RangeSlider';

class AnswerItem extends Component {
  render() {
    const {
      item,
      type,
      key,
      activeIndex,
      onSingleChoice,
      onMultipleChoice,
      onDateChoice,
      sliderValue,
      onSliderChoice,
      itemIndex,
    } = this.props;

    switch (type) {
      case 'single':
        return (
          <SingleItem
            activeIndex={activeIndex}
            itemIndex={itemIndex}
            iconText={item.text}
            onToggle={() => onSingleChoice(item.text)}
          />
        );
      case 'date':
        return <QCalendar onDateChange={onDateChoice} />;
      case 'multiple':
        return (
          <MultipleItem
            text={item.text}
            key={key}
            onToggle={() => onMultipleChoice(item.text)}
          />
        );
      case 'range':
        return (
          <RangeSlider
            item={item}
            key={key}
            sliderValue={sliderValue}
            // activeIndex={activeIndex}
            onChangeValue={onSliderChoice}
          />
        );
      default:
        return null;
    }
  }
}

AnswerItem.propTypes = {
  item: PropTypes.object,
  type: PropTypes.string,
  key: PropTypes.number,
  activeIndex: PropTypes.number,
  onSingleChoice: PropTypes.func,
  onMultipleChoice: PropTypes.func,
  onDateChoice: PropTypes.func,
  onSliderChoice: PropTypes.func,
  sliderValue: PropTypes.number,
  itemIndex: PropTypes.number,
};

export default AnswerItem;
