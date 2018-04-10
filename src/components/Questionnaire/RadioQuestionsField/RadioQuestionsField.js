import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import RulerElements from './RulerElements';
import { COLOR_TURQUOISE } from '../../../constants/Styles';

class RadioQuestionsField extends Component {
  static defaultProps = {
    onRadioSelect: () => {},
    item: '',
    index: 1,
    selected: false,
  };

  constructor(props) {
    super(props);

    this.state = {};
  }

  renderArray = () => {
    const { item } = this.props;

    let start = item.range_min;
    const arr = [];

    while (start <= item.range_max) {
      arr.push(start++);
    }

    return arr;
  };

  render() {
    const { item, onRadioSelect, activeIndex } = this.props;

    return (
      <View style={styles.questionsContainer}>
        <RulerElements />
        <View style={styles.itemContainer}>
          {this.renderArray().map((el, index) => {
            let i = index + 1;
            return (
              <TouchableOpacity
                onPress={() => onRadioSelect(i)}
                key={i}
                style={[
                  styles.radioBoxContainer,
                  i === 1 && { marginLeft: 0 },
                  activeIndex === i && {
                    backgroundColor: COLOR_TURQUOISE,
                  },
                ]}
              >
                <Text style={styles.textStyle}>{i}</Text>
              </TouchableOpacity>
            );
          })}
        </View>

        <View style={styles.containerRange}>
          <Text style={styles.rangeText}>{item.range_min_text}</Text>
          <Text style={styles.rangeText}>{item.range_max_text}</Text>
        </View>
      </View>
    );
  }
}

RadioQuestionsField.propTypes = {
  onRadioSelect: PropTypes.func,
  item: PropTypes.string,
  activeIndex: PropTypes.numberm,
  index: PropTypes.number,
};

export default RadioQuestionsField;
