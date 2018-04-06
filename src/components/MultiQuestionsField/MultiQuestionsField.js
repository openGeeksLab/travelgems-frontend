import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';
import styles from './styles';
import { COLOR_WHITE, COLOR_TURQUOISE } from '../../constants/Styles';

class MultiQuestionsField extends Component {
  static defaultProps = {
    text: this.props,
    iconText: this.props,
    renderIcon: this.props,
    onToggle: this.props,
    isChecked: false,
  };

  constructor(props) {
    super(props);

    this.state = {
      isChecked: props.isChecked ? props.isChecked : false,
    };
  }

  onToggle = () => {
    const { isChecked } = this.state;
    const { onToggle } = this.props;

    this.setState({
      isChecked: !isChecked,
    });

    if (typeof onToggle === 'function') {
      onToggle();
    }
  };

  renderIcon = () => {
    const { renderIcon } = this.props;
    if (renderIcon) {
      return renderIcon();
    }
    return (
      this.state.isChecked && (
        <Icon size={16} name="check" color={COLOR_WHITE} />
      )
    );
  };

  render() {
    const { isChecked } = this.state;
    const { text } = this.props;

    return (
      <TouchableOpacity
        onPress={this.onToggle}
        style={[styles.container, isChecked && { color: COLOR_WHITE }]}
      >
        <View
          style={[
            styles.checkBoxContainer,
            isChecked && { backgroundColor: COLOR_TURQUOISE },
          ]}
        >
          {this.renderIcon()}
        </View>
        <Text style={styles.fieldText}>{text}</Text>
      </TouchableOpacity>
    );
  }
}

MultiQuestionsField.propTypes = {
  text: PropTypes.string,
  iconText: PropTypes.string,
  isChecked: PropTypes.bool,
  renderIcon: PropTypes.func,
  onToggle: PropTypes.func,
};

export default MultiQuestionsField;
