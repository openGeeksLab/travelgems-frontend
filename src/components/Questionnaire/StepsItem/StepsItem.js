import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import * as Progress from 'react-native-progress';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import {
  COLOR_TURQUOISE,
  COLOR_DARK_OPACITY_20,
} from '../../../constants/Styles';

const { width } = Dimensions.get('window');

class StepsItem extends Component {
  constructor() {
    super();

    this.state = {};
  }

  convert = () => {
    const intVal = this.props.progress / 100;
    return parseInt(intVal);
  };

  render() {
    const { progress, onNextStep, onPrevStep } = this.props;

    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.textStyle}>{`${parseInt(
            progress,
          )}% Completed`}</Text>
          <Progress.Bar
            progress={progress / 100}
            width={width / 1.9}
            height={8}
            borderWidth={0}
            color={COLOR_TURQUOISE}
            unfilledColor={COLOR_DARK_OPACITY_20}
          />
        </View>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            onPress={onPrevStep}
            style={[styles.buttonStyle, { marginRight: 8 }]}
          >
            <Icon size={14} name="ios-arrow-down" color={COLOR_TURQUOISE} />
          </TouchableOpacity>
          <TouchableOpacity onPress={onNextStep} style={styles.buttonStyle}>
            <Icon size={14} name="ios-arrow-up" color={COLOR_TURQUOISE} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

StepsItem.propTypes = {
  progress: PropTypes.number,
  onNextStep: PropTypes.func,
  onPrevStep: PropTypes.func,
};

export default StepsItem;
