import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';
import styles from './styles';
import { COLOR_WHITE, COLOR_TURQUOISE } from '../../constants/Styles';

class QuestionsField extends Component {
  static defaultProps = {
    text: this.props,
    iconText: this.props,
    renderIcon: this.props,
    onToggle: this.props,
  };

  constructor(props) {
    super(props);

    this.state = {
      isChecked: false,
      value: props.text ? props.text : '',
    };
  }

  onToggle = () => {
    const { isChecked, value } = this.state;
    const { onToggle } = this.props;

    this.setState({
      isChecked: !isChecked,
    });

    if (typeof onToggle === 'function') {
      onToggle(!isChecked ? value : '');
    }
  };

  renderIcon = () => {
    const { renderIcon, iconText } = this.props;
    if (renderIcon) {
      return renderIcon();
    }
    return <Text style={styles.checkBoxText}>{iconText}</Text>;
  };

  render() {
    const { isChecked } = this.state;

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
        <Text style={styles.fieldText}>{this.state.value}</Text>
        {isChecked && (
          <Icon
            size={16}
            name="check"
            color={COLOR_WHITE}
            style={styles.chekedIcon}
          />
        )}
      </TouchableOpacity>
    );
  }
}

QuestionsField.propTypes = {
  text: PropTypes.string,
  iconText: PropTypes.string,
  renderIcon: PropTypes.func,
  onToggle: PropTypes.func,
};

export default QuestionsField;
