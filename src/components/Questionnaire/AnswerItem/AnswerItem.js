import React, { Component } from 'react';
import PropTypes from 'prop-types';
import QuestionsField from '../QuestionsField/QuestionsField';
import MultiQuestionsField from '../MultiQuestionsField/MultiQuestionsField';
import QCalendar from '../QuestionnaireCalendar/Calendar';
import RadioQuestionsField from '../RadioQuestionsField/RadioQuestionsField';

class AnswerItem extends Component {
  render() {
    const {
      item,
      type,
      key,
      // activeIndex,
      onCheckedHandle,
      onCheckMultiHandle,
      onDateChangeHandle,
      onSliderChangeValueHandle,
      sliderValue,
    } = this.props;

    switch (type) {
      case 'single':
        return (
          <QuestionsField
            // text={item.text}
            iconText={item.text}
            onToggle={() => onCheckedHandle(item.text)}
          />
        );
      case 'date':
        return <QCalendar onDateChange={onDateChangeHandle} />;
      case 'multiple':
        return (
          <MultiQuestionsField
            text={item.text}
            key={key}
            onToggle={() => onCheckMultiHandle(key)}
          />
        );
      case 'range':
        return (
          <RadioQuestionsField
            item={item}
            key={key}
            sliderValue={sliderValue}
            // activeIndex={activeIndex}
            onSliderChangeValue={onSliderChangeValueHandle}
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
  onCheckedHandle: PropTypes.func,
  sliderValue: PropTypes.number,
  onCheckMultiHandle: PropTypes.func,
  onDateChangeHandle: PropTypes.func,
  onSliderChangeValueHandle: PropTypes.func,
};

export default AnswerItem;
