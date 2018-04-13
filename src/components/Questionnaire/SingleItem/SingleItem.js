import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';
import styles from './styles';
import { COLOR_WHITE, COLOR_TURQUOISE } from '../../../constants/Styles';

class SingleItem extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  onToggle = (index) => {
    const { onToggle, text } = this.props;

    if (typeof onToggle === 'function') {
      onToggle(this.isChecked() ? '' : text);
    }
  };

  renderIcon = () => {
    const { renderIcon, iconText } = this.props;
    if (renderIcon) {
      return renderIcon();
    }
    return <Text style={styles.checkBoxText}>{iconText}</Text>;
  };

  isChecked = () => {
    const { activeIndex, itemIndex } = this.props;

    return activeIndex === itemIndex;
  };

  render() {
    const { text } = this.props;

    return (
      <TouchableOpacity
        onPress={this.onToggle}
        style={[styles.container, this.isChecked() && { color: COLOR_WHITE }]}
      >
        <View
          style={[
            styles.checkBoxContainer,
            this.isChecked() && { backgroundColor: COLOR_TURQUOISE },
          ]}
        >
          {this.renderIcon()}
        </View>
        <Text style={styles.fieldText}>{text}</Text>
        {this.isChecked() && (
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

SingleItem.propTypes = {
  text: PropTypes.string,
  iconText: PropTypes.string,
  activeIndex: PropTypes.number,
  itemIndex: PropTypes.number,
  renderIcon: PropTypes.func,
  onToggle: PropTypes.func,
};

export default SingleItem;
