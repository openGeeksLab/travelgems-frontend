import React, { Component } from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';
import Slider from '../../../components/MySlider/Slider';
import styles from './styles';
import RulerElements from './RulerElements';

class RangeSlider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: props.sliderValue || 1,
    };
  }

  onChangeValue = (value) => {
    const { onChangeValue } = this.props;

    this.setState({
      value,
    });

    if (typeof onChangeValue === 'function') {
      onChangeValue(value);
    }
  };

  render() {
    const { item } = this.props;
    const { value } = this.state;

    return (
      <View style={styles.container}>
        <RulerElements style={{ marginBottom: 2 }} />
        <View style={styles.sliderContainer}>
          <Slider
            value={value}
            step={1}
            minimumValue={item.range_min}
            maximumValue={item.range_max}
            onValueChange={this.onChangeValue}
            trackStyle={styles.trackStyle}
            thumbStyle={styles.thumbStyle}
            minimumTrackTintColor="transparent"
            customComponent={
              <View style={styles.customComponent}>
                <Text style={styles.customComponentText}>{value}</Text>
              </View>
            }
          />
        </View>
        <RulerElements />
        <View style={styles.containerRange}>
          <Text style={styles.rangeText}>{item.range_min_text}</Text>
          <Text style={styles.rangeText}>{item.range_max_text}</Text>
        </View>
      </View>
    );
  }
}

RangeSlider.propTypes = {
  onChangeValue: PropTypes.func,
  sliderValue: PropTypes.number,
  item: PropTypes.string,
  index: PropTypes.number,
};

export default RangeSlider;
