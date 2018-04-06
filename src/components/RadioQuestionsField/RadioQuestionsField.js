import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import { COLOR_TURQUOISE } from '../../constants/Styles';

class RadioQuestionsField extends Component {
  static defaultProps = {
    onRadioSelect: () => {},
    item: '',
    index: 0,
    selected: false,
  };

  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { item, index, onRadioSelect, selected } = this.props;

    return (
      <TouchableOpacity
        onPress={onRadioSelect}
        style={[
          styles.radioBoxContainer,
          index === 0 && { marginLeft: 0 },
          selected && {
            backgroundColor: COLOR_TURQUOISE,
          },
        ]}
      >
        <Text style={styles.textStyle}>{item}</Text>
      </TouchableOpacity>
    );
  }
}

RadioQuestionsField.propTypes = {
  onRadioSelect: PropTypes.func,
  item: PropTypes.string,
  selected: PropTypes.bool,
  index: PropTypes.number,
};

export default RadioQuestionsField;
